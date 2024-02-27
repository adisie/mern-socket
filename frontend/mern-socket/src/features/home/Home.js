
// chats
// Chats
import Chats from "../chats/Chats"
// main
// Home
const Home = () => {
  return (
    <div className="flex-grow flex">
      <div className="primary-layout flex-grow flex py-1">
        <Chats />
      </div>
    </div>
  )
}

export default Home