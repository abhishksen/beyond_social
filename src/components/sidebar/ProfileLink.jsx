import { Avatar, Link, Text, Tooltip } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import useAuthStore from "../../store/authStore"

const ProfileLink = () => {
    const authUser = useAuthStore(state => state.user);
    return (
        <Tooltip
            hasArrow
            label={"Profile"}
            placement={'right'}
            ml={1}
            openDelay={500}
            display={{ base: 'block', md: 'none' }}
        >
            <Link as={RouterLink}
                to={`/${authUser?.userName}`}
                display={'flex'}
                gap={5}
                p={2}
                w={{ base: '10', md: 'full' }}
                justifyContent={{ base: 'center', md: 'flex-start' }}
                // alignItems={{ base: 'center', md: 'flex-start' }}
                alignItems={"center"}
                borderRadius={6}
                _hover={{ bg: 'whiteAlpha.400' }}
            >
                <Avatar size={'sm'} src={authUser?.profilePicURL || " "} />
                <Text display={{ base: 'none', md: 'block' }}>Profile</Text>
            </Link>
        </Tooltip>
    )
}

export default ProfileLink
