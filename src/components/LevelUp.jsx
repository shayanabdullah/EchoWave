import React from 'react'
import Images from './Images'
import img1 from '.././assets/soundbox.png'
import img2 from '.././assets/mdcontroller.png'
import { FaArrowRight } from 'react-icons/fa6'
const LevelUp = () => {
  return (
<section className='py-20 '>
    <div className="container">
        <div className="level-banner bg-[#E6E9f2] relative py-20 rounded-2xl flex items-center overflow-hidden justify-between">
            <div className="img-1">
                <Images src={img1} className='max-w-72 pl-20'/>
            </div>

            <div className="text flex flex-col justify-center text-center ">
             <h2 className='text-3xl font-bold'>Level Up Your 
              <span className="block">
              Gaming Experience
              </span>
              </h2>
              <p className='text-lg font-medium text-center m-[0]! pt-5 leading-5 text-gray-600 '>From immersive sound to precise controls—
               <span className="block"> everything you need to win</span>
              </p>
              <div className="pt-7 w-full flex justify-center ">
                  <button className='py-3 px-10 rounded-xs bg-orange-500 text-white text-base cursor-pointer flex items-center gap-5 group'>Buy now <FaArrowRight/></button>
                </div>

            </div>
            <div className="img-2 pr-60">
                <Images src={img2} className='max-w-80 absolute top-0 right-1 block'/>
            </div>
             </div>
    </div>
</section>
  )
}

export default LevelUp