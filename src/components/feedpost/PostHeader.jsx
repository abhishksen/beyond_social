import { Avatar, Flex, Text } from '@chakra-ui/react'
const PostHeader = () => {
    return (
        <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'} my={2}>
            <Flex alignItems={'center'} gap={2}>
                <Avatar size={'sm'} src={'./profilepic.jpg'} alt='user profile pic' />
                <Flex gap={2} alignItems={'center'}>
                    <Text fontWeight={'bold'}>Username</Text>
                    <Text fontSize={'sm'} color={'gray.500'} >Created At</Text>
                </Flex>
            </Flex>
        </Flex >
    )
}

export default PostHeader
