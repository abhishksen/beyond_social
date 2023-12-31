import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react'
import FeedPost from './FeedPost'
import { useEffect, useState } from 'react';
const FeedPosts = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000)
    }, [])
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
            {!isLoading && (
                <>
                    <FeedPost
                        img='/img1.jpg'
                        username='sen_abhishk'
                        avatar='/img1.jpg'
                    />
                    <FeedPost
                        img='/img2.jpg'
                        username='bangali_babu'
                        avatar='/img2.jpg'
                    />
                    <FeedPost
                        img='/img3.jpg'
                        username='programmer_123'
                        avatar='/img3.jpg'
                    />
                    <FeedPost
                        img='/img4.jpg'
                        username='kyu_bola'
                        avatar='/img4.jpg'
                    />
                </>
            )}
        </Container>
    )
}

export default FeedPosts
