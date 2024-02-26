import {Routes,Route} from 'react-router-dom'

// components
// Header component
import Header from "./components/Header"
// pages
// Home page
import Home from "./features/home/Home"
// Users page
import Users from "./features/users/Users"
// utils
// PrivateRoutes
import PrivateRoutes from './utils/PrivateRoutes'
// main
const App = () => {
  return (
    <div className="w-screen h-screen page-font flex flex-col">
      {/* Header */}
      <Header />
      {/* Routes */}
      <Routes>
        <Route element = {<PrivateRoutes />}>
          <Route index element = {<Home />} />
        </Route>
        <Route path='/users' element = {<Users />} />
      </Routes>
    </div>
  )
}

export default App