import { Avatar, Flex, Text } from "@chakra-ui/react"

const Comment = ({ createdAt, username, profilePic, text }) => {
    return (
        <Flex
            gap={4}
        >
            <Avatar src={profilePic} name={username} size={"sm"} />
            <Flex
                direction={"column"}
            >
                <Flex
                    gap={2}
                    alignItems={{ base: "center", md: "flex-start" }}
                // textAlign={"center"}
                >
                    <Text fontSize={14} fontWeight={"md"}>{username}</Text>
                    <Text fontSize={14} color={"gray.400"}>{text}</Text>
                </Flex>
                <Text fontSize={12} color={"gray"}>{createdAt}</Text>
            </Flex>
        </Flex>
    )
}

export default Comment
