import { Avatar, Flex, Text, Box, SkeletonCircle, Skeleton, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import useFollowUser from '../../hooks/useFollowUser';

const PostHeader = ({ post, creatorProfile }) => {
    const formattedDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
    const { handleFollowUser, isFollowing, isUpdating } = useFollowUser(post.createdBy);

    return (
        <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'} my={4}>
            <Flex alignItems={'center'} gap={2}>
                {creatorProfile ? (
                    <Link to={`/${creatorProfile?.userName}`}>
                        <Avatar size={'sm'} src={creatorProfile?.profilePicURL} alt='user profile pic' />
                    </Link>
                ) : (
                    <SkeletonCircle size={'10'} />
                )}

                <Flex gap={2} alignItems={'center'} textAlign={'center'}>
                    {creatorProfile ? (
                        <Link to={`/${creatorProfile?.userName}`}>
                            <Text fontWeight={'bold'}>{creatorProfile?.userName}</Text>
                        </Link>
                    ) : (
                        <Skeleton w={'100px'} height={'10px'} />
                    )}
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
                <Button
                    size={'xs'}
                    background={'transparent'}
                    fontSize={'12'}
                    fontWeight={'medium'}
                    color={'white'}
                    _hover={{
                        color: 'blue.500',
                    }}
                    transition={'all .3s ease-in-out'}
                    onClick={handleFollowUser}
                    isLoading={isUpdating}
                >
                    {isFollowing ? 'Unfollow' : 'Follow'}
                </Button>
            </Box>
        </Flex >
    )
}

export default PostHeader
