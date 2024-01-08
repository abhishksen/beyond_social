import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react"
import { useState } from "react"
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assets/constant";

const PostFooter = ({ username, isProfilePage }) => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(1000);

    const handleLike = () => {
        if (liked) {
            setLiked(false);
            setLikes(likes - 1);
        } else {
            setLiked(true);
            setLikes(likes + 1);
        }
    }

    return (
        <Box mb={10} mt={"auto"}>
            <Flex
                aliiItems={'center'}
                gap={4}
                w={'full'}
                pt={2}
                mb={2}
                mt={4}
            >
                <Box onClick={handleLike}
                    cursor={'pointer'}
                    fontSize={18}
                >
                    {
                        liked ? (<NotificationsLogo />) : (<UnlikeLogo />)
                    }
                </Box>
                <Box
                    cursor={'pointer'}
                    fontSize={18}
                >
                    <CommentLogo />
                </Box>
            </Flex>
            <Text
                fontWeight={600}
                fontSize={'sm'}
            >
                {likes} likes
            </Text>
            {!isProfilePage && (<>
                <Text
                    fontWeight={700}
                    fontSize={'sm'}
                >
                    {username}{" "}
                    <Text
                        fontWeight={400}
                        as={'span'}
                    >
                        Feeling Good
                    </Text>
                </Text>
                <Text
                    fontSize={'sm'}
                    color={'gray.500'}
                >
                    View all 100 comments
                </Text>
            </>)}
            <Flex
                aliiItems={'center'}
                justifyContent={'center'}
                gap={4}
                w={'full'}
            >
                <InputGroup>
                    <Input variant={'flushed'} placeholder={'Add a comment...'} fontSize={14} />
                    <InputRightElement>
                        <Button
                            variant={'unstyled'}
                            fontSize={14}
                            fontWeight={600}
                            color={'blue.500'}
                            _hover={{ color: 'white' }}
                            bg={'transparent'}
                            cursor={'pointer'}
                        >Post</Button>
                    </InputRightElement>
                </InputGroup>
            </Flex>
        </Box>
    )
}

export default PostFooter
