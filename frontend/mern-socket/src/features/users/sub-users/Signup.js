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
    selectUser,
    selectErrors,
    selectIsUserPending,
    signup,
} from '../usersSlice'

// sub-users
// UsersSpinner
import UsersSpinner from './UsersSpinner'

// main
// Signup
const Signup = () => {
    // local states
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    // states from slices
    // users slice
    const user = useSelector(selectUser) 
    const errors = useSelector(selectErrors) 
    const isUserPending = useSelector(selectIsUserPending) 

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

    // submit handler
    const submitHandler = () => {
        dispatch(signup({username,email,password}))
    }

    if(isUserPending){
        return <UsersSpinner />
    }

  return (
    <div className="flex-grow flex justify-center mt-7">
        {/* signup form */}
        <div className="border border-emerald-700 border-b-[16px] h-max p-5 flex flex-col items-center">
            <div className="text-xl mb-3 font-bold">
                <span>Signup</span>
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
            {/* email input */}
            <div className="mb-3">
                <div className="border border-emerald-700 flex items-center justify-center px-1 py-[.175rem] rounded-sm">
                    <input type="text" name="email" placeholder="email" 
                        className="focus:outline-none bg-transparent border-none w-[180px]" 
                        value={email} 
                        onChange={e=>setEmail(e.target.value)} 
                    />
                </div>
                {/* email error container */}
                <div className="text-[.675rem] italic text-red-700">{errors?.email}</div>
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
                <span>Signup</span>
            </div>
            {/* navigator */}
            <div className="w-full flex mt-3">
                <span className="text-xs opacity-[.75] hover:opacity-[1] hover:underline cursor-pointer" 
                    onClick={()=>{
                        dispatch(resetErrorsAndIsUserPending())
                        dispatch(setUsersDirection('LOGIN'))
                    }}
                >have an account?</span>
            </div>
        </div>
    </div>
  )
}

export default Signup