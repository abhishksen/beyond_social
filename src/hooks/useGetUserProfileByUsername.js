import { useEffect, useState } from "react"
import useShowToast from "./useShowToast"
import { collection, query, where, getDocs } from "firebase/firestore"
import { firestore } from "../firebase/firebase"
import useUserProfileStore from "../store/userProfileStore"

const useGetUserProfileByUsername = (username) => {
    const [isLoading, setIsLoading] = useState(false);
    const showToast = useShowToast();

    const { userProfile, setUserProfile } = useUserProfileStore();

    useEffect(() => {
        const getUserProfile = async () => {
            setIsLoading(true);
            try {
                const q = query(collection(firestore, "users"), where("userName", "==", username));
                const querySnapshot = await getDocs(q);

                if (querySnapshot.empty) return setUserProfile(null);

                let userDoc;

                querySnapshot.forEach((doc) => {
                    userDoc = doc.data();
                });

                setUserProfile(userDoc);

            } catch (error) {
                showToast("Error", error.message, "error");
            } finally {
                setIsLoading(false);
            }
        };
        getUserProfile();
    }, [setUserProfile, showToast, username])

    return {
        isLoading,
        userProfile
    }
}

export default useGetUserProfileByUsername
