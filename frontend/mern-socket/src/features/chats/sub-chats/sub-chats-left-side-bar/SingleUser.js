
// sub-users
import GetProfile from "../../../users/sub-users/GetProfile"
import GetUsername from "../../../users/sub-users/GetUsername"
// main
// SingleUser
const SingleUser = () => {
  return (
    <div className="flex items-center justify-between pr-1 pb-1 mb-2 cursor-pointer border-b border-emerald-700 border-opacity-[.13]">
        <div className="flex items-center">
            <GetProfile />
            <span className="ml-1">
                <GetUsername />
            </span>
        </div>
        <div>msg</div>
    </div>
  )
}

export default SingleUser