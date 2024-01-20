import { Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, Tooltip, useDisclosure } from "@chakra-ui/react"
import { SearchLogo } from "../../assets/constant"
import useSearchUser from "../../hooks/useSearchUser";
import { useRef } from "react";
import SuggestedUser from "../suggestedusers/SuggestedUser";

const Search = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const searchRef = useRef(null);

    const { user, isLoading, getUserProfile, setUser } = useSearchUser();


    const handleSearchUser = (e) => {
        e.preventDefault();
        getUserProfile(searchRef.current.value);
    }

    // console.log(user)

    return (
        <>
            <Tooltip
                hasArrow
                label={"Search"}
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
                    <SearchLogo />
                    <Text display={{ base: 'none', md: 'block' }}>Search</Text>
                </Flex>
            </Tooltip>

            <Modal
                isOpen={isOpen} onClose={onClose}
                motionPreset="slideInLeft"
            >
                <ModalOverlay />
                <ModalContent
                    bg={"gray.900"}
                    maxW={"400px"}
                >
                    <ModalHeader>Search User</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody
                        pb={6}
                    >
                        <form onSubmit={handleSearchUser}>
                            <FormControl>
                                <FormLabel>Username</FormLabel>
                                <Input placeholder="dem0_user" ref={searchRef} />

                            </FormControl>
                            <Flex w={"full"} justifyContent={"flex-end"}>
                                <Button type="submit" ml={"auto"} my={4} isLoading={isLoading}>Search</Button>
                            </Flex>
                        </form>
                        {
                            user && <SuggestedUser user={user} setUser={setUser} />
                        }
                    </ModalBody>

                </ModalContent>

            </Modal>
        </>
    )
}

export default Search
