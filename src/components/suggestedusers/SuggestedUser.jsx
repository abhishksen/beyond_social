import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react"
import { useState } from "react"

const SuggestedUser = ({ name, followers, avatar }) => {
    const [isFollowed, setIsFollowed] = useState(false)

    return (
        <Flex
            justifyContent={'space-between'}
            alignItems={'center'}
            w={'full'}
            py={2}
            gap={4}
        >
            <Flex alignItems={'center'} gap={2}>
                <Avatar src={avatar} size={'md'} name={name} />
                <VStack spacing={2} alignItems={'flex-start'}>
                    <Box fontSize={16} fontWeight={'bold'}>
                        {name}
                    </Box>
                    <Box fontSize={12} color={'grey.500'}>
                        {followers} followers
                    </Box>
                </VStack>
            </Flex>
            <Button
                fontSize={14}
                fontWeight={'medium'}
                letterSpacing={1}
                colorScheme={'blue'}
                size={'sm'}
                onClick={() => setIsFollowed(!isFollowed)}
                cursor={'pointer'}
                _hover={{ opacity: 0.8 }}
            >
                {isFollowed ? 'Unfollow' : 'Follow'}
            </Button>
        </Flex>
    )
}

export default SuggestedUser
