import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'

let ApiData = createContext()

const ContextApi = ({children}) => {

let [data, setdata] = useState([])
let getData = ()=> {
    axios.get("https://fakestoreapi.in/api/products").then((response)=>{
      
     setdata(response.data.products)
    })
}
useEffect(()=>{
getData()
},[])
  return <ApiData.Provider value={data}>{children}</ApiData.Provider> ;
  
}

export {ApiData, ContextApi}