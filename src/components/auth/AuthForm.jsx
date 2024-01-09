import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react"
import { useState } from "react"
import Login from "./Login"
import Signup from "./Signup"

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true)

    return (
        <>
            <Box border={'1px solid grey'} borderRadius={5} padding={5} minW={300}>
                <VStack spacing={4}>
                    <Image src="/logo.jpg" alt="Logo" h={24} w={24} borderRadius={'50%'} cursor={'pointer'} />

                    {isLogin ? <Login /> : <Signup />}

                    <Flex alignItems={'center'} justifyContent={'center'} my={4} gap={2} w={'full'}>
                        <Box w={'full'} h={'1px'} bg={'grey'} />
                        <Text>OR</Text>
                        <Box w={'full'} h={'1px'} bg={'grey'} />
                    </Flex>

                    <Flex alignItems={'center'} justifyContent={'center'} cursor={'pointer'}>
                        <Image src="/google.png" alt="Google logo" w={5} />
                        <Text mx={2} color={'blue.500'}>
                            Continue with Google
                        </Text>
                    </Flex>
                </VStack>
            </Box>

            <Box border={'1px solid grey'} borderRadius={5} padding={5}>
                <Flex justifyContent={'center'} alignItems={'center'}>
                    <Box mx={2} fontSize={15}>
                        {
                            isLogin ? ("Don't have an account?") : ("Already have an account?")
                        }
                    </Box>
                    <Box onClick={() => setIsLogin(!isLogin)} cursor={'pointer'} color={'blue.500'}>
                        {
                            isLogin ? "Sign Up" : "Login"
                        }
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default AuthForm
