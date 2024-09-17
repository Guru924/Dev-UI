import React from 'react'
import logo3 from "../assets/logo3.png"
import Followers from "./Followers"

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
                        <div className="text-[#666a6f]">40.2k Posts</div>
                    </div>

                    <div className="item my-3 px-4 p-1 hover:bg-gray-800 cursor-pointer">
                        <div className="text-sm text-[#666a6f]">Entertainment · Trending</div>
                        <div className="font-bold">#GOAT</div>
                        <div className="text-[#666a6f]">40.2k Posts</div>
                    </div>

                    <div className="item my-3 px-4 p-1 hover:bg-gray-800 cursor-pointer">
                        <div className="text-sm text-[#666a6f]">Entertainment · Trending</div>
                        <div className="font-bold">#GOAT</div>
                        <div className="text-[#666a6f]">40.2k Posts</div>
                    </div>

                </div>

                {/* todo- show more */}
                <div className="who m-3 border border-[#666a6f] w-10/12 py-3 rounded-xl max-h-80 ">
                    <h1 className="text-xl font-bold px-4" >Who to follow</h1>

                    {/* <div className="item my-3 px-4 p-1 hover:bg-gray-800 cursor-pointer">
              <div className="font-bold">Airdrop Ultimate</div>
              <div className="text-sm text-[#666a6f]">@AirdropUltimate</div>

            </div> */}
                    <Followers fullName="Airdrop Ultimate" avatar={logo3} userName='@AirdropUltimate' />
                    <Followers fullName="Guru Prasad Das" avatar={logo3} userName='@guru6073' />
                    <Followers fullName="Guru Prasad Das" avatar={logo3} userName='@guru6073' />

                </div>

            </div>
        </div>
    )
}

export default RightBar
