import { Button, Container, Flex, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <Container maxW={"container.lg"} my={4}>
            <Flex w={"full"} justifyContent={{ base: 'center', sm: 'space-between' }} alignItems={"center"}>
                <Image src="/logo.jpg" h={16} borderRadius={"50%"} display={{ base: 'none', sm: 'block' }} cursor={'pointer'} />
                <Flex gap={4}>
                    <Link to="/auth">
                        <Button colorScheme="blue" size={"md"}>Login</Button>
                    </Link>
                    <Link to="/auth">
                        <Button colorScheme="blue" variant={'outline'} size={"md"}>Register</Button>
                    </Link>
                </Flex>
            </Flex>
        </Container>
    )
}

export default Navbar
