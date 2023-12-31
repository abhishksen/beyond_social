import { Box, Image } from '@chakra-ui/react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
const FeedPost = ({ img, username, avatar }) => {
    return (
        <>
            <PostHeader username={username} avatar={avatar} />
            <Box
                my={4}
                overflow={'hidden'}
                borderRadius={8}
            >
                <Image src={img} alt='user post image' />
            </Box>
            <PostFooter username={username} />
        </>
    )
}

export default FeedPost
