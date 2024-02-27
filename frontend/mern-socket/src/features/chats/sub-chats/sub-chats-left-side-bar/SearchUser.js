
// icons
// search
import { FiSearch } from "react-icons/fi"

// main
// SearchUser
const SearchUser = () => {
  return (
    <div className="w-full primary-bg">
        <div className="flex items-center px-1 py-[.13rem]">
            <FiSearch className="text-xl mr-1"/>
            <input type="text" placeholder="serach chat" 
                className="bg-transparent focus:outline-none"
            />
        </div>
    </div>
  )
}

export default SearchUser