import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import SendIcon from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const SideBar = () => {
    return (
        <div className='flex p-5 flex-col justify-between h-screen items-center bg-[#262626]'>
            <div>
                <div className="relative">
                    <img className="w-10 h-10 rounded-full" src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg" alt="" />
                    <span className="top-0 left-0 absolute object-contain w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                </div>
            </div>
            {/* <div>
                <nav className='flex'>
                    <ul className='flex gap-5 text-gray-300 flex-col justify-between items-center'>
                        <li className='cursor-pointer rounded-full hover:text-gray-200 transition-all'><HomeIcon /></li>
                        <li className='cursor-pointer rounded-full hover:text-gray-200 transition-all'><SendIcon /></li>
                        <li className='cursor-pointer rounded-full hover:text-gray-200 transition-all'><MoreHorizIcon /></li>
                    </ul>
                </nav>
            </div> */}
            <div className='text-gray-300 cursor-pointer'>
                <SettingsIcon />
            </div>
        </div>
    )
}

export default SideBar