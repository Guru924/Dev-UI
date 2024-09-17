import React from 'react'
import bgchanger from "../../public/bgchanger.png"
import passwordChanger from "../../public/passwordChanger.png"
import viteReact from "../../public/viteReact.png"
import {
    emoji,
    gif,
    media,
    poll,
    schedule,
    location,
    globe,
    comment,
} from "../assets/index"
import Post from "./Post"
import logo3 from "../assets/logo3.png"

function Middle() {
    const reactions = {
        "comment": "7.6k",
        "like": "26.3k",
        "repost": "4.3k",
        "view": "5.6M"
    }
    return (
        <div className="second border-[1px] border-x-[#666a6f] border-y-black md:w-[60vw]">

            <div className="top flex  border-b-[1px] border-[#666a6f]">
                <div className="left w-1/2 flex justify-center hover:bg-[#202327] p-3 text-base">For you</div>
                <div className="right w-1/2 flex justify-center text-base p-3 hover:bg-[#202327]">Following</div>
            </div>

            <div className="whathapp flex gap-1 border-b-[1px] border-[#666a6f]">
                <div>
                    <img
                        className="w-9 md:w-11 my-5 mx-1 md:m-5"
                        src={logo3} alt="profile img" />
                </div>
                <div className="w-full">
                    <input className="w-full outline-none bg-inherit text-white text-xl py-6 placeholder:text-[#666a6f]"
                        placeholder="What is happening?!"
                        type="text" />

                    <div className="glob flex gap-2 text-sm items-center cursor-pointer md:hover:bg-blue-950 md:hover:w-1/2 md:hover:rounded-full ">
                        <img className="w-4" src={globe} alt="media icon" />
                        <span className="text-blue-500">Every one can reply</span>
                    </div>

                    <div className="h-[1px] bg-[#666a6f] my-3 mr-5"></div>

                    <div className="top-third flex justify-between items-center mb-3">
                        <div className="whthap-icons">
                            <ul className="flex gap-3 justify-center items-center">
                                <li className="w-5"><a href="#"><img src={media} alt="media icon" /></a></li>
                                <li className="w-5"><a href="#"><img src={gif} alt="gif icon" /></a></li>
                                <li className="w-6"><a href="#"><img src={poll} alt="poll icon" /></a></li>
                                <li className="w-6"><a href="#"><img src={emoji} alt="emoji icon" /></a></li>
                                <li className="w-5"><a href="#"><img src={schedule} alt="schedule icon" /></a></li>
                                <li className="w-5"><a href="#"><img src={location} alt="location icon" /></a></li>
                            </ul>
                        </div>
                        <div >
                            <button className="bg-blue-500 px-5 py-1 rounded-full mr-3">Post</button>
                        </div>
                    </div>

                </div>


            </div>

            <div>
                <Post
                    avatar={logo3}
                    content="vite project"
                    contentImg={viteReact}
                    icon={reactions}
                />
                <Post
                    avatar={logo3}
                    content="bg-changer vite project"
                    contentImg={bgchanger}
                    icon={reactions}
                />
                <Post
                    avatar={logo3}
                    content="password-changer vite project"
                    contentImg={passwordChanger}
                    icon={reactions}
                />
            </div>

        </div>
    )
}

export default Middle
