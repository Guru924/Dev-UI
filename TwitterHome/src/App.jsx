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

          <div className="sideBar flex justify-end max-h-[90vh] ">

            <ul className="flex flex-col items-end md:items-start text-xl space-y-4 pl-0 pr-2 font-bold min-h-[90vh] justify-between md:justify-normal">


              <li className="flex gap-3 justify-start item-center md:w-fit md:px-2 hover:rounded-full  hover:bg-gray-900 hover:cursor-pointer p-1">
                <div className="logo invert mt-2">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="m-auto w-8 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                </div>
              </li>
              <li className="flex gap-3 justify-start item-center w-fit px-2 hover:rounded-full  hover:bg-gray-900 hover:cursor-pointer p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="invert w-7" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
                <span className="hidden md:block"> Home </span>
              </li>
              <li className="flex gap-3 justify-start item-center w-fit px-2 hover:rounded-full  hover:bg-gray-900 hover:cursor-pointer p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="invert w-7" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                <span className="hidden md:block "> Explore </span>
              </li>
              <li className="flex gap-3 justify-start item-center w-fit px-2 hover:rounded-full  hover:bg-gray-900 hover:cursor-pointer p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="invert w-7" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416l400 0c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4l0-25.4c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112l0 25.4c0 47.9 13.9 94.6 39.7 134.6L72.3 368C98.1 328 112 281.3 112 233.4l0-25.4c0-61.9 50.1-112 112-112zm64 352l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" /></svg>
                <span className="hidden md:block "> Notifications</span>
              </li>
              <li className="flex gap-3 justify-start item-center w-fit px-2 hover:rounded-full  hover:bg-gray-900 hover:cursor-pointer p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="invert w-7" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" /></svg>
                <span className="hidden md:block "> Messages</span>
              </li>
              <li className="flex gap-3 justify-start item-center w-fit px-2 hover:rounded-full  hover:bg-gray-900 hover:cursor-pointer p-1">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="invert w-7 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><g clipPath="url(#0-clip0_2592_269)" clipRule="evenodd"><path d="M18 4.1H6c-1.05 0-1.9.85-1.9 1.9v12c0 1.05.85 1.9 1.9 1.9h12c1.05 0 1.9-.85 1.9-1.9V6c0-1.05-.85-1.9-1.9-1.9zM6 2h12c2.21 0 4 1.79 4 4v12c0 2.21-1.79 4-4 4H6c-2.21 0-4-1.79-4-4V6c0-2.21 1.79-4 4-4z"></path><path d="M6.68 17.8l8.108-11.58h2.532L9.21 17.8H6.68z"></path></g><defs><clipPath id="0-clip0_2592_269"><rect height="20" rx="1" width="20" x="2" y="2"></rect></clipPath></defs></g></svg>
                <span className="hidden md:block "> Grok</span>
              </li>
              <li className="flex gap-3 justify-start item-center w-fit px-2 hover:rounded-full  hover:bg-gray-900 hover:cursor-pointer p-1">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="invert w-7 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9c-.799 0-1.527-.279-2.116-.73-.836-.64-1.384-1.638-1.384-2.77 0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z"></path></g></svg>
                <span className="hidden md:block "> Communities</span>
              </li>
              <li className="flex gap-3 justify-start item-center w-fit px-2 hover:rounded-full  hover:bg-gray-900 hover:cursor-pointer p-1">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="invert w-7 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                <span className="hidden md:block "> Premium</span>
              </li>
              <li className="flex gap-3 justify-start item-center w-fit px-2 hover:rounded-full  hover:bg-gray-900 hover:cursor-pointer p-1">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="invert w-7 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M7.323 2h11.443l-3 5h6.648L6.586 22.83 7.847 14H2.523l4.8-12zm1.354 2l-3.2 8h4.676l-.739 5.17L17.586 9h-5.352l3-5H8.677z"></path></g></svg>
                <span className="hidden md:block "> Verified Orgs</span>
              </li>
              <li className="flex gap-3 justify-start item-center w-fit px-2 hover:rounded-full  hover:bg-gray-900 hover:cursor-pointer p-1">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="invert w-7 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path></g></svg>
                <span className="hidden md:block "> Profile</span>
              </li>
              <li className="flex gap-3 justify-start item-center w-fit px-2 hover:rounded-full  hover:bg-gray-900 hover:cursor-pointer p-1">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="invert w-7 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path></g></svg>
                <span className="hidden md:block "> More</span>
              </li>
              <li className="w-fit hidden md:block">
                <div >
                  <button className="bg-blue-500 px-16 py-2.5 rounded-full">Post</button>
                </div>
              </li>

              <li className="hidden md:block">
                <div className="profile rounded-full mt-6 flex gap-2">
                  <div>
                    <img
                      className="w-10"
                      src={logo3} alt=" not showing" />
                  </div>
                  <div className="userN flex flex-col">
                    <span className="text-sm ">GURU</span>
                    <span className="text-sm font-normal text-[#666a6f]">@GURU6073</span>
                  </div>

                </div>
              </li>
            </ul>

          </div>
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
