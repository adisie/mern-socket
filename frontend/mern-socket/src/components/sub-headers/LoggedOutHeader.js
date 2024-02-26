import {NavLink} from 'react-router-dom'
import {useDispatch} from 'react-redux'

// actions from slices
// users slice
import {
  setUsersDirection,
  resetErrorsAndIsUserPending,
} from '../../features/users/usersSlice'
// main
// LoggedOutHeader
const LoggedOutHeader = () => {
  // hooks
  const dispatch = useDispatch()
  return (
    <div>
      <NavLink to = {'/users'} 
        className="header-btns" 
        onClick={()=>{
          dispatch(resetErrorsAndIsUserPending())
          dispatch(setUsersDirection('LOGIN'))
        }}
      >Login</NavLink>
      <NavLink to = {'/users'} 
        className="header-btns" 
        onClick={()=>{
          dispatch(resetErrorsAndIsUserPending())
          dispatch(setUsersDirection('SIGNUP'))
        }}
      >Signup</NavLink>
    </div>
  )
}

export default LoggedOutHeader