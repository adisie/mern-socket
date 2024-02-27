
// sub-chats-left-side-bar
import SingleUser from "./SingleUser"
// main
// UsersList
const UsersList = () => {
  return (
    <div className="flex-grow mt-1 h-[88vh] overflow-y-auto pr-1" id="chats-user-list">
        <SingleUser />
        <SingleUser />
        <SingleUser />
        <SingleUser />
    </div>
  )
}

export default UsersList