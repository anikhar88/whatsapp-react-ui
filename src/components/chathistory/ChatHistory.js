import React from 'react'
import ChatHistorySearchBar from '../chatHisSearchbar/ChatHistorySearchBar'
import MessageHistoryCard from '../messageHistoryCard/MessageHistoryCard'
import { loggedInUsers } from '../../recoil/atom/loginUserHistory'
import { useRecoilValue } from 'recoil'


const ChatHistory = () => {
  const loggedInUser = useRecoilValue(loggedInUsers);
  console.log(loggedInUser);
  return (
    <div className='p-5 border-l h-screen'>
      <div >
        {/* search */}
        <ChatHistorySearchBar />
      </div>
      <div className='mt-10 border-t overflow-y-auto h-[650px]'>
        {/* message history card */}
        {
          loggedInUser?.map(data => {
            return <MessageHistoryCard name={data.name} key={data.id} />
          })
        }


      </div>
    </div>
  )
}

export default ChatHistory