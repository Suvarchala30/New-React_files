import React, { useEffect, useState } from "react";

function Data(){
    const [data,setData]=useState([])
    const url="https://jsonplaceholder.typicode.com/todos"
    useEffect(()=>{
        fetchUrl()
    },[])
    const fetchUrl=async ()=>{
        const response = await fetch(url);
        const result=await response.json();
        setData(result)
        console.log(result)
    }
    return(
        <div>
            {data.map(item=>(
                <table>
                    <tr  key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.userId}</td>
                        <td>{item.title}</td>
                        <td>{item.completed}</td>
                    </tr>
                </table>
            ))}
        </div>
    )
}
 export default Data