import { Avatar, AvatarGroup, Button, Flex, Text, VStack } from "@chakra-ui/react"

const ProfileHeader = () => {
    return (
        <Flex
            gap={{ base: 4, sm: 10 }}
            py={10}
            direction={{ base: 'column', sm: 'row' }}
        // alignItems={{ base: 'center', sm: 'flex-start' }}
        >
            <AvatarGroup
                size={{ base: 'xl', md: '2xl' }}
                justifySelf={'center'}
                alignSelf={'flex-start'}
                mx={'auto'}
            >
                <Avatar name="Abhishek Sen" src="/profilepic.jpg" alt=" Abhishek Sen" />
            </AvatarGroup>
            <VStack
                alignItems={'start'}
                gap={2}
                mx={'auto'}
                flex={1}
            >
                <Flex
                    gap={4}
                    direction={{ base: 'column', sm: 'row' }}
                    justifyContent={{ base: 'center', sm: 'flex-start' }}
                    // justifyContent={'center'}
                    alignItems={'center'}
                    w={'full'}
                >
                    <Text fontSize={{ base: 'small', md: 'large' }} >
                        sen_abhishk
                    </Text>
                    <Flex
                        gap={4}
                        alignItems={'center'}
                        justifyContent={'center'}
                    >
                        <Button
                            variant={'outline'}
                            colorScheme="blue"
                            color={'blue.500'}
                            size={{ base: 'xs', md: 'md' }}
                        >Edit Profile</Button>
                    </Flex>
                </Flex>
                <Flex
                    gap={{ base: 2, sm: 4 }}
                    // direction={{ base: 'column', sm: 'row' }}
                    // justifyContent={{ base: 'center', sm: 'flex-start' }}
                    alignItems={'center'}
                >
                    <Text>
                        <Text as={'span'} fontWeight={'bold'} mr={1} >
                            10
                        </Text>
                        Posts
                    </Text>
                    <Text>
                        <Text as={'span'} fontWeight={'bold'} mr={1} >
                            100
                        </Text>
                        Followers
                    </Text>
                    <Text>
                        <Text as={'span'} fontWeight={'bold'} mr={1} >
                            1000
                        </Text>
                        Following
                    </Text>
                </Flex>
                <Flex>
                    <Text fontSize={{ base: 'small', md: 'large' }} fontWeight={'bold'} >
                        Abhishek Sen
                    </Text>
                </Flex>
                <Text fontSize={'sm'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.
                </Text>
            </VStack>
        </Flex>
    )
}

export default ProfileHeader
