import { useEffect } from "react"
import { useState } from "react"
import useAuthStore from "../store/authStore"
import useUserProfileStore from "../store/userProfileStore"
import useShowToast from "./useShowToast"

import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore"
import { firestore } from "../firebase/firebase"

const useFollowUser = (userId) => {
    const [isUpdating, setIsUpdating] = useState(false)
    const [isFollowing, setIsFollowing] = useState(false)

    const { user, setUser } = useAuthStore()

    const { userProfile, setUserProfile } = useUserProfileStore()

    const showToast = useShowToast()

    useEffect(() => {
        if (user) {
            const isFollowing = user.following.includes(userId)
            setIsFollowing(isFollowing)
        }
    }, [user, userId])

    const handleFollowUser = async () => {

        setIsUpdating(true)
        try {
            const currentUserRef = doc(firestore, "users", user.uid)
            const userToFollowOrUnfollowRef = doc(firestore, "users", userId)

            await updateDoc(currentUserRef, {
                following: isFollowing ? arrayRemove(userId) : arrayUnion(userId)
            })

            await updateDoc(userToFollowOrUnfollowRef, {
                followers: isFollowing ? arrayRemove(user.uid) : arrayUnion(user.uid)
            })

            if (isFollowing) {
                setUser({
                    ...user,
                    following: user.following.filter(followingId => followingId !== userId)
                })
                if (userProfile) {
                    setUserProfile({
                        ...userProfile,
                        followers: userProfile.followers.filter(followerId => followerId !== user.uid)
                    })
                }
                localStorage.setItem("user-info", JSON.stringify({
                    ...user,
                    following: user.following.filter(followingId => followingId !== userId)
                }))
                showToast("Success", `Unfollowed successfully!`, "success")
                setIsFollowing(false)
            } else {
                setUser({
                    ...user,
                    following: [...user.following, userId]
                })
                if (userProfile) {
                    setUserProfile({
                        ...userProfile,
                        followers: [...userProfile.followers, user.uid]
                    })
                }

                localStorage.setItem("user-info", JSON.stringify({
                    ...user,
                    following: [...user.following, userId]
                }))

                showToast("Success", `Followed successfully!`, "success")
                setIsFollowing(true)
            }

        } catch (error) {
            showToast("Error", error.message, "error")
        } finally {
            setIsUpdating(false)
        }
    }

    return {
        isUpdating,
        isFollowing,
        handleFollowUser
    }

}

export default useFollowUser
