import { Container, Flex } from "@chakra-ui/react"
import ProfileHeader from "../../components/profile/ProfileHeader"
import ProfileTabs from "../../components/profile/ProfileTabs"
import ProfilePosts from "../../components/profile/ProfilePosts"
import useGetUserProfileByUsername from "../../hooks/useGetUserProfileByUsername"
import { useParams } from "react-router-dom"

const ProfilePage = () => {

    const { username } = useParams();

    const { isLoading, userProfile } = useGetUserProfileByUsername(username);

    const userNotFound = !userProfile && !isLoading;

    if (userNotFound) return <UserNotFound />

    return (
        <Container
            maxW={'container.lg'}
            py={5}
        >
            <Flex
                py={10}
                px={4}
                pl={{ base: 4, md: 10 }}
                w={'full'}
                mx={'auto'}
                flexDirection={'column'}
            >
                {!isLoading && userProfile && <ProfileHeader />}
                {/* profile header skeleton */}
                {isLoading && (
                    <Flex
                        w={'full'}
                        h={'full'}
                        align={'center'}
                        justify={'center'}
                        py={10}
                    >
                        <h1>Loading...</h1>
                    </Flex>
                )}
            </Flex>
            <Flex
                px={{ base: 2, sm: 4 }}
                maxW={"full"}
                mx={'auto'}
                borderTop={'1px solid'}
                borderColor={"whiteAlpha.400"}
                direction={'column'}
            >
                <ProfileTabs />
                <ProfilePosts />
            </Flex>
        </Container>
    )
}

export default ProfilePage

const UserNotFound = () => {
    return (
        <Container
            maxW={'container.lg'}
            py={5}
        >
            <Flex
                px={{ base: 2, sm: 4 }}
                maxW={"full"}
                mx={'auto'}
                borderTop={'1px solid'}
                borderColor={"whiteAlpha.400"}
                direction={'column'}
            >
                <Flex
                    w={'full'}
                    h={'full'}
                    align={'center'}
                    justify={'center'}
                    py={10}
                >
                    <h1>User not found</h1>
                </Flex>
            </Flex>
        </Container>
    )
}