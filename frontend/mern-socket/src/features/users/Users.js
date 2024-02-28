import {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'


// actions from slices
// users slice
import {
  selectUsersDirection,
  selectUser,
  getAllUsers,
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
  const user = useSelector(selectUser)

  // hooks
  const dispatch = useDispatch()

  // effects 
  // get all users
  useEffect(()=>{
    if(user){
      dispatch(getAllUsers())
    }
  },[user])
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