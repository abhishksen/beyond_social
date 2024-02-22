import { useState } from "react"
import useShowtoast from "./useShowToast"

const usePreviewImage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const showToast = useShowtoast();
    const maxFileSizeInBytes = 2 * 1024 * 1024; // 2MB

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            if (file.size > maxFileSizeInBytes) {
                // alert("File size should be less than 2MB");
                showToast("error", "File size should be less than 2MB");
                setSelectedFile(null);
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedFile(reader.result);
            }
            reader.readAsDataURL(file);
        } else {
            showToast("error", "File size should be less than 2MB");
            // alert("File size should be less than 2MB");
            setSelectedFile(null);

        }
    }
    return { selectedFile, handleFileChange, setSelectedFile }
}

export default usePreviewImage
