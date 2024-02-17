import { Avatar, Button, Divider, Flex, GridItem, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, VStack, useDisclosure } from "@chakra-ui/react"
import { AiFillHeart } from "react-icons/ai"
import { FaComment } from "react-icons/fa"
import { MdDelete } from "react-icons/md"
import Comment from "../comment/Comment"
import PostFooter from "../feedpost/PostFooter"
import useUserProfileStore from "../../store/userProfileStore"
import useAuthStore from "../../store/authStore"
import useShowToast from "../../hooks/useShowToast"
import { useState } from "react"
import { deleteObject, ref } from "firebase/storage"
import { firestore, storage } from "../../firebase/firebase"
import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore"
import usePostStore from "../../store/postStore"
import Caption from "../comment/Caption"

const ProfilePost = ({ post }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const userProfile = useUserProfileStore((state) => state.userProfile);
    const authUser = useAuthStore((state) => state.user);
    const showToast = useShowToast();
    const [isDeleting, setIsDeleting] = useState(false);
    const deletePost = usePostStore((state) => state.deletePost);
    const decrementPostCount = useUserProfileStore((state) => state.deletePost);

    const handleDeletePost = async () => {
        if (!window.confirm("Are you sure you want to delete this post?")) return;
        if (isDeleting) return;
        try {
            setIsDeleting(true);
            const imageRef = ref(storage, `posts/${post.id}`);
            await deleteObject(imageRef);
            const userRef = doc(firestore, "users", authUser.uid);
            await deleteDoc(doc(firestore, "posts", post.id));
            await updateDoc(userRef, {
                posts: arrayRemove(post.id)
            });
            deletePost(post.id);
            decrementPostCount(post.id);
            showToast("Success", "Post deleted successfully", "success");
        } catch (error) {
            showToast("Error", error.message, "error");
        } finally {
            setIsDeleting(false);
        }
    }

    return (
        <>
            <GridItem
                cursor={"pointer"}
                borderRadius={4}
                overflow={"hidden"}
                border={"1px solid"}
                borderColor={"gray.700"}
                position={"relative"}
                aspectRatio={1 / 1}
                onClick={onOpen}
            >
                {/* overlay on hover over the card */}
                <Flex
                    opacity={0}
                    _hover={{ opacity: 0.5 }}
                    position={"absolute"}
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bg={"gray.900"}
                    transition={"all .3s ease"}
                    zIndex={1}
                    // alignItems={"center"}
                    justifyContent={"center"}
                >
                    <Flex
                        justifyContent={'center'}
                        alignItems={"center"}
                        gap={50}
                    >
                        <Flex>
                            <AiFillHeart size={20} />
                            <Text fontWeight={"bold"} ml={2}>
                                {post.likes.length}
                            </Text>
                        </Flex>
                        <Flex>
                            <FaComment size={20} />
                            <Text fontWeight={"bold"} ml={2}>
                                {post.comments.length}
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Image src={post.imageURL} alt="profile-post" w={"100%"} h={"100%"} objectFit={"cover"} />
            </GridItem>

            {/* modal code */}
            <Modal isOpen={isOpen} onClose={onClose}
                isCentered={true}
                size={{ base: "3xl", md: "5xl" }}
            >
                <ModalOverlay />
                <ModalContent>
                    {/* <ModalHeader>Modal Title</ModalHeader> */}
                    <ModalCloseButton />
                    <ModalBody
                        bg={"gray.900"}
                        py={6}
                    >
                        <Flex gap={4}
                            w={{ base: "90%", sm: "70%", md: "full" }}
                            mx={"auto"}
                            maxH={"90vh"}
                            minH={"50vh"}
                        >
                            {/* post image on the left */}
                            <Flex
                                borderRadius={8}
                                overflow={"hidden"}
                                // border={"1px solid"}
                                // borderColor={"whiteAlpha.300"}
                                flex={1.5}
                                maxH={"570px"}
                                overflowY={"auto"}
                                justifyContent={"center"}
                                alignItems={"center"}
                            >
                                <Image src={post.imageURL} alt="profile post" />
                            </Flex>
                            {/* other content on the right */}
                            <Flex
                                flex={1}
                                flexDirection={"column"}
                                px={10}
                                display={{ base: "none", md: "block" }}
                            >
                                {/* user info */}
                                <Flex
                                    alignItems={"center"}
                                    justifyContent={"space-between"}
                                >
                                    <Flex
                                        alignItems={"center"}
                                        gap={4}
                                    >
                                        <Avatar src={userProfile.profilePicURL} size={"sm"} name="username" />
                                        <Text fontSize={14} fontWeight={"bold"}>
                                            {userProfile.userName}
                                        </Text>
                                    </Flex>
                                    {
                                        authUser?.uid === userProfile?.uid && (
                                            <Button
                                                size={"sm"}
                                                bg={"transparent"}
                                                _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
                                                borderRadius={4} p={1}
                                                onClick={handleDeletePost}
                                                isLoading={isDeleting}
                                            >
                                                <MdDelete size={20} cursor="pointer" />
                                            </Button>
                                        )
                                    }
                                </Flex>

                                <Divider my={5} bg={"gray.700"} />

                                <VStack
                                    w={"full"}
                                    alignItems={"start"}
                                    maxH={"340px"}
                                    overflowY={"auto"}
                                >
                                    {/* post caption */}
                                    {post.caption && <Caption post={post} />}

                                    {/* all comments */}
                                    {
                                        post.comments.map(comment => (
                                            <Comment key={comment.createdAt} comment={comment} />
                                        ))
                                    }
                                </VStack>

                                {/* comment input box */}
                                <PostFooter isProfilePage={true} post={post} />

                            </Flex>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>

    )
}

export default ProfilePost
