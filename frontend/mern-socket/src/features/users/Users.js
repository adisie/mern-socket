import {useSelector} from 'react-redux'

// actions from slices
// users slice
import {
  selectUsersDirection,
} from './usersSlice'

// sub-users
// Login
import Login from './sub-users/Login'
// Signup
import Signup from './sub-users/Signup'

// main
// Users
const Users = () => {
  // states from slices
  // users slice
  const usersDirection = useSelector(selectUsersDirection)
  return (
    <div className="flex-grow flex">
      <div className="primary-layout flex-grow flex">
        {
          usersDirection === 'LOGIN'
          ?
          <Login />
          :
          usersDirection === 'SIGNUP'
          ?
          <Signup />
          :
          <></>
        }
      </div>
    </div>
  )
}

export default Users