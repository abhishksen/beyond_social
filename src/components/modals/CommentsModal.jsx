import { Button, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import Comment from "../modals/CommentsModal"
import usePostComment from "../../hooks/usePostComment"
import { useRef } from "react"
import { useEffect } from "react"

const CommentsModal = ({ isOpen, onClose, post }) => {
  const { handlePostComment, isCommenting } = usePostComment()
  const commentRef = useRef(null);
  const commentsContainerRef = useRef(null);

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    if (!commentRef.current.value) return alert("Please enter a comment");
    await handlePostComment(post.id, commentRef.current.value);
    commentRef.current.value = "";
  }

  useEffect(() => {
    const scrollToBottom = () => {
      commentsContainerRef.current.scrollTop = commentsContainerRef.current.scrollHeight;
    };
    if (isOpen) {
      setTimeout(() => {
        scrollToBottom();
      }, 1000);
    }
  }, [isOpen, post?.comments.length]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInLeft">
      <ModalOverlay />
      <ModalContent bg={"gray.900"} maxW={"400px"}>
        <ModalHeader>All Comments</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Flex flexDirection={"column"} gap={4} mb={4} maxH={"250px"} overflowY={"auto"} ref={commentsContainerRef}>
            {post?.comments?.map((comment, idx) => (
              <Comment key={idx} comment={comment} />
            ))}
          </Flex>
          <form onSubmit={handleSubmitComment} style={{ marginTop: "2rem" }}>
            <Input placeholder="Add a comment" size={"sm"} ref={commentRef} />
            <Flex w={"full"} justifyContent={"flex-end"}>
              <Button isLoading={isCommenting} type="submit" size={"sm"} colorScheme={"blue"} ml={"auto"} my={4}>Post</Button>
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default CommentsModal
