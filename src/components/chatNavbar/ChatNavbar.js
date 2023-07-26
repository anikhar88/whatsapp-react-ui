import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const ChatNavbar = () => {
    return (
        <div className='w-full border-b'>

            <div className="w-full  p-2  ">

                <div className="flow-root">
                    <ul className="divide-y w-full divide-gray-200 dark:divide-gray-700">
                        <li className="py-3 sm:py-4 w-full flex justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <img className="w-12 h-12 rounded-full" src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg" alt="hi" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-md font-bold truncate text-black">
                                        Neil Sims
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    $320
                                </div>
                            </div>
                            <div className='flex items-center gap-3 text-gray-400'>
                                <p className='cursor-pointer'><CallIcon /></p>
                                <p className='cursor-pointer'><VideocamIcon /></p>
                                <p className='cursor-pointer'><MoreHorizIcon /></p>
                            </div>
                        </li>


                    </ul>
                </div>
            </div>

        </div>
    )
}

export default ChatNavbar