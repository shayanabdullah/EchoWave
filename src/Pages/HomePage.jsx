import React from 'react'
import Navber from '../components/Navber'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import Loader from '../components/Loader'
import Products from '../components/Products'
import LevelUp from '../components/LevelUp'
import Subscribe from '../components/Subscribe'

const HomePage = () => {
  return (
    <>
    <Loader/>
    <Navber/>
    <Hero/>
    <Cards/>
    <Products/>
    <LevelUp/>
    <Subscribe/>
    </>
  )
}

export default HomePage