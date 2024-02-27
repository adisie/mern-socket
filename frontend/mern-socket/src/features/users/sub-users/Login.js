import {
    useState,
    useEffect,
} from 'react'
import {
    useSelector,
    useDispatch,
} from 'react-redux'
import {
    useNavigate,
} from 'react-router-dom'

// actions from slices
// users slice
import {
    setUsersDirection,
    resetErrorsAndIsUserPending,
    selectIsUserPending,
    selectUser,
    selectErrors,
    login,
} from '../usersSlice'

// sub-users
// UsersSpinner
import UsersSpinner from './UsersSpinner'

// main
// Signup
const Login = () => {
    // local states
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    // states from slices
    // users slice
    const isUserPending = useSelector(selectIsUserPending)
    const user = useSelector(selectUser)
    const errors = useSelector(selectErrors)
    // hooks
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // effects
    // navigator
    useEffect(()=>{
        if(user){
            navigate('/')
        }
    },[user])

    if(isUserPending){
        return <UsersSpinner />
    }

    // submit handler
    const submitHandler = () => {
        dispatch(login({username,password}))
    }

  return (
    <div className="flex-grow flex justify-center mt-7">
        {/* login form */}
        <div className="border border-emerald-700 border-b-[24px] h-max p-5 flex flex-col items-center">
            <div className="text-xl mb-3 font-bold">
                <span>Login</span>
            </div>
            {/* username input */}
            <div className="mb-3">
                <div className="border border-emerald-700 flex items-center justify-center px-1 py-[.175rem] rounded-sm">
                    <input type="text" name="username" placeholder="username" 
                        className="focus:outline-none bg-transparent border-none w-[180px]" 
                        value={username} 
                        onChange={e=>setUsername(e.target.value)} 
                    />
                </div>
                {/* username error container */}
                <div className="text-[.675rem] italic text-red-700">{errors?.username}</div>
            </div>
            {/* password input */}
            <div className="mb-3">
                <div className="border border-emerald-700 flex items-center justify-center px-1 py-[.175rem] rounded-sm">
                    <input type="password" name="password" placeholder="password" 
                        className="focus:outline-none bg-transparent border-none w-[180px]" 
                        value={password} 
                        onChange={e=>setPassword(e.target.value)} 
                    />
                </div>
                {/* password error container */}
                <div className="text-[.675rem] italic text-red-700">{errors?.password}</div>
            </div>
            {/* button */}
            <div className="primary-bg users-btns" 
                onClick={()=>{
                    submitHandler()
                }}
            >
                <span>Login</span>
            </div>
            {/* navigator */}
            <div className="w-full flex mt-3">
                <span className="text-xs opacity-[.75] hover:opacity-[1] hover:underline cursor-pointer" 
                    onClick={()=>{
                        dispatch(resetErrorsAndIsUserPending())
                        dispatch(setUsersDirection('SIGNUP'))
                    }}
                >no account?</span>
            </div>
        </div>
    </div>
  )
}

export default Login