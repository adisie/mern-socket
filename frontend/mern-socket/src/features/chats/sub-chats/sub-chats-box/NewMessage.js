import {useState} from 'react'

// icons
// send
import { GrSend } from "react-icons/gr"

// main
// NewMessage
const NewMessage = () => {
    // local states
    const [message,setMessage] = useState('') 

    // functions
    // textarea height
    const adjustTextAreaHeight = e => {
        const textarea = document.getElementById('chat-message-text-area') 
        textarea.style.height = '18px' 
        let scrollHeight = e.target.scrollHeight 
        textarea.style.height = `${scrollHeight}px`
    }
    // submit handler
    const submitHandler = () => {
        const textarea = document.getElementById('chat-message-text-area')  
        if(message.trim()){
            console.log(message)
        }
        setMessage('')
        textarea.style.height = '18px'
    }
  return (
    <div className="flex items-center justify-center">
        <div className="absolute bottom-1 flex items-center primary-bg px-1 py-[.13rem] rounded-sm"> 
            <textarea name="message" id="chat-message-text-area" 
                className="focus:outline-none bg-transparent w-[230px] h-[18px] resize-none max-h-[350px] mt-[.13rem] text-justify" 
                onKeyUp={adjustTextAreaHeight}  
                value={message} 
                onChange={e=>setMessage(e.target.value)} 
            ></textarea>
            <button className="self-end text-xl opacity-[.75]" onClick={submitHandler}>
                <GrSend />
            </button>
        </div>
    </div>
  )
}

export default NewMessage