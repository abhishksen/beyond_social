import { Box, Flex, Text } from "@chakra-ui/react"
import { BsBookmark, BsGrid3X3, BsHeartFill } from 'react-icons/bs'

const ProfileTabs = () => {
    return (
        <Flex w={'full'} justifyContent={'center'}
            gap={4}
            textTransform={'uppercase'}
            fontWeight={'bold'}
        >
            <Flex
                borderTop={'2px solid white'}
                alignItems={'center'}
                p={3}
                gap={2}
                cursor={'pointer'}
            >
                <Box fontSize={20}>
                    <BsGrid3X3 />
                </Box>
                <Text
                    fontSize={12}
                    display={{ base: 'none', sm: 'block' }}
                >Posts</Text>
            </Flex>

            <Flex
                alignItems={'center'}
                p={3}
                gap={2}
                cursor={'pointer'}
            >
                <Box fontSize={20}>
                    <BsBookmark />
                </Box>
                <Text
                    fontSize={12}
                    display={{ base: 'none', sm: 'block' }}
                >Save</Text>
            </Flex>

            <Flex
                alignItems={'center'}
                p={3}
                gap={2}
                cursor={'pointer'}
            >
                <Box fontSize={20}>
                    <BsHeartFill />
                </Box>
                <Text
                    fontSize={12}
                    display={{ base: 'none', sm: 'block' }}
                >Likes</Text>
            </Flex>

        </Flex>
    )
}

export default ProfileTabs
