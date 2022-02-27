import React, { memo, useEffect, useRef, useState } from 'react'
import {HomeIcon} from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import Link from 'next/link';
import { PlusIcon } from '@heroicons/react/solid';

function SideBar() {
    const [positionActive, setActive] = useState(null)
    const router = useRouter();
    const refLinks = useRef([
        "/admin", "/admin/createpost"
    ])

    useEffect(() => {
        const index = refLinks.current.findIndex((link) => link === router.pathname);
        setActive(index);
    }, [router.pathname])

  return (
    <div className="fixed z-50 top-0 w-1/5 min-h-full border-r border-gray-300 shadow-md py-2">
        <Link href="/admin" >
            <div className='p-4 border-b-4 border-gray-50 shadow-sm mb-2'>
                <img className='h-11' src='/typer-logo.png' alt="logo" />
            </div>
        </Link>
        <div className='pl-[0.5px] relative'>
            <div style={{top: `${positionActive * 56}px`}} className="absolute h-14 w-1 bg-red-500 transition duration-200 ease-linear"></div>
            <Link href="/admin">
                <div className={`flex items-end h-14 py-4 px-4 cursor-pointer  ${router.pathname === "/admin" ? "text-red-400 ml-3" : "text-gray-700"}`}>
                    <HomeIcon className='h-6 pr-4' />
                    <span className='font-semibold'>Dashboard</span>
                </div>
            </Link>
            <Link href="/admin/createpost">
                <div className={`flex items-end h-14 py-4 px-4 cursor-pointer  ${router.pathname === "/admin/createpost" ? "text-red-400 ml-3" : "text-gray-700"}`}>
                    <PlusIcon className='h-6 pr-4' />
                    <span className='font-semibold'>Create Post</span>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default memo(SideBar)