import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate} from 'react-router-dom';
import "./Class.css"
import CombatentPopup from "../components/CombatentPopup"
import { useState } from "react";
import SpecialistPopup from '../components/SpecialistPopup';
import ClassTable from '../components/ClassTable';
import OcultistPopup from '../components/OcultistPopup';

function Class({handleShowTab, updateCharacterInfo}) {

    var [combatentButtonPopup, setCombatentButtonPopup] = useState(false);
    var [specialistButtonPopup, setSpecialistButtonPopup] = useState(false);
    var [ocultistButtonPopup, setOcultistButtonPopup] = useState(false);
    const [activeButton, setActiveButton] = useState(null)

    function setPopup(classVar) {
        if (classVar === "Combatent")
        {
            setCombatentButtonPopup(true)
            setActiveButton("Combatente")
        }

        else if (classVar === "Specialist")
        {
            setSpecialistButtonPopup(true)
            setActiveButton("Especialista")
        }

        else if (classVar === "Ocultist")
        {
            setOcultistButtonPopup(true)
            setActiveButton("Ocultista")
        }
    }


    function onClick() {
        handleShowTab('perks');
        navigate('/perks');
        window.scrollTo(0, 0);
        updateCharacterInfo({characterClass: activeButton})
    }

    const navigate = useNavigate()

    return (
        <div style={{gap:'20px', display:'flex', padding:'40px 200px', flexDirection:'column', alignItems:'center'}}>
            <div style={{display:'flex', width:'100%', justifyContent:'center'}}>
                <img src={require("../Images/texto4.png")} alt="Header 4"></img> 
            </div>
            <div style={{display:'flex', width:'100%', justifyContent:'space-evenly', alignItems:'center'}}>
                <div style={((activeButton === "Combatente") ? classChoiceInfoOn : classChoiceInfoOff)} onClick={() => setPopup("Combatent")}>
                    <a style={{fontSize:"32px"}}>COMBATENTE</a>
                    <br></br>
                    <a>Informação</a>
                </div>
                <div style={((activeButton === "Especialista") ? classChoiceInfoOn : classChoiceInfoOff)} onClick={() => setPopup("Specialist")}>
                    <a style={{fontSize:"32px"}}>ESPECIALISTA</a>
                    <br></br>
                    <a>Informação</a>
                </div>
                <div style={((activeButton === "Ocultista") ? classChoiceInfoOn : classChoiceInfoOff)} onClick={() => setPopup("Ocultist")}>
                    <a style={{fontSize:"32px"}}>OCULTISTA</a>
                    <br></br>
                    <a>Informação</a>
                </div>
            </div>
            <div>
                <button onClick={onClick} disabled={(activeButton === null) ? true : false} style={(activeButton === null) ? disabledButton : enabledButton}>Próximo passo</button>
            </div>
            <div style={{display:'flex', gap:'20px'}}>
                <div style={{display:"flex", flexDirection:"column", gap:"15px"}}>
                    <text className='cameo' style={{color:"#B22729", fontSize:"23px", alignSelf:'center'}}>&nbsp;Exposição paranormal&nbsp;</text>
                    <text style={insideText}>Todo personagem possui um nível de exposição paranormal, ou NEX, que mede quanto de seu ser já foi exposto ao Outro Lado. Um personagem iniciante começa com NEX 5%, representando quaisquer experiências estranhas pelas quais ele tenha passado durante seu histórico. Conforme você participa de missões e encontra manifestações paranormais, seu NEX aumenta. O mestre define quando isso acontece, mas, via de regra, seu NEX aumenta em 5% a cada missão concluída com sucesso. Quanto maior seu NEX, mais experiente — e poderoso — você é.</text>
                </div>
                <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"15px"}}>
                        <text className='cameo' style={{color:"#B22729", fontSize:"23px"}}>&nbsp;Benefícios de NEX&nbsp;</text>
                        <text style={insideText}>Quando atinge um novo nível de exposição paranormal, você recebe os seguintes benefícios.</text>
                    </div>
                    <div style={{textAlign:"justify"}}>
                        <text className='cameo' style={className}>Pontos de vida, de Esforço e Sanidade.</text><text style={insideText}>&nbsp;Seus PV, PE e SAN máximos aumentam de acordo com sua classe (e, no caso dos PV e PE, de acordo com seu Vigor e Presença, respectivamente).</text>
                    </div>
                    <div style={{textAlign:"justify"}}>
                        <text className='cameo' style={className}>Habilidades de Classe.</text><text style={insideText}>&nbsp;Você recebe todas as habilidades de classe do NEX alcançado.</text>
                    </div>
                    <div style={{textAlign:"justify"}}>
                        <text className='cameo' style={className}>Limite de PE.</text><text style={insideText}>&nbsp;O máximo de PE que você pode gastar por turno. Assim, se você tiver NEX 30%, pode usar uma habilidade que custe 6 PE, duas habilidades que custem 3 PE cada ou qualquer combinação que some até 6 PE por turno (supondo que tenha esses pontos de esforço disponíveis). Independente do limite, você sempre pode usar pelo menos uma habilidade em seu custo mínimo por turno. Assim, um combatente de NEX 5% pode usar seu Ataque Especial, mesmo que seu limite de PE seja 1 e a habilidade custe 2 PE.</text>
                    </div>
                </div>
                <div>
                    <ClassTable />
                </div>
            </div>
            <CombatentPopup trigger={combatentButtonPopup} setTrigger={setCombatentButtonPopup}/>
            <SpecialistPopup trigger={specialistButtonPopup} setTrigger={setSpecialistButtonPopup}/>
            <OcultistPopup trigger={ocultistButtonPopup} setTrigger={setOcultistButtonPopup}/>
        </div>
    )
}

const insideText = {color:"white", fontSize:"15px", textAlign:"justify"}
const className = {color:"white", fontSize:"23x", textAlign:"justify", color:"#B22729"}
const classChoiceInfoOff = {cursor:"pointer", display:"flex", flexDirection:"column", backgroundColor:"#020202", width:"250px", border:"2px solid black", borderRadius:"5px", color:"white", textAlign:"center", justifyContent:"center", padding:"30px 0"}
const classChoiceInfoOn = {cursor:"pointer", display:"flex", flexDirection:"column", backgroundColor:"#B22729", width:"250px", border:"2px solid black", borderRadius:"5px", color:"white", textAlign:"center", justifyContent:"center", padding:"30px 0"}
const disabledButton = {backgroundColor:"#020202", lineHeight:"20px", borderRadius:"5px", fontSize:"16px", border:"1px solid white", width:"200px", height:"70px", color:'white', opacity:'20%'}
const enabledButton = {cursor:'pointer', backgroundColor:"#020202", lineHeight:"20px", borderRadius:"5px", fontSize:"16px", border:"1px solid white", width:"200px", height:"70px", color:'white'}
export default Class