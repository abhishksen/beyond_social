import { Avatar, Button, Flex, Text } from "@chakra-ui/react"
import useLogout from "../../hooks/useLogout"
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";
const SuggestedHeader = () => {
    const { handleLogout, loading } = useLogout();
    const authUser = useAuthStore(state => state.user);

    if (!authUser) return null;

    return (
        <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
            <Flex alignItems={'center'} gap={4}>
                <Link to={`${authUser.userName}`}>
                    <Avatar size={'md'} src={authUser.profilePicURL} />
                </Link>
                <Link to={`${authUser.userName}`}>
                    <Text fontSize={16} fontWeight={'bold'}>
                        {authUser.fullName}
                    </Text>
                </Link>
            </Flex>
            <Button
                size={'xs'}
                background={"transparent"}
                _hover={{ background: 'transparent' }}
                fontSize={'md'} fontWeight={'md'} cursor={'pointer'} color={'blue.500'}
                onClick={handleLogout}
                isLoading={loading}
            >Logout</Button>
        </Flex>
    )
}

export default SuggestedHeader
