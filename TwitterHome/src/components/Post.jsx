import React from 'react'
import logo3 from '../assets/logo3.png'

function Post() {
    return (
        <div className='posts'>
            <div className="flex">
                <div className="avatar bg-white m-3 rounded-full"><img className="w-12" src={logo3} alt="" /></div>

                <div className="">
                    <div className="about flex gap-2 my-3 cursor-pointer">
                        <span className="fullName font-bold hover:underline">Guru Prasad</span>
                        <span className="username text-gray-500">@guru6073</span>
                        <span className="date text-gray-500"> · Sep 5</span>
                    </div>
                </div>
                </div>

                    <div className="content ml-14 mr-3">
                        <div className="cap mb-2">Prontos para a Liga das Nações!</div>
                        <div className="bg-red-500 rounded-2xl"><img className="rounded-2xl" src={logo3} alt="" /></div>
                    </div>

                    <div className="icons">
                        {/* comment */}
                        {/* repost */}
                        {/* like */}
                        {/* view */}
                        {/* bookmark */}
                        {/* share */}
                    </div>
        </div>
    )
}

export default Post
