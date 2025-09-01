import React from 'react'
import Images from './Images'
import logo from '../assets/logo.png'
import { FaArrowUp, FaFacebook, FaFacebookMessenger, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { FaSignalMessenger } from 'react-icons/fa6'
const Footer = () => {
  return (
    <section id='contact' className='bg-[#e6e6e8] py-15'>
        <div className="container">
         <div className="flex items-start gap-36 relative">
         <div className="w-2/5">
                 <Images src={logo} className='w-[200px] pb-5'/>
                 <p className='font-medium text-lg text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="w-3/5 flex flex-wrap justify-between">
               <div className="right">
               <h2 className='font-semibold text-xl pb-6'>Company</h2>
                <ul>
                  <li>
                    <a href="#home" className='font-medium text-[14px] text-gray-600 cursor-pointer hover:underline  pb-5'>Home</a>
                  </li>
                  <li>
                    <a href="#products" className='font-medium text-[14px] text-gray-600 cursor-pointer hover:underline pb-5'>Products</a>
                  </li>
                  <li>
                    <a href="#about" className='font-medium text-[14px] text-gray-600 cursor-pointer hover:underline pb-5'>About</a>
                  </li>
                  <li>
                    <a href="#contact" className='font-medium text-[14px] text-gray-600 cursor-pointer hover:underline pb-5'>contact</a>
                  </li>
                 
                </ul>
               </div>
                <div className="left">
                <h2 className='font-semibold text-xl pb-5'>Get in touch</h2>
                <p className='cursor-pointer text-lg font-medium text-gray-600 hover:underline pb-2'>Phone : +880123-456-789</p>
                <p className='cursor-pointer text-lg font-medium text-gray-600 hover:underline pb-5'>Contact : contactechowave@gmail.com</p>
                <h2 className='font-semibold text-xl pb-2 '>Opening Hours :
                <span className='cursor-pointer text-lg font-medium text-gray-600 hover:underline pl-3'>10am to 11pm</span>
                </h2>
                <h2 className='font-semibold text-xl pt-2 '>Location :</h2>
                <p className='cursor-pointer text-lg font-medium text-gray-600 hover:underline pt-2'>12/3 Abc road Dhanmondi Dhaka 1209</p>
                <div className="flex items-center gap-4 pt-5">
                <a href="#" className='text-lg font-medium '><FaTwitter/></a>  
                 <a href="#" className='text-lg font-medium '> <FaFacebook/></a>
                 <a href="#" className='text-lg font-medium '><FaFacebookMessenger/></a>
                 <a href="#" className='text-lg font-medium '><FaLinkedinIn/></a>
                 <a href="#" className='text-lg font-medium '><FaInstagram/></a>
                </div>
                </div>

                </div>
                <a href="#">
                <button className='bg-red-500  rounded-full text-white w-20 h-20 flex items-center justify-center text-xl absolute -right-10  -bottom-14 cursor-pointer' ><FaArrowUp/></button>
                </a>
         </div>
        </div>
    </section>
  )
}

export default Footer