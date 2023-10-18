function StatWord(props) {

    return (
        <div>
            <div style={{display:"flex", gap:"10px", justifyContent:"end", alignItems:"center"}}>{props.word} <input value={props.val} id="statsInput" style={inputStyle} readOnly/></div>
        </div>
    )
}

const inputStyle = {lineHeight:"40px", margin:"5px 5px", width:"45px", borderRadius:"17px", textAlign:"center", fontSize:"30px", border:"2px solid black"}

export default StatWord