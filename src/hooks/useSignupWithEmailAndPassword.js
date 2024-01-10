import { doc, setDoc } from "firebase/firestore";
import { auth, firestore } from "../firebase/firebase"
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth"
import useShowToast from "./useShowToast";

const useSignupWithEmailAndPassword = () => {
    const [createUserWithEmailAndPassword, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const showToast = useShowToast();

    const signup = async (inputs) => {
        if (!inputs.fullName || !inputs.userName || !inputs.email || !inputs.password) {
            showToast("Error", "All the fields are required", "error");
            return;
        }
        try {
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
            if (!newUser && error) {
                showToast("Error", error.message, "error");
                return;
            }
            if (newUser) {
                const userDoc = {
                    uid: newUser.user.uid,
                    email: inputs.email,
                    userName: inputs.userName,
                    fullName: inputs.fullName,
                    bio: "",
                    profilePicURL: '',
                    followers: [],
                    following: [],
                    posts: [],
                    createdAt: Date.now()
                }
                await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
                localStorage.setItem("user-info", JSON.stringify(userDoc));
            }
        } catch (err) {
            showToast("Error", err.message, "error");
        }
    }
    return {
        loading, error, signup
    }
}

export default useSignupWithEmailAndPassword
