import React from 'react'

function Profile({avatar, fullName, username}) {
    return (
        <div className="rounded-full mt-6 flex gap-2">
            <div>
                <img
                    className="w-10"
                    src={avatar} alt=" not showing" />
            </div>
            <div className="userN flex flex-col">
                <span className="text-sm ">{fullName}</span>
                <span className="text-sm font-normal text-[#666a6f]">{username}</span>
            </div>

        </div>
    )
}

export default Profile
