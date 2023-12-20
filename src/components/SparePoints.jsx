import { useState } from "react"

function SparePoints(props) {

    return (
        <div style={{display:"flex", justifyContent:"start"}}>
            <div style={{display:"flex", gap:"10px", alignItems:"center"}}>
                <a style={{fontSize:"20px", color:"white"}}>Pontos disponíveis</a><input value={props.val} id="statsInput" style={inputStyle} readOnly/>
            </div>
        </div>
    )
}

const inputStyle = {lineHeight:"25px", width:"30px", borderRadius:"5px", textAlign:"center", fontSize:"20px", border:"1px solid white", color:'white'}

export default SparePoints