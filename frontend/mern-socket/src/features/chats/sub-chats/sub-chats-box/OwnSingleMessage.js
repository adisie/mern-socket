
// icons
// delete 
import { MdDelete } from "react-icons/md"

// sub-users
import GetProfile from "../../../users/sub-users/GetProfile"
import GetUsername from "../../../users/sub-users/GetUsername"

// main
// OwnSingleMessage
const OwnSingleMessage = () => {
  return (
    <div className="flex justify-end mb-3">
        <div className="max-w-[75%] flex flex-col">
            {/* message */}
            <div className="flex-grow bg-gray-300 p-1 rounded-sm mr-3">
                <p className="text-justify">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus voluptatibus culpa vitae aliquam corrupti laborum molestiae doloremque, cumque ad, asperiores officiis repellendus, saepe voluptatem soluta placeat natus sapiente aliquid tenetur accusamus earum?
                </p>
            </div>
            {/* users-controll */}
            <div className="flex items-center justify-end my-1">
                <button 
                    className="text-xl opacity-[.35] hover:opacity-[1]"
                >
                    <MdDelete />
                </button>
                <span className="italic mx-3">date</span>
                <span className="mx-1">
                    <GetUsername />
                </span>
                <GetProfile />
            </div>
        </div>
    </div>
  )
}

export default OwnSingleMessage