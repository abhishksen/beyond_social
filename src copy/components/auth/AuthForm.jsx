import { Box, Button, Flex, Image, Input, Text, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true)
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleAuth = () => {
        console.log(inputs, 'Authenticating...')
        if (!inputs.email || !inputs.password) {
            alert('Please fill all the fields')
            return
        }

        navigate('/');
    }

    return (
        <>
            <Box border={'1px solid grey'} borderRadius={5} padding={5} minW={300}>
                <VStack spacing={4}>
                    <Image src="/logo.jpg" alt="Logo" h={24} w={24} borderRadius={'50%'} cursor={'pointer'} />
                    <Input placeholder="Enter email" type="email" fontSize={15}
                        value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                    />
                    <Input placeholder="Enter password" type="password" fontSize={15}
                        value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                    />

                    {!isLogin ? (
                        <Input placeholder="Confirm password" type="password" fontSize={15}
                            value={inputs.confirmPassword} onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    ) : null}

                    <Button w={'full'} colorScheme="blue" onClick={handleAuth}>
                        {isLogin ? 'Login' : 'Create Account'}
                    </Button>

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
