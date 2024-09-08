import React from 'react'
import logo3 from "../assets/logo3.png"

function Followers({ avatar, fullName, userName }) {
    return (
        <div className='flex items-center justify-between px-3 my-4 cursor-pointer hover:bg-gray-800'>
            <div className='flex items-center'>
                <div className="avatar"><img
                    className='h-10 w-10'
                    src={avatar?.avatar || logo3} alt="Avatar" /></div>
                <div className="item px-4 p-1 cursor-pointer">
                    <div className="font-bold">{fullName || "FULLNAME"}</div>
                    <div className="text-sm text-[#666a6f]">{userName || "@username"}</div>
                </div>
            </div>
            <div><button
                className='bg-white text-black rounded-full py-1 px-4 font-semibold ml-8'
            >Follow</button></div>
        </div>
    )
}

export default Followers
