import React, { useEffect, useState } from "react"

import { FaSearch } from "react-icons/fa";

const Books=(()=>{

const [data,setData]=useState([])
const url="https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
useEffect(()=>{
    fetchUrl()
})
const fetchUrl=async ()=>{
    const response = await fetch(url)
    const receivedData=await response.json()
    setData(receivedData)
    //console.log(receivedData)
}
return(
    <div className="Books">
        <div className="header">
        <button className="filterBtn">Filters</button>
        <form>
            <input type="text" placeholder="Search By Name" className="searchBox"/>
            <FaSearch className="searchIcon"/>
        </form>
        </div>
        <div className="container">
        {data.map((item,key)=>{


            return(
                <div className="bookBlock"  key={key}>
                <img src={item.image_link} alt={item.name} className="itemImage"/>
                <div className="details">
                <p className="itemName"><span className="title"> Name: </span>{item.name}</p>
                <p className="itemBrand"><span className="title">Brand: </span>{item.brand}</p>
                <p className="itemrating"><span className="title">Rating: </span>{item.rating}</p>
                <p className="itemPrice"><span className="title">INR: </span>{item.price}</p>
                <p className="itemType"><span className="title">Product-Type: </span>{item.product_type}</p>
                </div>
                </div>
            )
        })}
        </div>
    </div>
)

})
export default Books