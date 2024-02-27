import {useRef,useEffect} from 'react'

// sub-chats-box
import OwnSingleMessage from './OwnSingleMessage'
import InCommingMessage from './InCommingMessage'

// main
// MessagesList
const MessagesList = () => {
    // refs
    const scroll = useRef()
    useEffect(()=>{
        scroll.current?.scrollIntoView({behavior: 'smooth'})
    },[])
  return (
    <div className="flex-grow h-[84vh] overflow-y-auto pr-1 pt-3 bg-gray-100" id="message-list-container">
        {
            true 
            ?
            <OwnSingleMessage />
            :
            <InCommingMessage />
        }
        {/* ref container */}
        <div ref={scroll}/>
    </div>
  )
}

export default MessagesList