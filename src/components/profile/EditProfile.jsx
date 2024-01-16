import {
    Avatar,
    Button,
    Center,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Stack,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import useAuthStore from "../../store/authStore";
import usePreviewImage from "../../hooks/usePreviewImage";
import useEditProfile from "../../hooks/useEditProfile";
import useShowToast from "../../hooks/useShowtoast";

const EditProfile = ({ isOpen, onClose }) => {

    const [inputs, setInputs] = useState({
        fullName: "",
        userName: "",
        bio: "",
    });

    const showToast = useShowToast();

    const authUser = useAuthStore(state => state.user);

    const fileRef = useRef(null);

    const { handleFileChange, selectedFile, setSelectedFile } = usePreviewImage();

    const { isUpdating, editProfile } = useEditProfile();

    const handleEditProfile = async () => {
        try {
            await editProfile(inputs, selectedFile);
            setSelectedFile(null);
            onClose();
        } catch (error) {
            showToast("Error", error.message, "error");
        }

    }

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg={"gray.900"} boxShadow={"xl"} mx={3}>
                    <ModalHeader />
                    <ModalCloseButton />
                    <ModalBody>
                        {/* Container Flex */}
                        <Flex bg={"gray.900"}>
                            <Stack spacing={4} w={"full"} maxW={"md"} bg={"gray.900"} p={6} my={0}>
                                <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
                                    Edit Profile
                                </Heading>
                                <FormControl>
                                    <Stack direction={["column", "row"]} spacing={6}>
                                        <Center>
                                            <Avatar size='xl' src={selectedFile || authUser.profilePicURL} border={"2px solid white "} />
                                        </Center>
                                        <Center w='full'>
                                            <Button w='full' isLoading={isUpdating} onClick={() => fileRef.current.click()}>Edit Profile Picture</Button>
                                        </Center>
                                        <Input type={"file"} hidden ref={fileRef} onChange={handleFileChange} />
                                    </Stack>
                                </FormControl>

                                <FormControl>
                                    <FormLabel fontSize={"sm"}>Full Name</FormLabel>
                                    <Input placeholder={"Full Name"} size={"sm"} type={"text"}
                                        value={inputs.fullName || authUser.fullName}
                                        onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                                    />
                                </FormControl>

                                <FormControl>
                                    <FormLabel fontSize={"sm"}>Username</FormLabel>
                                    <Input placeholder={"Username"} size={"sm"} type={"text"}
                                        value={inputs.userName || authUser.userName}
                                        onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}
                                    />
                                </FormControl>

                                <FormControl>
                                    <FormLabel fontSize={"sm"}>Bio</FormLabel>
                                    <Input placeholder={"Bio"} size={"sm"} type={"text"}
                                        value={inputs.bio || authUser.bio}
                                        onChange={(e) => setInputs({ ...inputs, bio: e.target.value })}
                                    />
                                </FormControl>

                                <Stack spacing={6} direction={["column", "row"]}>
                                    <Button
                                        bg={"red.400"}
                                        color={"white"}
                                        w='full'
                                        size='sm'
                                        _hover={{ bg: "red.500" }}
                                        onClick={onClose}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        bg={"blue.600"}
                                        color={"white"}
                                        size='sm'
                                        w='full'
                                        _hover={{ bg: "blue.500" }}
                                        onClick={handleEditProfile}
                                    >
                                        Submit
                                    </Button>
                                </Stack>
                            </Stack>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default EditProfile;