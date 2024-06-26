import { Avatar, Flex, Text } from "@chakra-ui/react"
import useGetUserProfileById from "../../hooks/useGetUserProfileById";
import { Link } from "react-router-dom";
import { timeAgo } from "../../utils/timeAgo";

const Comment = ({ comment }) => {
    const { userProfile, isLoading } = useGetUserProfileById(comment.createdBy);
    if (isLoading) return <Text>Loading...</Text>
    return (
        <Flex
            gap={4}
        >
            <Link to={`/${userProfile.userName}`}>
                <Avatar src={userProfile.profilePicURL} size={"sm"} />
            </Link>
            <Flex
                direction={"column"}
            >
                <Flex
                    gap={2}
                    alignItems={{ base: "center", md: "flex-start" }}
                // textAlign={"center"}
                >
                    <Link to={`/${userProfile.userName}`}>
                        <Text fontSize={14} fontWeight={"md"}>{userProfile.userName}</Text>
                    </Link>
                    <Text fontSize={14} color={"gray.400"}>{comment.comment}</Text>
                </Flex>
                <Text fontSize={12} color={"gray"}>
                    {timeAgo(comment.createdAt)}
                </Text>
            </Flex>
        </Flex >
    )
}

export default Comment
