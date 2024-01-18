import { Link, Text, Tooltip } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import { AiFillHome } from "react-icons/ai"

const Home = () => {
    return (
        <Tooltip
            hasArrow
            label={"Home"}
            placement={'right'}
            ml={1}
            openDelay={500}
            display={{ base: 'block', md: 'none' }}
        >
            <Link as={RouterLink}
                to={"/"}
                display={'flex'}
                gap={5}
                p={2}
                w={{ base: '10', md: 'full' }}
                justifyContent={{ base: 'center', md: 'flex-start' }}
                // alignItems={{ base: 'center', md: 'flex-start' }}
                alignItems={'center'}
                borderRadius={6}
                _hover={{ bg: 'whiteAlpha.400' }}
            >
                <AiFillHome size={25} />
                <Text display={{ base: 'none', md: 'block' }}>Home</Text>
            </Link>
        </Tooltip>
    )
}

export default Home
