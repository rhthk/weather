import React from 'react'
import './tab_header.css'
/// Accepts a list of String for tab header
export default function TabHearder({headers,selectedIndex,setInd}) {
    const style = { borderBottom: "2px solid grey"}
    return (
        <div className="header">
           {headers.map((e,index)=>{
               return <div key={index} className="item" style={selectedIndex===index?style:null} onClick={()=>{setInd(index)}}>{e}</div>
           })}
        </div>
    )
}
