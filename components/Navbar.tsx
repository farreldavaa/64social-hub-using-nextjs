
"use client"
import Link from 'next/link'
import React, {useState} from 'react'
import LogoChroma from '../public/assets/animated_logo_rainbow_matte.gif'
import Avatar from '../public/assets/avatar.png'
import Image from 'next/image'

const Navbar = () => {

    const [toggle, setToggle] = useState(false) 
    const handleClick = ()=>setToggle(!toggle)

    return (
        <div className='w-full h-32 z-10 fixed bg-gradient-to-b from-[#f9f9f9] via-[#f9f9f9]/85 to-transparent'>
            <div className='flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>
                <div className='flex items-center ml-24'>
                    <Image src={LogoChroma} alt="" className='sm:ml-5 ss:ml-5 md:ml-3 opacity-[100%] w-12 h-12' />
                </div>
                <div className='font-montserrat text-lg font-semibold flex items-center mr-24'>
                    <ul className='hidden md:flex gap-8'>
                        <li>collections</li>
                        <li>blog</li>
                        <li>merch</li>
                        <Link href="/auth">
                        <li className="flex item-center gap-2">
                            <span>
                                login
                            </span>
                            <Image src={Avatar} alt="avatar" className='w-5 h-5 my-1' />
                        </li> 
                        </Link>
                    </ul>
                    
                </div>
                <div className='md:hidden' onClick={handleClick}>
                    {/* <img src="" alt="" className='w-[28px] h-[28px] object-contain mr-10' /> */}
                </div>
            </div>
                <ul className={toggle?'absolute bg-white w-full px-8 md:hidden' : 'hidden'}>
                    <li>COLLECTIONS</li>
                    <li>ARTICLES</li>
                    <li>MERCH</li>
                </ul>
        </div>
    )
}

export default Navbar