import React from 'react'
import ChatHistorySearchBar from '../chatHisSearchbar/ChatHistorySearchBar'
import MessageHistoryCard from '../messageHistoryCard/MessageHistoryCard'

const ChatHistory = () => {
  return (
    <div className='p-5 border-l h-screen'>
      <div >
        {/* search */}
        <ChatHistorySearchBar />
      </div>
      <div className='mt-10 border-t overflow-y-auto h-[650px]'>
        {/* message history card */}
        <MessageHistoryCard />
        <MessageHistoryCard />
        <MessageHistoryCard />
        <MessageHistoryCard />
        <MessageHistoryCard />
        <MessageHistoryCard />
      </div>
    </div>
  )
}

export default ChatHistory