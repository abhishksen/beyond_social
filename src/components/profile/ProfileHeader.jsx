import { Avatar, AvatarGroup, Button, Flex, Text, VStack, useDisclosure } from "@chakra-ui/react"
import useUserProfileStore from "../../store/userProfileStore";
import useAuthStore from "../../store/authStore";
import EditProfile from "./EditProfile";
import useFollowUser from "../../hooks/useFollowUser";

const ProfileHeader = () => {
    const { userProfile } = useUserProfileStore();

    const authUser = useAuthStore(state => state.user);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isFollowing, isUpdating, handleFollowUser } = useFollowUser(userProfile?.uid);

    const visitingOwnProfileAndAuth = authUser && authUser.userName === userProfile.userName;
    const visitingAnotherProfileAndAuth = authUser && authUser.userName !== userProfile.userName;



    return (
        <Flex
            gap={{ base: 4, sm: 10 }}
            py={10}
            direction={{ base: 'column', sm: 'row' }}
        >
            <AvatarGroup
                size={{ base: 'xl', md: '2xl' }}
                justifySelf={'center'}
                alignSelf={'flex-start'}
                mx={'auto'}
            >
                <Avatar name="Abhishek Sen" src={userProfile.profilePicURL} alt=" Abhishek Sen" />
            </AvatarGroup>
            <VStack
                alignItems={'start'}
                gap={2}
                mx={'auto'}
                flex={1}
            >
                <Flex
                    gap={4}
                    direction={{ base: 'column', sm: 'row' }}
                    justifyContent={{ base: 'center', sm: 'flex-start' }}
                    alignItems={'center'}
                    w={'full'}
                >
                    <Text fontSize={{ base: 'small', md: 'large' }} >
                        {userProfile.userName}
                    </Text>
                    {visitingOwnProfileAndAuth && (
                        <Flex
                            gap={4}
                            alignItems={'center'}
                            justifyContent={'center'}
                        >
                            <Button
                                variant={'outline'}
                                colorScheme="blue"
                                color={'blue.500'}
                                size={{ base: 'xs', md: 'md' }}
                                onClick={onOpen}
                            >Edit Profile</Button>
                        </Flex>)}
                    {visitingAnotherProfileAndAuth && (
                        <Flex
                            gap={4}
                            alignItems={'center'}
                            justifyContent={'center'}
                        >
                            <Button
                                variant={'ghost'}
                                colorScheme="blue"
                                color={'blue.500'}
                                size={{ base: 'xs', md: 'md' }}
                                onClick={handleFollowUser}
                                isLoading={isUpdating}
                            >
                                {isFollowing ? 'Unfollow' : 'Follow'}
                            </Button>
                        </Flex>)}
                </Flex>
                <Flex
                    gap={{ base: 2, sm: 4 }}
                    alignItems={'center'}
                >
                    <Text>
                        <Text as={'span'} fontWeight={'bold'} mr={1} >
                            {userProfile.posts.length}
                        </Text>
                        Posts
                    </Text>
                    <Text>
                        <Text as={'span'} fontWeight={'bold'} mr={1} >
                            {userProfile.followers.length}
                        </Text>
                        Followers
                    </Text>
                    <Text>
                        <Text as={'span'} fontWeight={'bold'} mr={1} >
                            {userProfile.following.length}
                        </Text>
                        Following
                    </Text>
                </Flex>
                <Flex>
                    <Text fontSize={{ base: 'small', md: 'large' }} fontWeight={'bold'} >
                        {userProfile.fullName}
                    </Text>
                </Flex>
                <Text fontSize={'sm'}>
                    {userProfile.bio}
                </Text>
            </VStack>

            {isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />}

        </Flex>
    )
}

export default ProfileHeader
