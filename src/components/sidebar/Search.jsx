import { Flex, Text, Tooltip } from "@chakra-ui/react"
import { SearchLogo } from "../../assets/constant"

const Search = () => {
    return (
        <Tooltip
            hasArrow
            label={"Search"}
            placement={'right'}
            ml={1}
            openDelay={500}
            display={{ base: 'block', md: 'none' }}
        >
            <Flex
                gap={5}
                p={2}
                w={{ base: '10', md: 'full' }}
                justifyContent={{ base: 'center', md: 'flex-start' }}
                alignItems={{ base: 'center', md: 'flex-start' }}
                borderRadius={6}
                _hover={{ bg: 'whiteAlpha.400' }}
            >
                <SearchLogo />
                <Text display={{ base: 'none', md: 'block' }}>Search</Text>
            </Flex>
        </Tooltip>
    )
}

export default Search
