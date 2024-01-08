import { Box, Container, Flex, Image, VStack } from '@chakra-ui/react'
import AuthForm from '../../components/auth/AuthForm'

const AuthPage = () => {
    return (
        <Flex minH={'100vh'} justifyContent={'center'} alignItems={'center'} px={4}>
            <Container maxW={'container.md'} padding={0} display={'flex'} justifyContent={'center'} alignItems={'center'} gap={10}>
                {/* Image conatiner */}
                <Box display={{ base: 'none', md: 'block' }}>
                    <Image src={'/home.png'} alt='Auth image' />
                </Box>
                {/* form container */}
                <VStack spacing={4} align={'stretch'}>
                    <AuthForm />
                    {/* <Box textAlign={'center'}>Get the App</Box>
                    <Flex gap={5} justifyContent={'center'}>
                        <Image src={'/playstore.png'} h={10} alt='Play store' />
                        <Image src={'/microsoft.png'} h={10} alt='Microsoft store' />
                    </Flex> */}
                </VStack>
            </Container>
        </Flex>
    )
}

export default AuthPage
