import { Container, Flex, Box } from '@chakra-ui/react'
import FeedPosts from '../../components/feedpost/FeedPosts'
const HomePage = () => {
    return (
        <Container maxW={'container.lg'}>
            <Flex gap={20}>
                <Box flex={2} py={6}>
                    <FeedPosts />
                </Box>
                <Box
                    flex={3} mr={20}
                    display={{ base: 'none', lg: 'block' }}
                    maxW={'300px'}
                >
                    Suggested Users
                </Box>
            </Flex>
        </Container>
    )
}

export default HomePage
