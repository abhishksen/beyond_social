import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import useShowToast from "./useShowToast";
import { auth, firestore } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import useAuthStore from "../store/authStore";

const uselogin = () => {
    const showToast = useShowToast();
    const [
        signInWithEmailAndPassword, ,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const loginUser = useAuthStore(state => state.login);

    const login = async (inputs) => {
        if (!inputs.email || !inputs.password) {
            return showToast("Error", "All the fields are required", "error");
        }
        try {
            const userCred = await signInWithEmailAndPassword(inputs.email, inputs.password);
            if (userCred) {
                showToast("Success", "Logged in successfully", "success");
                const docRef = doc(firestore, "users", userCred.user.uid);
                const docSnap = await getDoc(docRef);
                localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
                loginUser(docSnap.data());
            }

        } catch (error) {
            showToast("Error", error.message, "error");
        }
    }

    return {
        login,
        loading,
        error,
    }
}

export default uselogin
