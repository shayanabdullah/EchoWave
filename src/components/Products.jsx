import React, { useContext } from 'react'
import { ApiData } from './ContextApi';
import Images from './Images';
import { FaCartPlus, FaHeart, FaStar, FaStarAndCrescent, FaStarHalfAlt } from 'react-icons/fa';



const Products = () => {
    let data = useContext(ApiData)
  return (
<section className='py-8' id='products' >
    <div className="container">
        <h1 className='font-semibold text-5xl font-sans w-full'>Popular products</h1>

        <div className="grid lg:grid-cols-5 gap-6 pt-8 ">
            
                {data.map((item)=> (
            <div key={item.id} className="card flex flex-col items-start gap-y-1.5 max-w-[220px] truncate  shadow-lg p-4 cursor-pointer group relative">
                  <Images src={item.image} className='card-img group-hover:scale-110 duration-300'/>           
                   <h2 className='text-lg font-semibold line-clamp-2'>{item.title}</h2>
                   <p className='text-gray-500/70 text-xs'>{item.description}</p>
                  <div className="flex items-center gap-1.5 pb-3">
                  <p className='text-xs font-regular '>4.5</p>
                  <FaStar className='text-orange-400'/>
                  <FaStar className='text-orange-400'/>
                  <FaStar className='text-orange-400'/>
                  <FaStar className='text-orange-400'/>
                  <FaStarHalfAlt className='text-orange-400'/>
                  </div>
              <div className="flex items-center justify-between gap-8 ">
              <p className='font-semibold font-sans text-base'>${item.price}.99</p>
              <button className='flex items-center gap-1 py-1 px-2 rounded-xl  text-black-500/80 text-base font-medium border border-gray-500 cursor-pointer'>Buy Now <FaCartPlus className='text-red-500'/></button>
              </div>
               <div className="absolute top-1 right-2 text-blue-300 shadow-lg bg-white border border-gray-400 rounded-2xl px-2 py-2">
                <FaHeart className=''/>
               </div>
            </div>
                ))}
          
          <div className="pt-5">
                  <button className='py-2 px-3 rounded-xl bg-red-500 text-white text-base cursor-pointer'>View all Products</button>
                </div>
        </div>
    </div>
            
</section>
  )
}

export default Products