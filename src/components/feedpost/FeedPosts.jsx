import { Box, Container, Flex, Skeleton, SkeletonCircle, Text, VStack } from '@chakra-ui/react'
import FeedPost from './FeedPost'
import useGetFeedPosts from '../../hooks/useGetFeedPosts';

const FeedPosts = () => {
    const { isLoading, posts } = useGetFeedPosts();

    return (
        <Container maxW={'container.sm'} py={6} px={2}>
            {isLoading && [0, 1, 2, 3].map((_, idx) => (
                <VStack key={idx} alignItems={'flex-start'} mb={10}>
                    <Flex gap={2} alignItems={'center'} justifyContent={'flex-start'} py={2}>
                        <SkeletonCircle size={'10'} />
                        <VStack gap={2} alignItems={'flex-start'}>
                            <Skeleton height={'10px'} w={'200px'} />
                            <Skeleton height={'10px'} w={'200px'} />
                        </VStack>
                    </Flex>
                    <Skeleton w={'full'} >
                        <Box height={'450px'}>Contents Wrapped</Box>
                    </Skeleton>
                </VStack>
            ))}
            {!isLoading && posts.length > 0 && posts.map(post => (
                <FeedPost key={post.id} post={post} />
            ))}
            {!isLoading && posts.length === 0 && (
                <VStack alignItems={'center'} justifyContent={'center'} h={'70vh'}>
                    <Box fontSize={'2xl'} fontWeight={'medium'}>
                        No Posts to show! Follow some users to see their posts.
                    </Box>
                </VStack>
            )}
        </Container>
    )
}

export default FeedPosts
