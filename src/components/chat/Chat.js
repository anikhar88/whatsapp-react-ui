import React, { useState, useEffect, useRef, useCallback } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

import ChatNavbar from '../chatNavbar/ChatNavbar'
import SendIcon from '@mui/icons-material/Send';
import { useRecoilValue } from 'recoil'
import { userAtom } from '../../recoil/atom/userAtom'
import { socket } from '../../socketConnection/socketConn';
const Chat = () => {
    const navigate = useNavigate();
    const [messages, setMessage] = useState('');
    const [serMess, setSerMess] = useState([]);
    const [typingStatus, setTypingStatus] = useState('');
    const loggenInUser = useRecoilValue(userAtom);

    const lastMessageRef = useRef(null);
    console.log(serMess);
    useEffect(() => {
        if (Object.keys(loggenInUser).length === 0) {

            socket.on('connect', () => toast.success('connection successfully', { id: "1" }))
            socket.on('connect_error', () => {
                toast.error("Internet disconnect", { id: "1" })
            });
            socket.on("messageRes", (data) => {
                setSerMess((prev) => [...prev, data]);
            })
            console.log(loggenInUser);
            socket.on('typingResponse', (data) => setTypingStatus(data));
        }
    }, [loggenInUser])
    useEffect(() => {
        // 👇️ scroll to bottom every time messages change
        lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);
    const handlesendMessage = (e) => {
        e.preventDefault();
        if (loggenInUser) {
            socket.emit("message", {
                text: messages,
                name: loggenInUser.name
            })
        }
        setMessage("")
    }

    const handleTyping = () => {
        console.log('main call ho raha hoon');
        socket.emit('typing', `${loggenInUser.name} is typing`)
    };
    return (
        <div className='flex flex-col '>
            <Toaster />
            <div className='w-full' >

                <ChatNavbar />
            </div >
            <div className="message__container">
                {
                    serMess?.map((message, id) => {
                        return (message.name === loggenInUser.name ? <div className="message__chats" key={id}>
                            <p className="sender__name">{message.name}</p>
                            <div className="message__sender">
                                <p>{message.text}</p>
                            </div>
                        </div> : <div className="message__chats" key={id}>
                            <p className="recipient__name">{message.name}</p>
                            <div className="message__recipient">
                                <p>{message.text}</p>
                            </div>
                        </div>)
                    })
                }




            </div>
            <div className="message__status">
                <p>{typingStatus}...</p>
            </div>
            < div className='relative' >
                {/* input box for chat */}

                <form onSubmit={(e) => handlesendMessage(e)} className='' >

                    <div className="relative">

                        <input value={messages} onKeyUp={(e) => handleTyping(e)} id="default-search" className="block w-full p-2 pl-10 text-sm text-black border mt-3 rounded-full bg-gray-50 outline-none  " placeholder="Send Message..." onChange={(e) => setMessage(e.target.value)} />
                        <button type="submit" className="text-[#44d7b6] absolute right-2.5 bottom-1  font-medium rounded-full text-sm px-2 py-1"><SendIcon /></button>
                    </div>
                </form >

            </div >
        </div >
    )
}

export default Chat