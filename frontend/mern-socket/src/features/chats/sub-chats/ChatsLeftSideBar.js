
// sub-chats-left-side-bar
import SearchUser from "./sub-chats-left-side-bar/SearchUser"
import UsersList from "./sub-chats-left-side-bar/UsersList"

// main
// ChatsLeftSideBar
const ChatsLeftSideBar = () => {
  return (
    <div className="flex flex-col">
        <SearchUser />
        <UsersList />
    </div>
  )
}

export default ChatsLeftSideBar