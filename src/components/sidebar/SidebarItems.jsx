import CreatePost from "./CreatePost"
import Home from "./Home"
import Notifications from "./Notifications"
import ProfileLink from "./Profilelink"
import Search from "./Search"

const SidebarItems = () => {
    return (
        <>
            <Home />
            <Search />
            <Notifications />
            <CreatePost />
            <ProfileLink />
        </>
    )
}

export default SidebarItems
