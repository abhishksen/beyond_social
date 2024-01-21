import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers"

const SuggestedUsers = () => {

    const { isLoading, suggestedUsers } = useGetSuggestedUsers();

    if (isLoading) return <div>Loading...</div>



    return (
        <VStack py={8} px={6} gap={4}>
            <SuggestedHeader />

            {suggestedUsers.length !== 0 && (
                <Flex
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    w={'full'}
                    py={4}
                >
                    <Text
                        fontSize={12}
                        fontWeight={'bold'}
                        letterSpacing={1}
                        color={'gray.500'}
                    >Suggested for you</Text>
                    <Text
                        fontSize={12}
                        fontWeight={'bold'}
                        letterSpacing={1}
                        _hover={{ color: 'blue.500' }}
                        cursor={'pointer'}
                    >See All</Text>
                </Flex>
            )}

            {
                suggestedUsers.map((user) => (
                    <SuggestedUser key={user.id} user={user} />
                ))
            }

            <Box
                fontSize={12}
                color={'gray.500'}
                mt={5}
                alignSelf={'flex-start'}
            >
                &#169; Copyright 2024. Build with ❤️ by <br /> <Link href="https://abhisheksen.in" target="_blank" color={'blue.600'} fontSize={14}>
                    Abhishek Sen
                </Link>
            </Box>

        </VStack>
    )
}

export default SuggestedUsers
