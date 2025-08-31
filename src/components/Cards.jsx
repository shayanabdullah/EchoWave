import React, { useContext } from 'react'
import './card.css'
import Images from './Images'
import card1 from '../assets/earphone-card.png'
import card2 from '../assets/watch.png'
import card3 from '../assets/macbook.png'
import card4 from '../assets/gaming--ps5.png'
import card5 from '../assets/vr.png'
import card6 from '../assets/speaker.png'
import { FaTruckFast } from 'react-icons/fa6'
import { FaCheck, FaClipboardCheck, FaHeadphones, FaWallet } from 'react-icons/fa'
import { ApiData } from './ContextApi'
const Cards = () => {

  
  return (
<section className='py-16'>
    <div className="container">
       <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="card-1 py-10 bg-gradient-to-br from-black/90 to-black/70 h-[350px] text-white flex items-end relative rounded-3xl">
           <div className="text-box pl-5 absolute top-[105px] ">
           <h4 className='text-xl font-medium text-gray-400 leading-10 mb-0.5'>Enjoy</h4>
            <h3 className='text-white font-medium text-3xl leading-10 mb-0.5'>With</h3>
            <h2 className='text-gray-400 font-bold text-5xl leading-10 mb-0.5'>Earphones</h2>
            <button className='py-2 px-8 bg-red-500 text-lg font-medium rounded-3xl mt-8 cursor-pointer hover:bg-transparent hover:text-white relative z-20 duration-300 hover:border-white border border-red-500'>Browse</button>
           </div>
            <Images src={card1} className='w-[320px] absolute bottom-0 right-0  z-10 '/>
          </div>
          <div className="card-2 py-10 bg-violet-500 h-[350px] text-white flex items-end relative rounded-3xl">
           <div className="text-box pl-5 absolute top-[115px] ">
           <h4 className='text-xl font-medium text-white leading-10 mb-0.5'>Enjoy</h4>
            <h3 className='text-black font-medium text-3xl leading-10 mb-0.5'>With</h3>
            <h2 className='text-white font-bold text-5xl leading-10 mb-0.5'>SmartWatch</h2>
            <button className='py-2 px-8 bg-yellow-500 text-lg font-medium rounded-3xl mt-8 cursor-pointer hover:bg-transparent hover:text-white relative z-20 duration-300 hover:border-white border border-yellow-500 text-black'>Browse</button>
           </div>
            <Images src={card2} className='w-[320px] absolute top-2.5 -right-9  z-10 '/>
          </div>
          <div className="card-3 py-10 bg-red-500 h-[350px] text-white flex items-end relative rounded-3xl col-span-2">
           <div className="text-box pl-5 absolute top-[85px] ">
           <h4 className='text-xl font-medium text-white leading-10 mb-0.5'>Enjoy</h4>
            <h3 className='text-gray-300 font-medium text-3xl leading-10 mb-0.5'>With</h3>
            <h2 className='text-white font-bold text-6xl leading-10 mb-0.5'>Laptop</h2>
            <button className='py-2 px-8 bg-white text-lg font-medium rounded-3xl mt-11 cursor-pointer hover:bg-transparent hover:text-white relative z-20 duration-300 hover:border-white border border-white text-black'>Browse</button>
           </div>
            <Images src={card3} className='w-[320px] absolute top-2.5 right-0  z-10 '/>
          </div>
          <div className="card-4 py-10 bg-gradient-to-br to-white from-gray-400 h-[350px] text-white flex items-end relative rounded-3xl col-span-2">
           <div className="text-box pl-5 absolute top-[85px] ">
           <h4 className='text-xl font-medium text-gray-600  leading-10'>Enjoy</h4>
            <h3 className='text-white font-medium text-3xl leading-10 mb-1'>With</h3>
            <h2 className='text-black font-bold text-6xl leading-10 mb-0.5'>PS5</h2>
            <button className='py-2 px-8 bg-white text-lg font-medium rounded-3xl mt-11 cursor-pointer hover:bg-transparent hover:text-black relative z-20 duration-300 hover:border-white border border-gray-600 text-black'>Browse</button>
           </div>
            <Images src={card4} className='w-[320px] absolute top-2.5 right-0  z-10 '/>
          </div>
          <div className="card-5 py-10 bg-green-400 h-[350px] text-white flex items-end relative rounded-3xl">
           <div className="text-box pl-5 absolute top-[20px] ">
           <h4 className='text-xl font-medium text-white leading-10 mb-0.5'>Enjoy</h4>
            <h3 className='text-black font-semibold text-3xl leading-10 mb-1'>With</h3>
            <h2 className='text-white font-bold text-5xl leading-10 mb-0.5'>VR</h2>
            <button className='py-2 px-8 bg-white text-lg font-medium rounded-3xl mt-8 cursor-pointer hover:bg-transparent hover:text-white relative z-20 duration-300 hover:border-white border border-black text-black'>Browse</button>
           </div>
            <Images src={card5} className='w-[260px] absolute -bottom-0 -right-8  z-10 '/>
          </div>
          <div className="card-6 py-10 bg-blue-400 h-[350px] text-white flex items-end relative rounded-3xl ml-5">
           <div className="text-box pl-5 absolute top-[20px] ">
           <h4 className='text-xl font-medium text-white leading-10 mb-0.5'>Enjoy</h4>
            <h3 className='text-gray-300 font-semibold text-3xl leading-10 mb-1'>With</h3>
            <h2 className='text-white font-bold text-5xl leading-10 mb-0.5'>GADGETS</h2>
            <button className='py-2 px-8 bg-white text-lg font-medium rounded-3xl mt-8 cursor-pointer hover:bg-transparent hover:text-white relative z-20 duration-300 hover:border-white border border-blue-400 text-blue-400'>Browse</button>
           </div>
            <Images src={card6} className='w-[230px] absolute -bottom-3 -right-4  z-10 '/>
          </div>      
       </div>
       <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-24">
      <div className="flex items-start gap-5 ">
            <FaTruckFast className='text-7xl text-black'/>
            <div className="text">
            <h2 className='text-2xl font-bold pb-1'>Free Shipping</h2>
  <p className='text-[14px] font-medium text-gray-400 '>Free Shipping on all over Dhaka</p>
               </div>
            </div>
      <div className="flex items-start gap-5 ">
            <FaCheck className='text-6xl text-white bg-green-500 p-2 rounded-full'/>
            <div className="text">
            <h2 className='text-2xl font-bold pb-1'>Safe Money</h2>
  <p className='text-[14px] font-medium text-gray-400 '>30 Days Money Back</p>
               </div>
            </div>
      <div className="flex items-start gap-5 ">
            <FaWallet className='text-6xl text-blue-500 '/>
            <div className="text">
            <h2 className='text-2xl font-bold pb-1'>Secure Payment</h2>
  <p className='text-[14px] font-medium text-gray-400 '>All Payment Secure
</p>
               </div>
            </div>
      <div className="flex items-start gap-5 ">
            <FaHeadphones className='text-6xl text-red-500 '/>
            <div className="text">
            <h2 className='text-2xl font-bold pb-1'>Online Supoort 24/7</h2>
  <p className='text-[14px] font-medium text-gray-400 '>Technical Support 24/7

</p>
               </div>
            </div>

        </div> 

    </div>
</section>
  )
}

export default Cards