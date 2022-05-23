import React, { useEffect, useState } from "react"
import Data from "./Data"
//import Slots from "./Slots"
const Booking = (()=>{
    const [noOfDoctors,setNoOfDoctors]=useState(0)
    const [slotDisplay,setSlotDisplay]=useState(false)
    const [slotTime,setSlotTime]=useState()
    const [arr,setArr]=useState([])
    const handleInput=((e)=>{
        setNoOfDoctors(e.target.value)
        //console.log(e.target.value)
       
    })
    useEffect(()=>{
        setNoOfDoctors(noOfDoctors)
    })
   
   const handleSlots=((value)=>{
       
       setArr(arr.concat({slot:value}))
        console.log(value)
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
                            
                            <input type="radio" value="Morning" name="slot"/>Morning
                           
                            <input type="radio" value="Afternoon" name="slot"/>Afternoon
                                                     
                            <input type="radio" value="Evening" name="slot"/>Evening
                            
                            <br />
                        </div>
                    )
                })
            }
            {
                // Data
                // .filter((item)=>{
                //     if(item.id<=noOfDoctors){
                //         return item
                //     }
                // })
                arr.map((item,index)=>{
                    return(
                        <div className="resultApp" key={index}>
                           
                            <h3 className="booking"> {item.slot}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
})

export default Booking