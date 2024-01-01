import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"

const SuggestedUsers = () => {
    return (
        <VStack py={8} px={6} gap={4}>
            <SuggestedHeader />
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

            <SuggestedUser name='Bangali Babu' followers={1255} avatar='/img1.jpg' />
            <SuggestedUser name='Sen Babu' followers={55} avatar='/img4.jpg' />
            <SuggestedUser name='Abhishek' followers={155} avatar='/img2.jpg' />

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
