import logo3 from "./assets/logo3.png"
import bgchanger from "../public/bgchanger.png"
import passwordChanger from "../public/passwordChanger.png"
import viteReact from "../public/viteReact.png"
import {
  emoji,
  gif,
  media,
  poll,
  schedule,
  location,
  globe,
  comment,
} from "./assets/index"
import Post from "./components/Post"
import Followers from "./components/Followers"
import SideBar from "./components/SideBar"

function App() {

  const reactions = {
    "comment" : "7.6k",
    "like" : "26.3k",
    "repost" : "4.3k",
    "view": "5.6M"
  }

  return (
    <>
      <div className="flex w-full mx-auto text-white">

        <div className="first w-16 md:w-[40vw] max-h-[90vh] md:pr-16 sticky top-0">
          <SideBar/>
        </div>


        <div className="second border-[1px] border-x-[#666a6f] border-y-black md:w-[60vw]">

          <div className="top flex  border-b-[1px] border-[#666a6f]">
            <div className="left w-1/2 flex justify-center hover:bg-[#202327] p-3 text-base">For you</div>
            <div className="right w-1/2 flex justify-center text-base p-3 hover:bg-[#202327]">Following</div>
          </div>

          <div className="whathapp flex gap-1 border-b-[1px] border-[#666a6f]">
            <div>
              <img
                className="w-11 m-5"
                src={logo3} alt="profile img" />
            </div>
            <div className="w-full">
              <input className="w-full outline-none bg-inherit text-white text-xl py-6 placeholder:text-[#666a6f]"
                placeholder="What is happening?!"
                type="text" />

              <div className="glob flex gap-2 text-sm items-center cursor-pointer hover:bg-blue-950 hover:w-1/2 hover:rounded-full ">
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
            avatar = {logo3}
            content = "vite project"
            contentImg = {viteReact}
            icon = {reactions}
            />
            <Post 
            avatar = {logo3}
            content = "bg-changer vite project"
            contentImg = {bgchanger}
            icon = {reactions}
            />
            <Post 
            avatar = {logo3}
            content = "password-changer vite project"
            contentImg = {passwordChanger}
            icon = {reactions}
            />
          </div>

        </div>

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

      </div>

    </>
  )
}

export default App
