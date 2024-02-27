// sub-chats-box
import MessagesList from "./MessagesList"
import NewMessage from "./NewMessage"
// main
// ChatsBoxArea
const ChatsBoxArea = () => {
  return (
    <div className="flex-grow flex flex-col ">
      <MessagesList />
      <NewMessage />
    </div>
  )
}

export default ChatsBoxArea