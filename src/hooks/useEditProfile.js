import { useState } from "react"
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowtoast";
import { firestore, storage } from "../firebase/firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import useUserProfileStore from "../store/userProfileStore";

const useEditProfile = () => {
    const [isUpdating, setIsUpdating] = useState(false);

    const authUser = useAuthStore(state => state.user);

    const setAuthUser = useAuthStore(state => state.setUser);

    const setUserProfile = useUserProfileStore(state => state.setUserProfile)

    const showToast = useShowToast();

    const editProfile = async (inputs, selectedFile) => {
        if (isUpdating || !authUser) return;
        setIsUpdating(true);

        const storageRef = ref(storage, `profilePics/${authUser.uid}`)
        const userDocRef = doc(firestore, "users", authUser.uid);

        let url = ""

        try {
            if (selectedFile) {
                await uploadString(storageRef, selectedFile, "data_url");
                url = await getDownloadURL(ref(storage, `profilePics/${authUser.uid}`));
            }

            const updatedUser = {
                ...authUser,
                fullName: inputs.fullName || authUser.fullName,
                userName: inputs.userName || authUser.userName,
                bio: inputs.bio || authUser.bio,
                profilePicURL: url || authUser.profilePicURL,
            }

            await updateDoc(userDocRef, updatedUser);

            localStorage.setItem("user-info", JSON.stringify(updatedUser));

            setAuthUser(updatedUser);

            setUserProfile(updatedUser);

            showToast("Success", "Profile updated successfully", "success");

        } catch (error) {
            showToast("Error", error.message, "error");
        }
    }
    return { editProfile, isUpdating }
}

export default useEditProfile
