import React from 'react'
import logo3 from "../assets/logo3.png"
import Profile from './Profile'
import {
    Explore,
    Notification,
    Messages,
    Grok,
    Communities,
    Premium,
    Verified,
    ProfileIcon,
    More,
    Home,
} from "../assets/index"

function SideBar() {

    const sideBarIcons = [
        {
            name: 'Home',
            slug: '/',
            svg: <Home />,
            // active: true
        },
        {
            name: 'Explore',
            slug: '/explore',
            svg: <Explore />,
            // active: !authStatus
        },
        {
            name: 'Notifications',
            slug: '/notifications',
            svg: <Notification />,
            // active: !authStatus
        },
        {
            name: 'Messages',
            slug: '/messages',
            svg: <Messages />,
            // active: authStatus
        },
        {
            name: 'Grok',
            slug: '/grok',
            svg: <Grok />,
            // active: authStatus
        },
        {
            name: 'Communities',
            slug: '/communities',
            svg: <Communities />,
            // active: authStatus
        },
        {
            name: 'Premium',
            slug: '/premium',
            svg: <Premium />,
            // active: authStatus
        },
        {
            name: 'Verified Orgs',
            slug: '/verified-orgs',
            svg: <Verified />,
            // active: authStatus
        },
        {
            name: 'Profile',
            slug: '/profile',
            svg: <ProfileIcon />,
            // active: authStatus
        },
        {
            name: 'More',
            slug: '/more',
            svg: <More />,
            // active: authStatus
        },
    ]

    return (
        <div className="first w-16 md:w-[40vw] max-h-[90vh] md:pr-16 sticky top-0">

            <div className="sideBar flex justify-end max-h-[90vh] ">
                <ul className="flex flex-col items-end md:items-start text-xl space-y-4 pl-0 pr-2 font-bold min-h-[90vh] justify-between md:justify-normal">

                    <li className="flex gap-3 justify-start item-center md:w-fit md:px-2  hover:cursor-pointer p-1">
                        <div className="logo invert mt-2">
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="m-auto w-8 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                        </div>
                    </li>

                    {sideBarIcons.map((icon) => (
                        <li key={icon.name} className="flex gap-3 justify-start item-center w-fit px-2 hover:rounded-full  hover:bg-gray-900 hover:cursor-pointer p-1">

                            {icon.svg}
                            <span className="hidden md:block"> {icon.name} </span>
                        </li>
                    ))}


                    <li className="w-fit hidden md:block">
                        <div >
                            <button className="bg-blue-500 px-16 py-2.5 rounded-full">Post</button>
                        </div>
                    </li>

                    <li className="hidden md:block">
                        <Profile
                            avatar={logo3}
                            fullName={"Guru Prasad Das"}
                            username={"@guru6073"}
                        />
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default SideBar
