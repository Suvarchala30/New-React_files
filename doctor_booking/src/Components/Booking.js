import React, { useEffect, useState } from "react"
import Data from "./Data"
//import Slots from "./Slots"
const Booking = (()=>{
    const [noOfDoctors,setNoOfDoctors]=useState(0)
    const [slotDisplay,setSlotDisplay]=useState(false)
    const [slotTime,setSlotTime]=useState()
    
    const handleInput=((e)=>{
        setNoOfDoctors(e.target.value)
        //console.log(e.target.value)
       
    })
    useEffect(()=>{
        setNoOfDoctors(noOfDoctors)
    })
   const handleMorning=(()=>{
    setSlotTime("Morning")
   })
   const handleAfternoon = (()=>{
    setSlotTime("Afternoon")
   })
   const handleEvening=(()=>{
    setSlotTime("Evening")
   })
    return(
        <div className="booking">
            <label htmlFor="inputNumber" >Enter number of Doctors: </label>
            <input type="number" max="10" min="0" className="inputNumber" name="inputNumber" value={noOfDoctors} onChange={handleInput}/>
            
            {
                Data.filter((item)=>{
                    if(item.id<=noOfDoctors){
                        return item
                    }
                })
                .map((item,index)=>{
                    return(
                        <div className="itemDisplay" key={index}>
                            <h3 className="doctorname">{item.name}</h3>
                            {/* <div className="radioBtn">
                            <input type="radio" value="Morning" name="slot" />Morning
                            </div>
                            <div className="radioBtn">
                            <input type="radio" value="Afternoon" name="slot" />Afternoon
                            </div>
                            <div className="radioBtn">
                            <input type="radio" value="Evening" name="slot" />Evening
                            </div> */}
                           
                            <button className="slotBlock" onClick={handleMorning}>Morning</button>
            <button className="slotBlock" onClick={handleAfternoon}>Afternoon</button>
        <button className="slotBlock" onClick={handleEvening}>Evening</button> 

                        </div>
                    )
                })
            }
            {
                Data
                .filter((item)=>{
                    if(item.id<=noOfDoctors){
                        return item
                    }
                })
                .map((item,index)=>{
                    return(
                        <div className="resultApp" key={index}>
                            <h3 className="booking">{item.name} : {slotTime}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
})

export default Booking