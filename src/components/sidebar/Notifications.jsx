import { Flex, Text, Tooltip } from "@chakra-ui/react"
import { NotificationsLogo } from "../../assets/constant"

const Notifications = () => {
    return (
        <Tooltip
            hasArrow
            label={"Notifications"}
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
            >
                <NotificationsLogo />
                <Text display={{ base: 'none', md: 'block' }}>Notifications</Text>
            </Flex>
        </Tooltip>
    )
}

export default Notifications
