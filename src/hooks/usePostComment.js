import { useState } from "react"
import useShowToast from "./useShowToast"
import useAuthStore from "../store/authStore"
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import usePostStore from "../store/postStore";

const usePostComment = () => {
    const [isCommenting, setIsCommenting] = useState(false);
    const showToast = useShowToast();
    const authUser = useAuthStore(state => state.user);
    const addComment = usePostStore(state => state.addComment);

    const handlePostComment = async (postId, comment) => {
        if (isCommenting) return;
        if (!authUser) return showToast("Failed to post comment", "You need to be logged in to post a comment", "error");
        setIsCommenting(true);
        const newComment = {
            comment,
            createdAt: Date.now(),
            createdBy: authUser.uid,
            postId,
        }
        try {
            await updateDoc(doc(firestore, "posts", postId), {
                comments: arrayUnion(newComment)
            })
            addComment(postId, newComment);
            showToast("Comment posted", "Your comment has been posted successfully", "success");
        } catch (error) {
            showToast("Failed to post comment", error.message, "error");
        } finally {
            setIsCommenting(false);
        }
    }
    return { isCommenting, handlePostComment }
}

export default usePostComment
