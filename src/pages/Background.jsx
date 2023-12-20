import { getValue } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";



function Background({handleShowTab, updateCharacterInfo}) {

    const [inputNameValue, setInputNameValue] = useState('')

    function handleNameChange(event) {
        setInputNameValue(event.target.value);
    }

    const [inputBackgroundValue, setInputBackgroundValue] = useState('')

    function handleBackgroundChange(event) {
        setInputBackgroundValue(event.target.value);
    }


    const navigate = useNavigate()

    function onClick(){
        handleShowTab('attribute');
        navigate('/attribute');
        window.scrollTo(0, 0)
        updateCharacterInfo({characterName: inputNameValue, characterBackground: inputBackgroundValue})
    }

    return (

        <div style={{gap:'20px', display:'flex', padding:'40px 200px', flexDirection:'column', alignItems:'center'}}>
            <div style={{display:'flex', width:'100%', justifyContent:'center'}}> 
                <img src={require("../Images/texto1.png")} alt="Header 1"></img>   
            </div>
            <div>
                <textarea value={inputBackgroundValue} onChange={handleBackgroundChange} maxLength={'1000'} placeholder={'Escreva a história do personagem aqui (limite 1000 caracteres)'} type={'text'} style={inputStyle}></textarea>
            </div>
            <div>
                <a style={{color:'white'}}>Escolha o nome do personagem abaixo</a>
            </div>
            <div>
                <input value={inputNameValue} style={inputStyleName} onChange={handleNameChange}></input>
            </div>
            <div>
                <button onClick={onClick} disabled={(inputNameValue === '') ? true : false} style={(inputNameValue === '') ? disabledButton : enabledButton}>Próximo passo</button>
            </div>
            
        </div>
    )
}

const inputStyle = {resize:'none', outline:'none', verticalAlign:'top', textAlign:'left', width:"1040px", borderRadius:"5px", border:"1px solid white", backgroundColor:'#020202', height:'150px', padding:'10px', color:'white', fontSize:'14px'}
const inputStyleName = {outline:'none', verticalAlign:'top', textAlign:'center', width:"300px", borderRadius:"5px", border:"1px solid white", backgroundColor:'#020202', height:'30px', padding:'10px', color:'white', fontSize:'14px'}
const disabledButton = {backgroundColor:"#020202", lineHeight:"20px", borderRadius:"5px", fontSize:"16px", border:"1px solid white", width:"200px", height:"70px", color:'white', opacity:'20%'}
const enabledButton = {cursor:'pointer', backgroundColor:"#020202", lineHeight:"20px", borderRadius:"5px", fontSize:"16px", border:"1px solid white", width:"200px", height:"70px", color:'white'}
export default Background