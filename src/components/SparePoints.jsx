import { useState } from "react"

function SparePoints(props) {

    return (
        <div style={{display:"flex", justifyContent:"start", marginTop:"30px"}}>
            <div style={{display:"flex", flexDirection:"column", gap:"20px", textAlign:"right", fontSize:"40px", color:"grey", lineHeight:"1"}}>
                <div style={{fontFamily:"Adobe Hebrew Regular", display:"flex", gap:"7px", justifyContent:"end", alignItems:"center", marginLeft:"53px"}}>Points<input value={props.val} id="statsInput" style={inputStyle} readOnly/></div>
            </div>
        </div>
    )
}

const inputStyle = {lineHeight:"40px", margin:"5px 5px", width:"45px", borderRadius:"17px", textAlign:"center", fontSize:"30px", border:"2px solid black"}

export default SparePoints