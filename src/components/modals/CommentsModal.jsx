import { Button, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import Comment from "../modals/CommentsModal"

const CommentsModal = ({ isOpen, onClose, post }) => {
  console.log(post);
  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInLeft">
      <ModalOverlay />
      <ModalContent bg={"gray.900"} maxW={"400px"}>
        <ModalHeader>All Comments</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Flex flexDirection={"column"} gap={4} mb={4} maxH={"250px"} overflowY={"auto"}>
            {post?.comments?.map((comment, idx) => (
              <Comment key={idx} comment={comment} />
            ))}
          </Flex>
          <form style={{ marginTop: "2rem" }}>
            <Input placeholder="Add a comment" size={"sm"} />
            <Flex w={"full"} justifyContent={"flex-end"}>
              <Button type="submit" size={"sm"} colorScheme={"blue"} ml={"auto"} my={4}>Post</Button>
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default CommentsModal
