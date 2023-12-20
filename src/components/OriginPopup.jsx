import "./OriginPopup.css"
import "../App.css"

function OriginPopup(props) {

    return (props.trigger) ? (
        <div className="origin-popup" onClick={() => props.setTrigger(false)}>
            <div onClick={(event) => event.stopPropagation()} className="origin-popup-inner" style={{display:"flex", flexDirection:"column", gap:"10px", border:'1px solid white', borderRadius:'5px'}}>
                <div style={insideHeader}>
                    <text className='cameo'>&nbsp;{props.originHead}&nbsp;</text>
                </div>
                <div style={insideText}>
                    <text>{props.originText}</text>
                </div>
                <div style={insideText}>
                    <text className='cameo' style={{color:"#b22729"}}>Trained skills.</text><text>&nbsp;{props.originSkill}</text>
                </div>
                <div style={insideText}>
                    <text className='cameo' style={{color:"#b22729"}}>{props.originPower1}</text><text>&nbsp;{props.originPower2}</text>
                </div>
            </div>
        </div>
    ) : "";
}

const headPop = {display:"flex", height:"60px", backgroundColor:"#282c34", color:"white", justifyContent:"center", alignItems:"center", fontSize:"25px"}
const insideHeader = {display:"flex", alignContent:"center", justifyContent:"center", color:"#B22729", fontSize:"25px"}
const insideText = {alignContent:"center", color:"white", fontSize:"17px", padding:"10px", textAlign:"left"}

export default OriginPopup