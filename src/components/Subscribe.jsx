import React from 'react'
import { FaArrowRight, FaArrowUp } from 'react-icons/fa'

const Subscribe = () => {
  return (
   <section className='py-10 pb-20' id='offer'>
    <div className="container">
        <div className="text-center w-full">
            <h1 className='text-4xl font-bold font-sans'>Subscribe now & get 20% off</h1>
            <p className='text-lg text-gray-400 font-medium pt-3 pb-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className="flex justify-center pb-5">
                <input type="email" className='w-[60%] py-7 px-3 outline-0 text-gray-600 border border-gray-500 text-lg ' placeholder='Enter your email id' />
                 <div className=" flex justify-center ">
                                  <button className='py-3 px-10 bg-orange-600 text-white text-2xl cursor-pointer flex items-center gap-5 group rounded-r-b-xl rounded-r-xl '>Subscribe </button>
                                </div>

                               
            </div>
        </div>
    </div>
   </section>
  )
}

export default Subscribe