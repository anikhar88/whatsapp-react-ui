import React from 'react'
import ChatNavbar from '../chatNavbar/ChatNavbar'
import SendIcon from '@mui/icons-material/Send';
const Chat = () => {
    return (
        <div className='flex flex-col '>
            <div className='w-full' >

                <ChatNavbar />
            </div >
            <div className='flex flex-col border-b h-[600px] justify-between'>

                {/* <div className='shadow-lg w-fit p-3 rounded-full'>
                    <p className=''>hi kiya hal hai</p>
                </div>
                <div className='absolute clear-both right-0 shadow-lg w-fit p-3 rounded-full'>
                    <p className=''>hi kiya hal hai</p>
                </div>
                messge right */}

            </div>
            < div className='relative' >
                {/* input box for chat */}

                <form form className='' >

                    <div class="relative">

                        <input type="search" id="default-search" class="block w-full p-2 pl-10 text-sm text-black border mt-3 rounded-full bg-gray-50 outline-none  " placeholder="Send Message..." />
                        <button type="submit" class="text-[#44d7b6] absolute right-2.5 bottom-1  font-medium rounded-full text-sm px-2 py-1"><SendIcon /></button>
                    </div>
                </form >

            </div >
        </div >
    )
}

export default Chat