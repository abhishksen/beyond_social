import { Box, Flex } from "@chakra-ui/react"
import Sidebar from "../../components/sidebar/Sidebar"
import { useLocation } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import Navbar from "../../components/navbar/Navbar";

const PageLayout = ({ children }) => {

    const { pathname } = useLocation();
    const [user, loading, error] = useAuthState(auth);
    const canRenderSidebar = pathname !== '/auth' && user;

    const canRenderNavbar = !user && !loading && pathname !== '/auth';

    return (
        <Flex flexDir={canRenderNavbar ? "column" : "row"}>
            {/* sidebar */}
            {canRenderSidebar ? (
                <Box
                    w={{ base: '70px', md: '240px' }}
                >
                    <Sidebar />
                </Box>
            ) : null}

            {/* navbar */}

            {canRenderNavbar ? <Navbar /> : null}

            {/* page content */}
            <Box
                flex={1} w={{ base: 'calc(100% -70px)', md: 'calc(100% - 240px)' }} mx={"auto"}
            >
                {children}
            </Box>
        </Flex>
    )
}

export default PageLayout
