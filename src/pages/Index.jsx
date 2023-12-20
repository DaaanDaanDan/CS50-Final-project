import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Index({handleShowTab, updateCharacterInfo}) {

    const [inputPersonNameValue, setInputPersonNameValue] = useState('')

    function handleNameChange(event) {
        setInputPersonNameValue(event.target.value);
    }

    const navigate = useNavigate()

    function onClick(){
        handleShowTab('background');
        navigate('/background');
        window.scrollTo(0, 0)
        updateCharacterInfo({personName: inputPersonNameValue})
    }

    return (
        <div style={{gap:'20px', display:'flex', padding:'40px 200px', flexDirection:'column', alignItems:'center'}}>
            <div style={{color:"white", fontSize:"15px", textAlign:"justify"}}>
                Bem vindo à criação de personagem em Ordem Paranormal. Preencha seu nome (opcional) e clique no botão abaixo.
            </div>
            <div>
                <input value={inputPersonNameValue} style={inputStyleName} onChange={handleNameChange}></input>
            </div>
            <div>
                <button onClick={onClick} style={{cursor:'pointer', backgroundColor:"#020202", lineHeight:"20px", borderRadius:"5px", fontSize:"16px", border:"1px solid white", width:"200px", height:"70px", color:'white'}}>Próximo passo</button>
            </div>
            
        </div>
    )
}
const inputStyleName = {outline:'none', verticalAlign:'top', textAlign:'center', width:"300px", borderRadius:"5px", border:"1px solid white", backgroundColor:'#020202', height:'30px', padding:'10px', color:'white', fontSize:'14px'}

export default Index