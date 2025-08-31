import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaUser } from 'react-icons/fa'
import { FaCartShopping, FaHeart } from 'react-icons/fa6'
import { MdOutlineShoppingBag } from 'react-icons/md'
import Images from './Images'
import logo from '.././assets/logo.png'
const Navber = () => {
    return (
        <div className=' py-4 bg-white'>
            <div className="container">
                <div className="flex items-center justify-between relative z-[100]">
                    {/* logo part */}
                    <div className="logo">
                        <a href="#home" className='logo-link'>
                            <Images src={logo} className='w-[150px]'/>
                        </a>
                    </div>

                    {/* Navber */}
                    <nav className='flex items-center gap-5'>
                        <ul className='flex items-center gap-6'>
                            <li>
                                <a href="#home" className='text-lg font-medium font-sans text-black hover:text-[#371f6b] duration-300 active:border-b-2 border-b-amber-400  relative after:absolute after:contents-[""] after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#371f6b]  after:duration-300'>Home</a>
                            </li>
                            <li>
                                <a href="#products" className='text-lg font-medium font-sans text-black hover:text-[#371f6b] duration-300 active:border-b-2 border-b-amber-400 relative after:absolute after:contents-[""] after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#371f6b]  after:duration-300
                            '>Products</a>
                            </li>
                            <li>
                                <a href="#about" className='text-lg font-medium font-sans text-black hover:text-[#371f6b] duration-300 active:border-b-2 border-b-amber-400 relative after:absolute after:contents-[""] after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#371f6b]  after:duration-300'>About</a>
                            </li>
                            <li>
                                <a href="#contact" className='text-lg font-medium font-sans text-black hover:text-[#371f6b] duration-300 active:border-b-2 border-b-amber-400 relative after:absolute after:contents-[""] after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#371f6b] after:duration-300'>Contact</a>
                            </li>
                        </ul>
                        <MdOutlineShoppingBag className='text-3xl hover:text-red-500 duration-300 cursor-pointer ml-6' />
                        <div className="relative">
                            <FaHeart className='text-2xl text-red-500 duration-300 cursor-pointer ' /><span className='absolute -top-1 right-10 bg-red-500 rounded-full text-center w-4 h-4 text-white text-xs'>0</span>
                        </div>
                        <div className="relative">
                            <FaUser className='text-3xl bg-gray-600 p-1 rounded-full text-white cursor-pointer hover:border-2 hover:border-amber-300 duration-300 ' />
                            <span className='absolute -top-1 right-10 bg-black   rounded-full text-center w-4 h-4 text-white font-extrabold text-xs'>1</span>
                        </div>

                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navber