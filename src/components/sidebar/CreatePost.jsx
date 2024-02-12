import { Button, CloseButton, Flex, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea, Tooltip, useDisclosure } from "@chakra-ui/react"
import { CreatePostLogo } from "../../assets/constant"
import { BsFillImageFill } from "react-icons/bs"
import { useRef, useState } from "react";
import usePreviewImage from "../../hooks/usePreviewImage";
import useShowToast from "../../hooks/useShowtoast";
import useAuthStore from "../../store/authStore";
import usePostStore from "../../store/postStore";
import useUserProfileStore from "../../store/userProfileStore";
import { useLocation } from "react-router-dom";
import { addDoc, arrayUnion, collection, doc, updateDoc } from "firebase/firestore"
import { firestore, storage } from "../../firebase/firebase.js"
import { getDownloadURL, ref, uploadString } from "firebase/storage";

const CreatePost = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [caption, setCaption] = useState("");
    const imageRef = useRef(null);
    const { handleFileChange, selectedFile, setSelectedFile } = usePreviewImage();
    const showToast = useShowToast();
    const { isLoading, handleCreatePost } = useCreatePost();

    const handlePostCreation = async () => {
        try {
            await handleCreatePost(selectedFile, caption);
            onClose();
            setCaption("");
            setSelectedFile(null);
        } catch (error) {
            showToast("Error", error.message, "error");
        }
    }

    return (
        <>
            <Tooltip
                hasArrow
                label={"Create"}
                placement={'right'}
                ml={1}
                openDelay={500}
                display={{ base: 'block', md: 'none' }}
            >
                <Flex
                    gap={5}
                    p={2}
                    w={{ base: '10', md: 'full' }}
                    justifyContent={{ base: 'center', md: 'flex-start' }}
                    alignItems={{ base: 'center', md: 'flex-start' }}
                    borderRadius={6}
                    _hover={{ bg: 'whiteAlpha.400' }}
                    onClick={onOpen}
                >
                    <CreatePostLogo />
                    <Text display={{ base: 'none', md: 'block' }}>Create</Text>
                </Flex>
            </Tooltip>

            <Modal isOpen={isOpen} onClose={onClose} size='xl'>
                <ModalOverlay />

                <ModalContent bg={"gray.900"}>
                    <ModalHeader>Create Post</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Textarea placeholder='Post caption...'
                            value={caption}
                            onChange={(e) => setCaption(e.target.value)}
                        />

                        <Input type='file' ref={imageRef} hidden onChange={handleFileChange} />

                        <BsFillImageFill
                            onClick={() => imageRef.current.click()}
                            style={{ marginTop: "15px", marginLeft: "5px", cursor: "pointer" }}
                            size={16}
                        />

                        {selectedFile && (
                            <Flex mt={5} w={"full"} position={"relative"} justifyContent={"center"}>
                                <Image src={selectedFile} alt="selected image" />
                                <CloseButton
                                    position={"absolute"}
                                    top={2}
                                    right={2}
                                    onClick={() => { setSelectedFile(null) }}
                                />
                            </Flex>
                        )}

                    </ModalBody>

                    <ModalFooter>
                        <Button mr={3} onClick={handlePostCreation} isLoading={isLoading}>Post</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </>
    )
}

export default CreatePost

function useCreatePost() {
    const showToast = useShowToast();
    const [isLoading, setIsLoading] = useState(false);
    const authUser = useAuthStore((state) => state.user);
    const createPost = usePostStore((state) => state.createPost);
    const addPost = useUserProfileStore((state) => state.addPost);
    const { pathname } = useLocation();


    const handleCreatePost = async (selectedFile, caption) => {
        if (isLoading) return;
        if (!selectedFile) {
            // showToast("Error", "Please select an image", "error");
            throw new Error("Please select an image");
        }
        setIsLoading(true);

        const newPost = {
            caption: caption,
            likes: [],
            comments: [],
            createdAt: Date.now(),
            createdBy: authUser.uid,
        }

        try {
            const postDocRef = await addDoc(collection(firestore, "posts"), newPost);
            const userDocRef = doc(firestore, "users", authUser.uid);
            const imageRef = ref(storage, `posts/${postDocRef.id}`);

            await updateDoc(userDocRef, { posts: arrayUnion(postDocRef.id) });
            await uploadString(imageRef, selectedFile, "data_url");
            const downloadURL = await getDownloadURL(imageRef);

            await updateDoc(postDocRef, { imageURL: downloadURL });

            newPost.imageURL = downloadURL;

            createPost({ ...newPost, id: postDocRef.id });
            addPost({ ...newPost, id: postDocRef.id })

            showToast("Success", "Post created successfully", "success");

        } catch (error) {
            showToast("Error", error.message, "error");
        } finally {
            setIsLoading(false);
        }
    }
    return { isLoading, handleCreatePost }
}
