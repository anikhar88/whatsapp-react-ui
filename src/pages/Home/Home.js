import React from 'react'
import SideBar from '../../components/sidebar/SideBar'
import ChatHistory from '../../components/chathistory/ChatHistory'
import Chat from '../../components/chat/Chat'

const Home = () => {
    return (
        <div className='grid grid-cols-12 h-screen'>
            {/* sidebar */}
            <div className='col-span-1'>

                <SideBar />
            </div>
            {/* chat history */}
            <div className='col-span-4 border'>

                <ChatHistory />
            </div>
            {/* chat */}
            <div className='col-span-7 '>

                <Chat />
            </div>
        </div>
    )
}

export default Home