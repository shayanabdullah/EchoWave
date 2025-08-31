import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Images from './Images'
import banner from '../assets/headphone-1.png'  
import ps5 from '../assets/ps5.png'
import earphone from '../assets/earphone.png'
import Slider from 'react-slick'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import './hero.css'

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div onClick={onClick} className='next' >
      <IoIosArrowForward />
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div onClick={onClick} className='prev'>
        <IoIosArrowBack />
      </div>
    );
  }

const Hero = () => {
    var settings = {
        dots: true, 
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }
    
  return (
   <section id='home'>
    <div className="container">
     <Slider {...settings} className='relative z-[101]'>
     <div className="row 1 flex! items-center bg-[#130928] py-[50px] px-10  rounded-3xl">
   
   <div className="banner-left w-3/5 pl-5">
 <h4 className='text-white text-2xl font-semibold pb-5 font-serif'>Feel the Beat. Rule the Game.</h4>
 <h1 className='text-white text-7xl font-semibold leading-19 pb-8'> Wireless 
   <span className='block text-8xl'>Headphones</span>
 </h1>
 <p className='text-white font-medium text-[14px] pb-8'>Experience immersive sound for music and gaming</p>
 <button className='text-white py-4 px-8 bg-violet-600 text-lg font-medium cursor-pointer rounded-2xl hover:bg-white hover:text-violet-600 duration-300 border-2 border-transparent hover:border-violet-600 shadow shadow-gray-500'>Shop Now</button>
 </div>
 <div className="banner-right w-2/5 relative">
 <div className="overlay w-[500px] h-[500px] bg-white rounded-full z-10 absolute border-8 border-violet-600 left-1 -top-2"></div>
 <div className="text-right w-full flex justify-end items-center relative z-11">
 <Images src={banner} className='w-120'/>
 </div>

 </div>

</div>

     <div className="row 2 flex! items-center bg-[#130928] py-[40px] px-10 rounded-3xl">
   
     <div className="banner-left w-3/5 pl-5">
  <h4 className='text-white text-2xl font-semibold pb-5 font-serif'>Exclusive Offer</h4>
  <h1 className='text-white text-6xl font-semibold leading-22 pb-8'> Premium Sound 
    <span className='block text-8xl'>Earphones</span>
  </h1>
  <p className='text-white font-medium text-[14px] pb-8'>Lightweight design with powerful sound  and Experience comfort, clarity, 
<span className='block'> and freedom with every beat.</span>
    </p> 
  <button className='text-white py-4 px-8 bg-violet-600 text-lg font-medium cursor-pointer rounded-2xl hover:bg-white hover:text-violet-600 duration-300 border-2 border-transparent hover:border-violet-600 shadow shadow-gray-500'>Shop Now</button>
</div>
<div className="banner-right w-2/5 relative ">
  <div className="overlay w-[500px] h-[500px]  bg-white rounded-full z-10 absolute border-8 border-violet-600 left-1 -top-2"></div>

  <div className="text-right w-full flex h-[500px] justify-center items-center relative z-11">
    <Images src={earphone} className='w-[400px]'/>
  </div>
</div>


</div>

     <div className="row 3 flex! items-center bg-[#130928] py-[40px] px-10 rounded-3xl">
   
     <div className="banner-left w-3/5 pl-5">
  <h4 className='text-white text-2xl font-semibold pb-5 font-serif'>Limited Time Deal 10% OFF</h4>
  <h1 className='text-white text-6xl font-semibold leading-22 pb-8'>
    Next-Gen Gaming <span className='block text-8xl'>PlayStation 5</span>
  </h1>
  <p className='text-white font-medium text-[14px] pb-8'>
    Lightning-fast SSD, breathtaking 4K graphics, and immersive gameplay.
  </p>
  <button className='text-white py-4 px-8 bg-violet-600 text-lg font-medium cursor-pointer rounded-2xl hover:bg-white hover:text-violet-600 duration-300 border-2 border-transparent hover:border-violet-600 shadow shadow-gray-500'>
    Shop Now
  </button>
</div>

 <div className="banner-right w-2/5 relative">
 <div className="overlay w-[500px] h-[500px] bg-white rounded-full z-10 absolute border-8 border-violet-600 left-1 -top-2"></div>

 <div className="text-right w-full h-[500px] flex! justify-center items-center relative z-11">
 <Images src={ps5} className='w-[330px]'/>
 </div>

 </div>

</div>


     </Slider>
   
      
    </div>
   </section>
  )
}

export default Hero