import { Avatar, Box, Divider, Flex, GridItem, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, VStack, useDisclosure } from "@chakra-ui/react"
import { AiFillHeart } from "react-icons/ai"
import { FaComment } from "react-icons/fa"
import { MdDelete } from "react-icons/md"

const ProfilePost = ({ img }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
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
                    _hover={{ opacity: .5 }}
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
                            <Text fontWeight={"bold"} ml={2}>25</Text>
                        </Flex>
                        <Flex>
                            <FaComment size={20} />
                            <Text fontWeight={"bold"} ml={2}>5</Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Image src={img} alt="profile-post" w={"100%"} h={"100%"} objectFit={"cover"} />
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
                        py={5}
                    >
                        <Flex gap={4} w={{ base: "90%", sm: "70%", md: "full" }}
                            mx={"auto"}
                        >
                            {/* image on the left */}
                            <Box
                                borderRadius={4}
                                overflow={"hidden"}
                                border={"1px solid"}
                                borderColor={"whiteAlpha.300"}
                                flex={1.5}
                                maxH={"500px"}
                                overflowY={"auto"}
                            >
                                <Image src={img} alt="profile post" />
                            </Box>
                            {/* other content on the right */}
                            <Flex
                                flex={1}
                                flexDirection={"column"}
                                px={10}
                                display={{ base: "none", md: "block" }}
                            >
                                <Flex
                                    alignItems={"center"}
                                    justifyContent={"space-between"}
                                >
                                    <Flex
                                        alignItems={"center"}
                                        gap={4}
                                    >
                                        <Avatar src="/profilepic.jpg" size={"sm"} name="username" />
                                        <Text fontSize={14} fontWeight={"bold"}>sen_abhishk</Text>
                                    </Flex>
                                    <Box _hover={{ bg: "whiteAlpha.300", color: "red.600" }} borderRadius={4} p={1}>
                                        <MdDelete size={20} cursor="pointer" />
                                    </Box>
                                </Flex>
                                <Divider my={4} bg={"gray.500"} />

                                <VStack
                                    w={"full"}
                                    alignItems={"start"}
                                    maxH={"340px"}
                                    overflowY={"auto"}
                                ></VStack>

                            </Flex>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>

    )
}

export default ProfilePost