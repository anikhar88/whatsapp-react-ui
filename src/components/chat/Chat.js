import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client'
import ChatNavbar from '../chatNavbar/ChatNavbar'
import SendIcon from '@mui/icons-material/Send';
const socket = io('http://localhost:8000');
localStorage.setItem('UID', "thisisid74r0375230495")
localStorage.setItem('userName', "matti ullah")
const Chat = () => {
    const [messages, setMessage] = useState('');
    const [serMess, setSerMess] = useState([]);
    const [typingStatus, setTypingStatus] = useState('');

    const lastMessageRef = useRef(null);
    useEffect(() => {
        socket.on('connect', () => console.log(socket.id))
        socket.on('connect_error', () => {
            console.log("error a gaya hai")
        });
        socket.on("messageRes", (data) => {

            setSerMess((prev) => [...prev, data]);
            console.log(data);
        })
        socket.on('typingResponse', (data) => setTypingStatus(data));
        console.log(typingStatus);
    }, [])
    useEffect(() => {
        // 👇️ scroll to bottom every time messages change
        lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);
    const handlesendMessage = (e) => {
        e.preventDefault();
        socket.emit("message", {
            text: messages,
            // userName: localStorage.getItem('userName'),
            userId: localStorage.getItem('UID'),
            socketId: socket.id
        })
    }
    const handleTyping = () => {
        console.log('main call ho raha hoon');
        socket.emit('typing', `${localStorage.getItem('userName')} is typing`)
    };
    return (
        <div className='flex flex-col '>
            <div className='w-full' >

                <ChatNavbar />
            </div >
            <div className="message__container">
                {
                    serMess?.map(message => {
                        return (<div className="message__chats" key={message.userId}>
                            <p className="sender__name">hi</p>
                            <div className="message__sender">
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

                <form className='' >

                    <div className="relative">

                        <input id="default-search" className="block w-full p-2 pl-10 text-sm text-black border mt-3 rounded-full bg-gray-50 outline-none  " placeholder="Send Message..." onChange={(e) => setMessage(e.target.value)} />
                        <button type="submit" onClick={(e) => handlesendMessage(e)} className="text-[#44d7b6] absolute right-2.5 bottom-1  font-medium rounded-full text-sm px-2 py-1"><SendIcon /></button>
                    </div>
                </form >

            </div >
        </div >
    )
}

export default Chat