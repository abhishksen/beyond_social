import { Box, Button, Flex, Link, Text, Tooltip } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import { Logo, LogoMobile } from "../../assets/constant"
import { BiLogOut } from "react-icons/bi"
import useLogout from "../../hooks/useLogout"
import SidebarItems from "./SidebarItems"

const Sidebar = () => {

    const { handleLogout, loading } = useLogout();

    return (
        <Box
            height={'100vh'}
            borderRight={'1px solid'}
            borderColor={'whiteAlpha.300'}
            py={8}
            position={'sticky'}
            top={0}
            left={0}
            px={{ base: 2, md: 4 }}
        >
            <Flex
                direction={'column'}
                gap={10}
                w={'full'}
                h={'full'}
            >
                <Link to={'/'} as={RouterLink} display={{ base: 'none', md: 'block' }} cursor={'pointer'}>
                    <Logo />
                </Link>
                <Link to={'/'} as={RouterLink} display={{ base: 'block', md: 'none' }} cursor={'pointer'}>
                    <LogoMobile />
                </Link>
                <Flex direction={'column'} gap={5} cursor={'pointer'}
                    justifyContent={{ base: 'center', md: 'flex-start' }}
                    alignItems={{ base: 'center', md: 'flex-start' }}
                >
                    <SidebarItems />
                </Flex>
                {/* logout */}
                <Tooltip
                    hasArrow
                    label={'Logout'}
                    placement={'right'}
                    ml={1}
                    openDelay={500}
                    display={{ base: 'block', md: 'none' }}
                >
                    <Flex
                        onClick={handleLogout}
                        gap={5}
                        p={2}
                        w={{ base: '10', md: 'full' }}
                        justifyContent={{ base: 'center', md: 'flex-start' }}
                        // alignItems={{ base: 'center', md: 'flex-start' }}
                        alignItems={'center'}
                        borderRadius={6}
                        _hover={{ bg: 'whiteAlpha.400' }}
                        mt={'auto'}
                    >
                        <BiLogOut size={25} />
                        <Button isLoading={loading} variant={"ghost"} _hover={{ bg: 'transparent' }} display={{ base: 'none', md: 'block' }}>Logout</Button>
                    </Flex>
                </Tooltip>
            </Flex>
        </Box>
    )
}

export default Sidebar
