
// icons
// add user to the chat
import { PiUserCirclePlusFill } from "react-icons/pi"
// hand pointer
import { FaHandPointLeft } from "react-icons/fa"

// sub-chats
import ChatsLeftSideBar from "./sub-chats/ChatsLeftSideBar"
import ChatsBox from "./sub-chats/ChatsBox"
// main
// Chats
const Chats = () => {
  return (
    <div className="flex-grow flex">
        <ChatsLeftSideBar />
        {
          true 
          ?
          <ChatsBox />
          :
          <div className="flex-grow flex justify-center pt-5">
            <div className="flex flex-col items-center">
              <PiUserCirclePlusFill className="text-3xl opacity-[.75] animate-bounce my-3"/>
              <span className="text-xl opacity-[.35] font-bold">Select User</span>
              <FaHandPointLeft className="text-xl opacity-[.5]"/>
            </div>
          </div>
        }
    </div>
  )
}

export default Chats