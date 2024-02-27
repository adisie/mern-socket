
// icons
// delete 
import { MdDelete } from "react-icons/md"

// sub-users
import GetProfile from "../../../users/sub-users/GetProfile"
import GetUsername from "../../../users/sub-users/GetUsername"

// main
// InCommingMessage
const InCommingMessage = () => {
  return (
    <div className="flex mb-3">
        <div className="max-w-[75%]">

            {/* message */}
            <div className="ml-3 p-1 rounded-sm primary-bg">
                <p className="text-justify">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat tempora a minus. Enim libero distinctio aliquid maiores ipsum rerum iusto repellendus sed minus voluptate. Perferendis, iure! Quidem dolore quaerat tempore quo rerum.
                </p>
            </div>
            {/* users controll */}
            <div className="flex items-center my-1">
                <GetProfile />
                <span className="ml-1">
                    <GetUsername />
                </span>
                <span className="mx-3 italic">
                    date
                </span>
                <button 
                    className="text-xl opacity-[.35] hover:opacity-[1]"
                >
                    <MdDelete />
                </button>
            </div>
        </div>
    </div>
  )
}

export default InCommingMessage