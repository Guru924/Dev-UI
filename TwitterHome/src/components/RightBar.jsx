import React from 'react'
import Followers from "./Followers"
import { whalealert, OIP as chainLink, AirdropUltimate } from "../assets/index"

function RightBar() {
    return (
        <div className="third  md:w-[40vw] md:mr-[5%] hidden md:block ">
            <div className="sticky top-2">
                <div className="search m-3 ">
                    <input type="text" className="w-10/12 rounded-full bg-[#666a6f] text-white px-4 py-2" placeholder="Search" />
                </div>

                <div className="whats m-3 border border-[#666a6f] w-10/12 py-3 rounded-xl ">
                    <h1 className="text-xl font-bold px-4" >What’s happening</h1>

                    <div className="item my-3 px-4 p-1 hover:bg-gray-800 cursor-pointer">
                        <div className="text-sm text-[#666a6f]">Entertainment · Trending</div>
                        <div className="font-bold">#GOAT</div>
                        <div className="text-[#666a6f]">40.2k posts</div>
                    </div>

                    <div className="item my-3 px-4 p-1 hover:bg-gray-800 cursor-pointer">
                        <div className="text-sm text-[#666a6f]">Business & finance · Trending</div>
                        <div className="font-bold">#HMSTR</div>
                        <div className="text-[#666a6f]">22.2k posts</div>
                    </div>

                    <div className="item my-3 px-4 p-1 hover:bg-gray-800 cursor-pointer">
                        <div className="text-sm text-[#666a6f]">Sports · Trending</div>
                        <div className="font-bold">#IPL2025</div>
                        <div className="text-[#666a6f]">3,896 posts</div>
                    </div>

                </div>

                {/* todo- show more */}
                <div className="who m-3 border border-[#666a6f] w-10/12 py-3 rounded-xl max-h-80 ">
                    <h1 className="text-xl font-bold px-4" >Who to follow</h1>

                    <Followers fullName="Airdrop Ultimate" avatar={AirdropUltimate} userName='@AirdropUltimate' />
                    <Followers fullName="Whale Alert" avatar={whalealert} userName='@whale_alert' />
                    <Followers fullName="Chainlink" avatar={chainLink} userName='@chainlink' />

                </div>

            </div>
        </div>
    )
}

export default RightBar
