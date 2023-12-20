function StatWord(props) {

    return (
        <div>
            <div style={{display:"flex", gap:"10px", justifyContent:"end", alignItems:"center", color:'white'}}>{props.word} <input value={props.val} id="statsInput" style={inputStyle} readOnly/></div>
        </div>
    )
}

const inputStyle = {lineHeight:"25px", width:"30px", borderRadius:"5px", textAlign:"center", fontSize:"20px", border:"1px solid white", color:'white'}

export default StatWord