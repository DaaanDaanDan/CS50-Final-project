import { useState } from "react";
import SparePoints from "../components/SparePoints";
import StatWord from "../components/StatWord";
import './Stats.css'
import { useNavigate } from "react-router-dom";

function Stats({handleShowTab, updateCharacterInfo}) {


    function alterStat(stat, setStat, value){
        if (spare - value < 0)
        {
            return
        }

        const newStat = stat + value
        if ((newStat >= 0 && newStat <= 3))
        {
            setStat(newStat);
            setSpare(spare - value);
        }
    }

    const navigate = useNavigate()

    const [agi, setAgi] = useState(1)
    const [str, setStr] = useState(1)
    const [inte, setInte] = useState(1)
    const [pre, setPre] = useState(1)
    const [vig, setVig] = useState(1)
    const [spare, setSpare] = useState(4)

    function onClick() {
        handleShowTab('origin');
        navigate('/origin');
        window.scrollTo(0, 0)
        updateCharacterInfo({characterAgility: agi, characterStrength: str, characterIntelect: inte, characterPresence: pre, characterVigour: vig})
    }
 
    return (
        <div style={{gap:'20px', display:'flex', padding:'40px 200px', flexDirection:'column', alignItems:'center'}}>
            <div style={{display:'flex', width:'100%', justifyContent:'center'}}> 
                <img src={require("../Images/texto2.png")} alt="Header 2"></img>   
            </div>
            <div style={{display:"flex", gap:"20px", textAlign:"right", fontSize:"20px", color:"grey", width:'100%', justifyContent:'center'}}>
                <StatWord val={agi} word={"Agilidade"}/>
                <div style={arrowStyle}>
                    <button onClick={() => alterStat(agi, setAgi, 1)} style={{cursor:"pointer"}} className="arrow up"></button>
                    <button onClick={() => alterStat(agi, setAgi, -1)} style={{cursor:"pointer"}} className="arrow down"></button>
                </div>
                <StatWord val={str} word={"Força"}/>
                <div style={arrowStyle}>
                    <button onClick={() => alterStat(str, setStr, 1)} style={{cursor:"pointer"}} className="arrow up"></button>
                    <button onClick={() => alterStat(str, setStr, -1)} style={{cursor:"pointer"}} className="arrow down"></button>
                </div>
                <StatWord val={inte} word={"Intelecto"}/>
                <div style={arrowStyle}>
                    <button onClick={() => alterStat(inte, setInte, 1)} style={{cursor:"pointer"}} className="arrow up"></button>
                    <button onClick={() => alterStat(inte, setInte, -1)} style={{cursor:"pointer"}} className="arrow down"></button>
                </div>
                <StatWord val={pre} word={"Presença"}/>
                <div style={arrowStyle}>
                    <button onClick={() => alterStat(pre, setPre, 1)} style={{cursor:"pointer"}} className="arrow up"></button>
                    <button onClick={() => alterStat(pre, setPre, -1)} style={{cursor:"pointer"}} className="arrow down"></button>
                </div>
                <StatWord val={vig} word={"Vigor"}/>
                <div style={arrowStyle}>
                    <button onClick={() => alterStat(vig, setVig, 1)} style={{cursor:"pointer"}} className="arrow up"></button>
                    <button onClick={() => alterStat(vig, setVig, -1)} style={{cursor:"pointer"}} className="arrow down"></button>
                </div>
            </div>
            <div>
                <SparePoints val={spare}/>
            </div>
            <div>
                <button onClick={onClick} disabled={!(spare===0)} style={(spare === 0) ? enabledButton : disabledButton}>Próximo passo</button>
            </div>
        </div>
    )
}

const arrowStyle = {display:'flex', flexDirection:'column', justifyContent:'center', marginLeft:'-10px'}
const disabledButton = {backgroundColor:"#020202", lineHeight:"20px", borderRadius:"5px", fontSize:"16px", border:"1px solid white", width:"200px", height:"70px", color:'white', opacity:'20%'}
const enabledButton = {cursor:'pointer', backgroundColor:"#020202", lineHeight:"20px", borderRadius:"5px", fontSize:"16px", border:"1px solid white", width:"200px", height:"70px", color:'white'}
export default Stats