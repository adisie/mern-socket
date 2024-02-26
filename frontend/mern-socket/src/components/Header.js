import {
    NavLink,
} from 'react-router-dom'
import {
    useSelector,
} from 'react-redux'

// actions from slices
// users slice
import {
    selectUser,
} from '../features/users/usersSlice'

// icons
// chat icon
import { IoIosChatbubbles } from "react-icons/io"

// sub-headers
// LoggedInHeader
import LoggedInHeader from './sub-headers/LoggedInHeader'
// LoggedOutHeader
import LoggedOutHeader from './sub-headers/LoggedOutHeader'

// main
// Header
const Header = () => {
    // states from slices
    // users slice
    const user = useSelector(selectUser)

  return (
    <header className='primary-bg py-1'>
        <div className='primary-layout flex items-center justify-between'>
            {/* menu icon and site logo */}
            <div className='flex items-center'>
                {/* site logo */}
                <div>
                    <NavLink to={'/'} className={'flex items-center text-xl text-gray-400 font-bold'}>
                        <IoIosChatbubbles className='text-xl text-gray-400'/>
                        <span className='text-xl text-gray-400'>Quick</span><span className='text-gray-300'>Chat</span>
                    </NavLink>
                </div>
            </div>
            {/* search bar  */}
            <div></div>
            {/* sub-headers */}
            {
                user 
                ?
                <LoggedInHeader user={user}/>
                :
                <LoggedOutHeader />
            }
        </div>
    </header>
  )
}

export default Header