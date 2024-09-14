import React from 'react'
import logo3 from "../assets/logo3.png"
import {
    explore,
    notification,
    messages,
    grok,
    communities,
    premium,
    verified,
    profile,
    more,
    home,
} from "../assets/index"
import Com from '../assets/sidebarIcons/Com'

function SideBarIcon() {

    const sideBarIcons = [
        {
            name: 'Home',
            slug: '/',
            svg: home,
            // active: true
        },
        {
            name: 'Explore',
            slug: '/login',
            svg: explore,
            // active: !authStatus
        },
        {
            name: 'Notifications',
            slug: '/signup',
            svg: notification,
            // active: !authStatus
        },
        {
            name: 'Messages',
            slug: '/all-posts',
            svg: messages,
            // active: authStatus
        },
        {
            name: 'Grok',
            slug: '/all-posts',
            svg: grok,
            // active: authStatus
        },
        {
            name: 'Communities',
            slug: '/all-posts',
            svg: communities,
            // active: authStatus
        },
        {
            name: 'Premium',
            slug: '/all-posts',
            svg: premium,
            // active: authStatus
        },
        {
            name: 'Verified Orgs',
            slug: '/all-posts',
            svg: verified,
            // active: authStatus
        },
        {
            name: 'Profile',
            slug: '/all-posts',
            svg: profile,
            // active: authStatus
        },
        {
            name: 'More',
            slug: '/all-posts',
            svg: more,
            // active: authStatus
        },
    ]

    return (

        <div className="sideBar flex justify-end max-h-[90vh] ">
            <Com/>
            

            <ul className="flex flex-col items-end md:items-start text-xl space-y-4 pl-0 pr-2 font-bold min-h-[90vh] justify-between md:justify-normal">


                <li className="flex gap-3 justify-start item-center md:w-fit md:px-2 hover:rounded-full  hover:bg-gray-900 hover:cursor-pointer p-1">
                    <div className="logo invert mt-2">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="m-auto w-8 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                    </div>
                </li>

                {sideBarIcons.map((icon) => (
                    <li key={icon.name} className="flex gap-3 justify-start item-center w-fit px-2 hover:rounded-full  hover:bg-gray-900 hover:cursor-pointer p-1">
                        
                        <img className='w-7 invert' src={icon.svg} alt=""/>
                        <span className="hidden md:block"> {icon.name} </span>
                    </li>
                ))}
                

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
    )
}

export default SideBarIcon
