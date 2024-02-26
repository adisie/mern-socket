import {
    Outlet,
    Navigate,
} from 'react-router-dom'
import {
  useSelector,
} from 'react-redux'

// actions from slices
// users slice
import {
  selectUser,
} from '../features/users/usersSlice'

// main
// PrivateRoutes
const PrivateRoutes = () => {
  // states from slices
  // users slice
    const user = useSelector(selectUser)
    
  return (
    <>
    {
        user 
        ?
        <Outlet />
        :
        <Navigate to={'/users'}/>
    }
    </>
  )
}

export default PrivateRoutes