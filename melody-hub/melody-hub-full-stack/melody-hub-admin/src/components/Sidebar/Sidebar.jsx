import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='bg-[#38bdf8] min-h-screen pl-[4vw]'>

            <img src={assets.logo} alt="" className="mt-5 w-[max(10vw,100px)] hidden sm:block" />
            <img src={assets.logo_small} alt="" className="mt-5 w-[max(5vw,40px)] mr-5 sm:hidden block" />

            <div className="flex flex-col gap-5 mt-10">

                <NavLink to='/add-song' className="flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#22d3ee] text-sm font-medium">
                    <img className='w-5' src={assets.add_song} alt="" />
                    <p className='hidden sm:block'>Add Song</p>
                </NavLink>

                <NavLink to='/list-songs' className="flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#22d3ee] text-sm font-medium">
                    <img className='w-5' src={assets.song_icon} alt="" />
                    <p className='hidden sm:block'>List Songs</p>
                </NavLink>

                <NavLink to='/add-album' className="flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#22d3ee] text-sm font-medium">
                    <img className='w-5' src={assets.add_album} alt="" />
                    <p className='hidden sm:block'>Add Album</p>
                </NavLink>

                <NavLink to='/list-albums' className="flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#22d3ee] text-sm font-medium">
                    <img className='w-5' src={assets.album_icon} alt="" />
                    <p className='hidden sm:block'>List Album</p>
                </NavLink>

            </div>
        </div>
    )
}

export default Sidebar