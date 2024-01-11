import { Avatar, Box, Button, Flex, Link, Text, Tooltip } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import { CreatePostLogo, Logo, LogoMobile, NotificationsLogo, SearchLogo } from "../../assets/constant"
import { AiFillHome } from "react-icons/ai"
import { BiLogOut } from "react-icons/bi"
import useLogout from "../../hooks/useLogout"

const Sidebar = () => {

    const sidebarItems = [
        {
            icon: <AiFillHome size={25} />,
            text: 'Home',
            link: '/'
        },
        {
            icon: <SearchLogo />,
            text: 'Search',
        },
        {
            icon: <NotificationsLogo />,
            text: 'Notifications',
        },
        {
            icon: <CreatePostLogo />,
            text: 'Create',
        },
        {
            icon: <Avatar size={'sm'} name="Abhishek Sen" src="/profilepic.jpg" />,
            text: 'Profile',
            link: '/profile'
        }
    ]

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
                    {
                        sidebarItems.map((item, index) => (
                            <Tooltip
                                hasArrow
                                label={item.text}
                                placement={'right'}
                                key={index}
                                ml={1}
                                openDelay={500}
                                display={{ base: 'block', md: 'none' }}
                            >
                                <Link as={RouterLink}
                                    to={item.link || null}
                                    display={'flex'}
                                    gap={5}
                                    p={2}
                                    w={{ base: '10', md: 'full' }}
                                    justifyContent={{ base: 'center', md: 'flex-start' }}
                                    alignItems={{ base: 'center', md: 'flex-start' }}
                                    borderRadius={6}
                                    _hover={{ bg: 'whiteAlpha.400' }}
                                >
                                    {item.icon}
                                    <Text display={{ base: 'none', md: 'block' }}>{item.text}</Text>
                                </Link>
                            </Tooltip>
                        ))
                    }
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
