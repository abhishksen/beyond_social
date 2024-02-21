import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react"
import useFollowUser from "../../hooks/useFollowUser";
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom"

const SuggestedUser = ({ user, setUser }) => {

    const { isFollowing, isUpdating, handleFollowUser } = useFollowUser(user.uid);

    const authUser = useAuthStore(state => state.user);

    const onFollowUser = async () => {
        await handleFollowUser();
        setUser({
            ...user,
            followers: isFollowing ? user.followers.filter((follower) => follower.uid !== authUser.uid) :
                [...user.followers, authUser],
        })
    }

    return (
        <Flex
            justifyContent={'space-between'}
            alignItems={'center'}
            w={'full'}
            py={2}
            gap={4}
        >
            <Flex alignItems={'center'} gap={2}>
                <Link to={`/${user.userName}`} >
                    <Avatar src={user.profilePicURL} size={'md'} name={user.userName} />
                </Link>
                <VStack spacing={2} alignItems={'flex-start'}>
                    <Link to={`/${user.userName}`} >
                        <Box fontSize={16} fontWeight={'bold'}>
                            {user.fullName}
                        </Box>
                    </Link>
                    <Box fontSize={12} color={'grey.500'}>
                        {user.followers.length} followers
                    </Box>
                </VStack>
            </Flex>
            {
                authUser?.uid !== user?.uid && (
                    <Button
                        fontSize={14}
                        fontWeight={'medium'}
                        letterSpacing={1}
                        colorScheme={'blue'}
                        size={'sm'}
                        onClick={onFollowUser}
                        cursor={'pointer'}
                        _hover={{ opacity: 0.8 }}
                        isLoading={isUpdating}
                    >
                        {isFollowing ? 'Unfollow' : 'Follow'}
                    </Button>
                )
            }
        </Flex>
    )
}

export default SuggestedUser
