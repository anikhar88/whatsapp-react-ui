import React from 'react'

const MessageHistoryCard = ({ name }) => {
    return (
        <div>


            <div className="flow-root my-3">
                <ul className="shadow-md">
                    <li className="p-4 rounded-lg cursor-pointer hover: ">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <img className="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwzTSDO6sbQw9RJmGwMKYaubB1wDwyqOYAfuWM1fg&s" alt="hi" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-md font-bold truncate text-black">
                                    {name && name}
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    online
                                </p>
                            </div>

                        </div>
                        <p className='my-3 text-gray-500'>Lorem ipsum dolor sit, amet consectetur</p>
                    </li>

                </ul>
            </div>
        </div>

    )
}

export default MessageHistoryCard