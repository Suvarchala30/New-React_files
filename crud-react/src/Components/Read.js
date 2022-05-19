import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table,Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Read = (()=>{
    const [dataAPIS,setdataapis]=useState([])
    useEffect(()=>{
        axios.get("https://6285143e3060bbd3474446ba.mockapi.io/fakeAPIdata").then((getData)=>{
            setdataapis(getData.data)
        })
        
    },[])
    const deleteData=((id)=>{
        axios.delete(`https://6285143e3060bbd3474446ba.mockapi.io/fakeAPIdata/${id}`).then(()=>{
            getdata()
        })
    })
    const getdata = ()=>{
        axios.get("https://6285143e3060bbd3474446ba.mockapi.io/fakeAPIdata").then((getData)=>{
            setdataapis(getData.data)
        })
    }
    const setdata=(id,firstname,lastname)=>{
        localStorage.setItem("Id",id)
        localStorage.setItem("Firstname",firstname)
        localStorage.setItem("Lastname",lastname)
    }
    return(
        <div className="readBlock">
            <Table className="tableMain">
  <thead>
    <tr className="tableHeader">
      <th>ID No.</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Update</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
      {dataAPIS.map((apiData)=>{
          return(
<tr className="tableBody" key={apiData.id}>
      <td>{apiData.id}</td>
      <td>{apiData.firstname}</td>
      <td>{apiData.lastname}</td>
      <td><Link to="/update"><Button className="updateBtn" onClick={()=>setdata(apiData.id,apiData.firstname,apiData.lastname)}>Update</Button></Link></td>
      <td><Button className="deleteBtn" onClick={()=>deleteData(apiData.id)}>Delete</Button></td>
    </tr>
          )
      })}
    
  </tbody>
</Table>
<Link to = "/"><Button> Back to create data</Button></Link>
        </div>
    )
})
export default Read