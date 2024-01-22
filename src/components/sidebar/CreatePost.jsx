import { Button, CloseButton, Flex, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea, Tooltip, useDisclosure } from "@chakra-ui/react"
import { CreatePostLogo } from "../../assets/constant"
import { BsFillImageFill } from "react-icons/bs"
import { useRef, useState } from "react";
import usePreviewImage from "../../hooks/usePreviewImage";

const CreatePost = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const [caption, setCaption] = useState("");

    const imageRef = useRef(null);

    const { handleFileChange, selectedFile, setSelectedFile } = usePreviewImage();

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
                        <Button mr={3}>Post</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </>
    )
}

export default CreatePost
