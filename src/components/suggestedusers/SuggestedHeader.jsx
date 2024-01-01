import { Avatar, Flex, Link, Text } from "@chakra-ui/react"
import { Link as RouterLink } from 'react-router-dom'

const SuggestedHeader = () => {
    return (
        <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
            <Flex alignItems={'center'} gap={4}>
                <Avatar name="Abhishek Sen" size={'md'} src="/profilepic.jpg" />
                <Text fontSize={16} fontWeight={'bold'}>
                    sen_abhishk
                </Text>
            </Flex>
            <Link
                as={RouterLink}
                to={'/auth'}
                fontSize={'md'} fontWeight={'md'} cursor={'pointer'} color={'blue.500'}>Logout</Link>
        </Flex>
    )
}

export default SuggestedHeader
