import React from 'react'
import {
    bookmark,
    comment,
    like,
    repost,
    view,
    share
} from "../assets/index"



function Post({
    avatar,
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
                <div className="avatar m-3 rounded-full"><img className="w-8 md:w-12 rounded-full" src={avatar} alt="" /></div>

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
                    <div className='flex hover:bg-blue-900 hover:rounded-full gap-[2px]'><img className='invert w-3 md:w-5' src={comment} alt="comment icon" />
                        <span className='text-sm md:text-base'>{icon.comment}</span>
                    </div>
                    <div className='flex hover:bg-green-900 hover:rounded-full gap-[2px]'><img className='invert w-3 md:w-5' src={repost} alt="repost icon" />
                        <span className='text-sm md:text-base'>{icon.repost}</span></div>
                    <div className='flex hover:bg-pink-800 hover:rounded-full gap-[2px]'><img className='invert w-3 md:w-5' src={like} alt="like icon" />
                        <span className='text-sm md:text-base'>{icon.like}</span></div>
                    <div className='flex hover:bg-blue-900 hover:rounded-full gap-[2px]'><img className='invert w-3 md:w-5' src={view} alt="view icon" />
                        <span className='text-sm md:text-base'>{icon.view}</span></div>
                    <div className='flex gap-[2px]'>
                        <div className='hover:bg-blue-900 hover:rounded-full self-center'>
                            <img className='invert w-3 md:w-5 ' src={bookmark} alt="bookmark icon" />
                        </div>
                        <div className='hover:bg-blue-900 hover:rounded-full self-center'>
                            <img className='invert w-3 md:w-5 ' src={share} alt="share icon" /></div>

                    </div>

                </div>
            </div>


        </div>
    )
}


export default Post
