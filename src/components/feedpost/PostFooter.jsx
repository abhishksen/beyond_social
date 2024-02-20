import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text, useDisclosure } from "@chakra-ui/react"
import { useRef, useState } from "react"
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assets/constant";
import usePostComment from "../../hooks/usePostComment";
import useAuthStore from "../../store/authStore";
import useLikePost from "../../hooks/useLikePost";
import { timeAgo } from "../../utils/timeAgo";
import CommentsModal from "../modals/CommentsModal";

const PostFooter = ({ post, isProfilePage, creatorProfile }) => {

    const { isCommenting, handlePostComment } = usePostComment();
    const [comment, setComment] = useState("");

    const authUser = useAuthStore(state => state.user);

    const commentRef = useRef(null);

    const { handleLikePost, isLiked, likes } = useLikePost(post);

    const { isOpen, onClose, onOpen } = useDisclosure();

    const handleSubmitComment = async () => {
        if (comment.trim() === "") return;
        await handlePostComment(post.id, comment);
        setComment("");
    }



    return (
        <Box mb={10} mt={"auto"}>
            <Flex
                alignItems={'center'}
                gap={4}
                w={'full'}
                pt={2}
                mb={2}
                mt={4}
            >
                <Box onClick={handleLikePost}
                    cursor={'pointer'}
                    fontSize={18}
                >
                    {
                        !isLiked ? (<NotificationsLogo />) : (<UnlikeLogo />)
                    }
                </Box>
                <Box
                    cursor={'pointer'}
                    fontSize={18}
                    onClick={() => commentRef.current.focus()}
                >
                    <CommentLogo />
                </Box>
            </Flex>
            <Text
                fontWeight={600}
                fontSize={'sm'}
            >
                {likes} likes
            </Text>
            {isProfilePage && (
                <Text fontSize={"12"} color={"gray"}>
                    Posted {timeAgo(post.createdAt)}
                </Text>
            )}
            {!isProfilePage && (<>
                <Text
                    fontWeight={700}
                    fontSize={'sm'}
                >
                    {creatorProfile?.userName}{" "}
                    <Text
                        fontWeight={400}
                        as={'span'}
                    >
                        {post.caption}
                    </Text>
                </Text>
                {post.comments.length > 0 && (
                    <Text
                        fontSize={'sm'}
                        color={'gray.500'}
                        cursor={"pointer"}
                        onClick={onOpen}
                    >
                        View all {post.comments.length} comments
                    </Text>
                )}
                {isOpen ? <CommentsModal isOpen={isOpen} onClose={onClose} post={post} /> : null}
            </>)}

            {authUser && (
                <Flex
                    alignItems={'center'}
                    justifyContent={'center'}
                    gap={4}
                    w={'full'}
                >
                    <InputGroup>
                        <Input variant={'flushed'} placeholder={'Add a comment...'} fontSize={14}
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            ref={commentRef}
                        />
                        <InputRightElement>
                            <Button
                                variant={'unstyled'}
                                fontSize={14}
                                fontWeight={600}
                                color={'blue.500'}
                                _hover={{ color: 'white' }}
                                bg={'transparent'}
                                cursor={'pointer'}
                                isLoading={isCommenting}
                                onClick={handleSubmitComment}
                            >Post</Button>
                        </InputRightElement>
                    </InputGroup>
                </Flex>
            )}

        </Box>
    )
}

export default PostFooter
