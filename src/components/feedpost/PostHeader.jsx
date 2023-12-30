import { Avatar, Flex, Text, Box } from '@chakra-ui/react'
const PostHeader = () => {
    const formattedDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
    return (
        <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'} my={4}>
            <Flex alignItems={'center'} gap={2}>
                <Avatar size={'sm'} src={'./profilepic.jpg'} alt='user profile pic' />
                <Flex gap={2} alignItems={'center'} textAlign={'center'}>
                    <Text fontWeight={'bold'}>Username</Text>
                    <Text fontSize={'sm'} color={'gray.500'} >{formattedDate}</Text>
                </Flex>
            </Flex>
            <Box
                bg={'#2e3144'}
                borderRadius={'md'}
                px={2}
                py={1}
                cursor={'pointer'}
            >
                <Text
                    fontSize={'sm'}
                    fontWeight={'medium'}
                    color={'white'}
                    _hover={{
                        color: 'blue.500',
                        // textDecoration: 'underline',
                        // textDecorationColor: 'blue.500'
                    }}
                    transition={'all .3s ease-in-out'}
                >Unfollow</Text>
            </Box>
        </Flex >
    )
}

export default PostHeader
