import {NavLink} from 'react-router-dom'
import {
  useDispatch,
} from 'react-redux'

// actions from slices
// users slice
import {
  logout,
} from '../../features/users/usersSlice'

// sub-users
// GetProfile
import GetProfile from "../../features/users/sub-users/GetProfile"
// main
// LoggedInHeader
const LoggedInHeader = ({user}) => {
  // hooks
  const dispatch = useDispatch()

  return (
    <div className="flex items-center justify-end">
      <NavLink className={'flex items-center'}>
        <span className="mr-1">
           {user?.username}
        </span>
        <GetProfile />
      </NavLink>
      <button className="header-btns" 
        onClick={()=>{
          dispatch(logout())
        }}
      >Logout</button>
    </div>
  )
}

export default LoggedInHeader