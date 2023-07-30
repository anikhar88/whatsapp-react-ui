import React, { useEffect } from 'react'
import SideBar from '../../components/sidebar/SideBar'
import ChatHistory from '../../components/chathistory/ChatHistory'
import Chat from '../../components/chat/Chat'
import { useRecoilValue } from 'recoil'
import { userAtom } from '../../recoil/atom/userAtom'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const loggenInUser = useRecoilValue(userAtom);
    const navigate = useNavigate();
    console.log('hi', loggenInUser);
    useEffect(() => {
        // Check if the loggedInUser is null or an empty array
        if (Object.keys(loggenInUser).length === 0) {
            navigate('/auth/login');
        }
    }, [loggenInUser, navigate]);
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