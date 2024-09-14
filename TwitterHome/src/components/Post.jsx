import React from 'react'
import logo3 from '../assets/logo3.png'
import {
    bookmark,
    comment,
    like,
    repost,
    view,
    share
} from "../assets/index"



function Post({
    avatar = logo3,
    fullName = 'Guru',
    username = '@guru6073',
    date = ' . Sep 11',
    content,
    contentImg,
    icon
}) {

    return (
        <div className='posts hover:bg-[#090a0a] py-1 border-[#2f3336] border-b-[1px]'>
            <div className="flex">
                <div className="avatar bg-white m-3 rounded-full"><img className="w-12" src={avatar} alt="" /></div>

                <div className="">
                    <div className="about flex gap-2 my-3 cursor-pointer">
                        <span className="fullName font-bold hover:underline">{fullName}</span>
                        <span className="username text-gray-500">{username}</span>
                        <span className="date text-gray-500">{date}</span>
                    </div>
                </div>
            </div>

            <div className="content ml-14 mr-3">
                {content && <div className="cap mb-2">{content}</div>}
                {contentImg && <div className="bg-red-500 rounded-2xl"><img className="rounded-2xl" src={contentImg} alt="" /></div>}

                <div className="icons flex justify-between mt-3 text-[#666a6f] py-2">
                    <div className='flex hover:bg-blue-900 hover:rounded-full'><img className='invert w-5' src={comment} alt="comment icon" />
                        <span>{icon.comment}</span>
                    </div>
                    <div className='flex hover:bg-green-900 hover:rounded-full'><img className='invert w-5' src={repost} alt="repost icon" />
                        <span>{icon.repost}</span></div>
                    <div className='flex hover:bg-pink-800 hover:rounded-full'><img className='invert w-5' src={like} alt="like icon" />
                        <span>{icon.like}</span></div>
                    <div className='flex hover:bg-blue-900 hover:rounded-full'><img className='invert w-5' src={view} alt="view icon" />
                        <span>{icon.view}</span></div>
                    <div className='flex '>
                        <div className='hover:bg-blue-900 hover:rounded-full'>
                        <img className='invert w-5 ' src={bookmark} alt="bookmark icon" />
                        </div>
                        <div className='hover:bg-blue-900 hover:rounded-full'>
                        <img className='invert w-5 ' src={share} alt="share icon" /></div>
                        </div>

                </div>
            </div>


        </div>
    )
}


export default Post
