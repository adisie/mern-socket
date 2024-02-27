// sub-chats-box
import ChatsBoxHeader from "./sub-chats-box/ChatsBoxHeader"
import ChatsBoxArea from "./sub-chats-box/ChatsBoxArea"
// main
// ChatsBox
const ChatsBox = () => {
  return (
    <div className="pl-3 flex-grow flex flex-col">
        <ChatsBoxHeader />
        <ChatsBoxArea />
    </div>
  )
}

export default ChatsBox