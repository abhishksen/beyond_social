import { Box, Image } from '@chakra-ui/react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import useGetUserProfileById from '../../hooks/useGetUserProfileById'
const FeedPost = ({ post }) => {
    const { userProfile } = useGetUserProfileById(post.createdBy);
    return (
        <>
            <PostHeader post={post} creatorProfile={userProfile} />
            <Box
                my={4}
                overflow={'hidden'}
                borderRadius={8}
            >
                <Image src={post.imageURL} alt='user post image' />
            </Box>
            {/* <PostFooter username={username} /> */}
        </>
    )
}

export default FeedPost
