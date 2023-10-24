import "./OriginPopup.css"

function OriginPopup(props) {

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner" style={{display:"flex", flexDirection:"column", gap:"10px"}}>
                <div style={headPop}>CONFIRM ORIGIN</div>
                <div style={insideHeader}>
                    <text>{props.originHead}</text>
                </div>
                <div style={insideText}>
                    <text>{props.originText}</text>
                </div>
                <div style={insideText}>
                    <text style={{color:"red"}}>Trained skills.</text><text>&nbsp;{props.originSkill}</text>
                </div>
                <div style={insideText}>
                    <text style={{color:"red"}}>{props.originPower1}</text><text>&nbsp;{props.originPower2}</text>
                </div>
                <button className="select-btn">Select</button>
                <button className="close-btn" onClick={() => props.setTrigger(false)}>Close</button>
            </div>
        </div>
    ) : "";
}

const headPop = {display:"flex", height:"60px", backgroundColor:"#282c34", color:"white", justifyContent:"center", alignItems:"center", fontSize:"25px"}
const insideHeader = {display:"flex", borderBottom:"3px solid white", alignContent:"center", justifyContent:"center", color:"white", fontSize:"25px"}
const insideText = {alignContent:"center", color:"white", fontSize:"17px", padding:"5px", textAlign:"justify"}

export default OriginPopup