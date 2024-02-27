
// sub-users
import GetProfile from "../../../users/sub-users/GetProfile"
import GetUsername from "../../../users/sub-users/GetUsername"

// main
// ChatsBoxHeader
const ChatsBoxHeader = () => {
  return (
    <div className="bg-black bg-opacity-[.13] p-1 flex items-center">
      <div className="flex items-center">
        <GetProfile />
        <span className="ml-1">
          <GetUsername />
        </span>
      </div>
    </div>
  )
}

export default ChatsBoxHeader