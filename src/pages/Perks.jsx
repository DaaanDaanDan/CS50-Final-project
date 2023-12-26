import React from 'react';
import { useEffect, useState } from "react"
import PerksTable from "../components/PerksTable"
import './Perks.css'
import { act } from 'react-dom/test-utils';
import { useNavigate } from 'react-router-dom';

const combatentOptions = ["Força", "Pontaria", "Fortitude", "Reflexos"]
const perks = [
    "Acrobacia",
    "Adestramento",
    "Artes",
    "Atletismo",
    "Atualidades",
    "Ciências",
    "Crime",
    "Diplomacia",
    "Enganação",
    "Fortitude",
    "Furtividade",
    "Iniciativa",
    "Intimidação",
    "Intuição",
    "Investigação",
    "Luta",
    "Medicina",
    "Ocultismo",
    "Percepção",
    "Pilotagem",
    "Pontaria",
    "Profissão",
    "Reflexos",
    "Religião",
    "Sobrevivência",
    "Tática",
    "Tecnologia",
    "Vontade"
  ];

const perks1 = perks.slice(0, 10);
const perks2 = perks.slice(10, 20);
const perks3 = perks.slice(20);

function Perks({characterInfo, handleShowTab, updateCharacterInfo}) {

    const [characterPv, setCharacterPv] = useState(null)
    const [characterPe, setCharacterPe] = useState(null)
    const [characterSanity, setCharacterSanity] = useState(null)
    
    const [decideCharacterClass, setDecideCharacterClass] = useState(characterInfo.characterClass)
    const [decideCharacterOrigin, setDecideCharacterOrigin] = useState(characterInfo.characterOrigin)
    const [class1, setClass1] = useState(null)
    const [class2, setClass2] = useState(null)
    const [inactiveClass1, setInactiveClass1] = useState(null)
    const [inactiveClass2, setInactiveClass2] = useState(null)
    const [origin1, setOrigin1] = useState(null)
    const [origin2, setOrigin2] = useState(null)
    const preActiveList = [class1, class2, origin1, origin2]
    const [spare, setSpare] = useState(null)
    var [activePerks, setActivePerks] = useState([])
    var [completePerksList, setCompletePerksList] = useState([])
    const [perkBonus, setPerkBonus] = useState({
        "Acrobacia": 0,
        "Adestramento": 0,
        "Artes": 0,
        "Atletismo": 0,
        "Atualidades": 0,
        "Ciências": 0,
        "Crime": 0,
        "Diplomacia": 0,
        "Enganação": 0,
        "Fortitude": 0,
        "Furtividade": 0,
        "Iniciativa": 0,
        "Intimidação": 0,
        "Intuição": 0,
        "Investigação": 0,
        "Luta": 0,
        "Medicina": 0,
        "Ocultismo": 0,
        "Percepção": 0,
        "Pilotagem": 0,
        "Pontaria": 0,
        "Profissão": 0,
        "Reflexos": 0,
        "Religião": 0,
        "Sobrevivência": 0,
        "Tática": 0,
        "Tecnologia": 0,
        "Vontade": 0
      })

    useEffect(() => {
        chooseOriginStyle();
        chooseClassStyle();
        console.log("origin1:", origin1, "origin2:", origin2, "class1:", class1,"class2:", class2)
        setInitialSpare();
    }, []);

    useEffect (() => {
        if (decideCharacterClass === "Combatente") 
        {setCompletePerksList([origin1, origin2, class1, class2, ...activePerks])} 
    }, [inactiveClass1, inactiveClass2])

    useEffect (() => {
        setInitialActivePerks()
    }, [spare])

    useEffect (() => {
        updateFinalInfo()
    }, [spare])

    function updateFinalInfo() {
        if (characterInfo.characterClass === "Combatente")
        {
          setCharacterPv(20 + characterInfo.characterVigour);
          setCharacterPe(2 + characterInfo.characterPresence);
          setCharacterSanity(12);
        }
        else if (characterInfo.characterClass === "Especialista")
        {
          setCharacterPv(16 + characterInfo.characterVigour);
          setCharacterPe(3 + characterInfo.characterPresence);
          setCharacterSanity(16);
        }
        else
        {
          setCharacterPv(12 + characterInfo.characterVigour);
          setCharacterPe(4 + characterInfo.characterPresence);
          setCharacterSanity(20);
        }
      }

    function setInitialSpare() {
        if (decideCharacterClass === "Combatente")
        {
            setSpare(characterInfo.characterIntelect + 1)
        }

        else if (decideCharacterClass === "Especialista")
        {
            setSpare(characterInfo.characterIntelect + 7)
        }

        else if (decideCharacterClass === "Ocultista")
        {
            setSpare(characterInfo.characterIntelect + 3)
        }
    }

    function chooseClassStyle() {
        if (decideCharacterClass === "Combatente")
        {
            setClass1("Luta")
            setClass2("Fortitude")
            setInactiveClass1("Pontaria")
            setInactiveClass2("Reflexos")
        }
        
        else if (decideCharacterClass === "Ocultista")
        {
            setClass1("Ocultismo")
            setClass2("Vontade")
        }
    }


    function chooseOriginStyle() {
        if (decideCharacterOrigin === "Acadêmico")
        {
            setOrigin1("Ciências");
            setOrigin2("Investigação");
        }
        else if (decideCharacterOrigin === "Agente de saúde")
        {
            setOrigin1("Intuição");
            setOrigin2("Medicina");
        }
        else if (decideCharacterOrigin === "Artista")
        {
            setOrigin1("Artes");
            setOrigin2("Enganação");
        }
        else if (decideCharacterOrigin === "Atleta")
        {
            setOrigin1("Acrobacia");
            setOrigin2("Atletismo");
        }
        else if (decideCharacterOrigin === "Chef")
        {
            setOrigin1("Fortitude");
            setOrigin2("Profissão");
        }
        else if (decideCharacterOrigin === "Criminoso")
        {
            setOrigin1("Crime");
            setOrigin2("Furtividade");
        }
        else if (decideCharacterOrigin === "Cultista Arrependido")
        {
            setOrigin1("Ocultismo");
            setOrigin2("Religião");
        }
        else if (decideCharacterOrigin === "Desgarrado")
        {
            setOrigin1("Fotitude");
            setOrigin2("Sobrevicência");
        }
        else if (decideCharacterOrigin === "Engenheiro")
        {
            setOrigin1("Profissão");
            setOrigin2("Tecnologia");
        }
        else if (decideCharacterOrigin === "Executivo")
        {
            setOrigin1("Diplomacia");
            setOrigin2("Profissão");
        }
        else if (decideCharacterOrigin === "Investigador")
        {
            setOrigin1("Investigação");
            setOrigin2("Percepção");
        }
        else if (decideCharacterOrigin === "Lutador")
        {
            setOrigin1("Luta");
            setOrigin2("Reflexos");
        }
        else if (decideCharacterOrigin === "Magnata")
        {
            setOrigin1("Diplomacia");
            setOrigin2("Pilotagem");
        }
        else if (decideCharacterOrigin === "Mercenário")
        {
            setOrigin1("Iniciativa");
            setOrigin2("Intimidação");
        }
        else if (decideCharacterOrigin === "Militar")
        {
            setOrigin1("Pontaria");
            setOrigin2("Tática");
        }
        else if (decideCharacterOrigin === "Operário")
        {
            setOrigin1("Fortitude");
            setOrigin2("Profissão");
        }
        else if (decideCharacterOrigin === "Policial")
        {
            setOrigin1("Percepção");
            setOrigin2("Pontaria");
        }
        else if (decideCharacterOrigin === "Religioso")
        {
            setOrigin1("Religião");
            setOrigin2("Vontade");
        }
        else if (decideCharacterOrigin === "Servidor Público")
        {
            setOrigin1("Intuição");
            setOrigin2("Vontade");
        }
        else if (decideCharacterOrigin === "Teórico da Conspiração")
        {
            setOrigin1("Investigação");
            setOrigin2("Ocultismo");
        }
        else if (decideCharacterOrigin === "T.I.")
        {
            setOrigin1("Investigação");
            setOrigin2("Tecnologia");
        }
        else if (decideCharacterOrigin === "Trabalhador Rural")
        {
            setOrigin1("Adestramento");
            setOrigin2("Sobrevivência");
        }
        else if (decideCharacterOrigin === "Trambiqueiro")
        {
            setOrigin1("Crime");
            setOrigin2("Enganação");
        }
        else if (decideCharacterOrigin === "Universitário")
        {
            setOrigin1("Atualidades");
            setOrigin2("Investigação");
        }
        else if (decideCharacterOrigin === "Vítima")
        {
            setOrigin1("Reflexos");
            setOrigin2("Vontade");
        }
    }

    function setInitialActivePerks() {
        if (decideCharacterClass === "Combatente" || decideCharacterClass === "Ocultista")
        {
            if ((origin1 === null) || (origin2 === null))
            {
                setCompletePerksList([class1, class2, ...activePerks])
                return
            }
            else if ((origin1 === class1) || (origin1 === class2))
            {
                setCompletePerksList([origin2, class1, class2, ...activePerks])
                return
            }
            else if ((origin2 === class1) || (origin2 === class2))
            {
                setCompletePerksList([origin1, class1, class2, ...activePerks])
                return
            }
            else
            {
                setCompletePerksList([origin1, origin2, class1, class2, ...activePerks])
                return
            }
        }
        else
        {
            console.log('é especialista')
            if ((origin1 === null) || (origin2 === null))
            {
                console.log('é especialista e amnesico')
                setCompletePerksList([...activePerks])
            }
            
            else
            {
                console.log('é especialista normal')
                setCompletePerksList([origin1, origin2, ...activePerks])
            }
        }
    }


    function getPerksStyle(perkName) {
        const isSelected = activePerks.includes(perkName);

        if (perkName === origin1 || perkName === origin2)
        {
            return optionsStyleOrigin
        }

        if (perkName === class1 || perkName === class2)
        {
            return activeClassStyle
        }

        if (perkName === inactiveClass1 || perkName === inactiveClass2)
        {
            return inactiveClassStyle
        }

        return isSelected ? activeSpareStyle : optionsStyle
    }

    function onClick (perk) {

        if (decideCharacterClass === "Combatente" && spare === 0)
        {
            if (perk === "Pontaria" && preActiveList.includes("Luta"))
            {
                setClass1("Pontaria")
                setInactiveClass1("Luta")
                getPerksStyle(perk)
                return
            }
    
            else if (perk === "Luta" && preActiveList.includes("Pontaria"))
            {
                setClass1("Luta")
                setInactiveClass1("Pontaria")
                getPerksStyle(perk)
                return
            }
    
            else if (perk === "Fortitude" && preActiveList.includes("Reflexos"))
            {
                setClass2("Fortitude")
                setInactiveClass2("Reflexos")
                getPerksStyle(perk)
                return
            }
            else if (perk === "Reflexos" && preActiveList.includes("Fortitude"))
            {
                setClass2("Reflexos")
                setInactiveClass2("Fortitude")
                getPerksStyle(perk)
                return
            }
        }

        if (activePerks.includes(perk))
        {
            setActivePerks(activePerks.filter(selectedPerk => selectedPerk !== perk));
            setCompletePerksList(completePerksList.filter(selectedPerk => selectedPerk !== perk));
            setSpare(spare + 1)
            getPerksStyle(perk)
            return
        }
        
        else
        {
            if ((spare > 0) && !preActiveList.includes(perk))
            {
                if (decideCharacterClass === "Combatente")
                {
                    if (perk === "Pontaria" && preActiveList.includes("Luta"))
                    {
                        setClass1("Pontaria")
                        setInactiveClass1("Luta")
                        getPerksStyle(perk)
                        return
                    }
            
                    else if (perk === "Luta" && preActiveList.includes("Pontaria"))
                    {
                        setClass1("Luta")
                        setInactiveClass1("Pontaria")
                        getPerksStyle(perk)
                        return
                    }
            
                    else if (perk === "Fortitude" && preActiveList.includes("Reflexos"))
                    {
                        setClass2("Fortitude")
                        setInactiveClass2("Reflexos")
                        getPerksStyle(perk)
                        return
                    }
                    else if (perk === "Reflexos" && preActiveList.includes("Fortitude"))
                    {
                        setClass2("Reflexos")
                        setInactiveClass2("Fortitude")
                        getPerksStyle(perk)
                        return
                    }

                    else
                    {
                        setActivePerks([...activePerks, perk])
                        setCompletePerksList([...completePerksList, perk])
                        getPerksStyle(perk)
                        setSpare(spare - 1)
                        return
                    }
                }

                else
                {
                    setActivePerks([...activePerks, perk])
                    setCompletePerksList([...completePerksList, perk])
                    getPerksStyle(perk)
                    setSpare(spare - 1)
                    return
                }
            }
            return
        }
    }

    const navigate = useNavigate()

    const finalPerkBonus = () => {
        const finalPerks = {...perkBonus}

        for (const i in completePerksList)
        {
            if (finalPerks.hasOwnProperty(completePerksList[i]))
            {
                finalPerks[completePerksList[i]] += 5;
            }
        }
        setPerkBonus(finalPerks)
        return finalPerks
    };

    function handleEndButtonClick() {
        handleShowTab('sheet');
        navigate('/sheet');
        window.scrollTo(0, 0);
        updateCharacterInfo({characterPerks: finalPerkBonus(), characterPv: characterPv, characterPe: characterPe, characterSanity: characterSanity});
    }

    return (
        <div style={{gap:'20px', display:'flex', padding:'40px 200px', flexDirection:'column', alignItems:'center'}}>
            <div style={{display:'flex', width:'100%', justifyContent:'center'}}>
                <img src={require("../Images/texto5.png")} alt="Header 4"></img> 
            </div>
            <div style={{display:'flex', width:'100%', gap:'20px'}}>
                <div style={{display:'flex', width:'100%', gap:'20px', flexDirection:'column'}}>
                    <div style={{display:"flex", flexDirection:"column", gap:"15px"}}>
                        <text className='cameo' style={{color:"#B22729", fontSize:"23px", alignSelf:'center'}}>&nbsp;Atributo base&nbsp;</text>
                        <text style={insideText}>O atributo normalmente usado com a perícia. Por exemplo, Ciências envolve raciocínio e estudo, por isso seu atributo-base é Intelecto. Já Diplomacia envolve lábia e capacidade de argumentação, por isso seu atributo-base é Presença. Quando faz um teste de perícia, você rola uma quantidade de d20 igual ao seu valor no atributo-base dela e escolhe o resultado mais alto. Por exemplo, se faz um teste de Ciências e possui Intelecto 4, rola 4d20 e escolhe o melhor.</text>
                    </div>
                    <div style={{display:"flex", flexDirection:"column", gap:"15px"}}>
                        <text className='cameo' style={{color:"#B22729", fontSize:"23px", alignSelf:'center'}}>&nbsp;Testes e Treinamento&nbsp;</text>
                        <text style={insideText}>Algumas perícias só podem ser usadas se você é treinado nelas. Por exemplo, se você não é treinado em Pilotagem, não tem o conhecimento necessário para conduzir um veículo, independente de seu valor de Agilidade. Quando a palavra “treinada” aparece após o nome da perícia, você só poderá usá-la se for treinado nela.</text>
                        <text style={insideText}>Além disso, algumas perícias possuem usos específicos que exigem um grau de treinamento (que pode ser treinado, veterano ou expert).</text>
                    </div>
                    <div style={{display:"flex", flexDirection:"column", gap:"15px"}}>
                        <text className='cameo' style={{color:"#B22729", fontSize:"23px", alignSelf:'center'}}>&nbsp;Penalidade de Carga&nbsp;</text>
                        <text style={insideText}>Algumas perícias exigem liberdade de movimento. Quando a palavra “carga” aparece após o nome da perícia, você aplica sua penalidade de carga total ao teste da perícia.</text>
                    </div>
                    <div style={{display:"flex", flexDirection:"column", gap:"15px"}}>
                        <text className='cameo' style={{color:"#B22729", fontSize:"23px", alignSelf:'center'}}>&nbsp;Kit de Perícia&nbsp;</text>
                        <text style={insideText}>Algumas perícias ou usos de perícias exigem ferramentas, chamadas “kits de perícias”. Se isso for necessário, será mencionado na descrição da perícia. Se você não possui o kit apropriado, ainda pode usar a perícia, mas sofre –5 no teste.</text>
                    </div>
                </div>
                <PerksTable />
            </div>
            <div style={{display:'flex', width:'100%', justifyContent:'center'}}>
                <img src={require("../Images/perksSub.png")} alt="Header 4"></img> 
            </div>
            <div style={{display:'flex', width:'100%', gap:'20px'}}>
                <div style={{display:'flex', flexDirection:'row', gap:'20px'}}>
                    <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                        {perks1.map((perk) => <div onClick={() => onClick(perk)} style={getPerksStyle(perk)}>{perk}</div>)}
                    </div>
                    <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                        {perks2.map((perk) => <div onClick={() => onClick(perk)} style={getPerksStyle(perk)}>{perk}</div>)}
                    </div>
                    <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                        {perks3.map((perk) => <div onClick={() => onClick(perk)} style={getPerksStyle(perk)}>{perk}</div>)}
                    </div>
                </div>
                <div style={{display:'flex', width:'380px', border:'1px solid white', backgroundColor:'#020202', borderRadius:'10px', flexDirection:'column', alignItems:'center', justifyContent:'space-between', padding:'10px 0px'}}>
                    <div style={completePerksListStyle}>
                        {completePerksList.map((perk) => <div style={getPerksStyle(perk)}>{perk}</div>)}
                    </div>
                    <div style={availableStyle}>
                        <text>Disponíveis</text>
                        <input style={availableStyleInput} value={spare} readOnly></input>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={handleEndButtonClick} disabled={(spare === 0) ? false : true} style={(spare === 0) ? enabledButton : disabledButton}>Finalizar</button>
            </div>
        </div>
        
    )
}

const insideText = {color:"white", fontSize:"15px", textAlign:"justify"}
const optionsStyleOrigin = {display:"flex", backgroundColor:"#ed6e18", border:"1px solid white", width:"200px", height:"40px", borderRadius:"8px", alignItems:"center", padding:"0px 8px", fontSize:"20px", color:"white", flexDirection:"row", justifyContent:'center'}
const optionsStyle = {cursor:"pointer", display:"flex", backgroundColor:"#020202", border:"1px solid white", width:"200px", height:"40px", borderRadius:"8px", alignItems:"center", padding:"0px 8px", fontSize:"20px", color:"white", flexDirection:"row", justifyContent:'center'}
const activeClassStyle = {PointerEvent:'none', display:"flex", backgroundColor:"#ba292d", border:"1px solid white", width:"200px", height:"40px", borderRadius:"8px", alignItems:"center", padding:"0px 8px", fontSize:"20px", color:"white", flexDirection:"row", justifyContent:'center'}
const inactiveClassStyle = {cursor:"pointer", display:"flex", backgroundColor:"#250809", border:"1px solid white", width:"200px", height:"40px", borderRadius:"8px", alignItems:"center", padding:"0px 8px", fontSize:"20px", color:"#fff", flexDirection:"row", justifyContent:'center', opacity:'20%'}
const availableStyle = {alignItems:'center', gap:'10px', display:"flex" , fontSize:"20px", color:"white", flexDirection:"row"}
const availableStyleInput = {textAlign:'center', display:"flex", backgroundColor:"#171819", border:"1px solid white", width:"30px", height:"25px", borderRadius:"8px", fontSize:"20px", color:"white"}
const activeSpareStyle = {cursor:'pointer', display:"flex", backgroundColor:"#7dc441", border:"1px solid white", width:"200px", height:"40px", borderRadius:"8px", alignItems:"center", padding:"0px 8px", fontSize:"20px", color:"white", flexDirection:"row", justifyContent:'center'}
const completePerksListStyle = {display:'flex', flexDirection:'column', gap:'10px'}
const disabledButton = {backgroundColor:"#020202", lineHeight:"20px", borderRadius:"5px", fontSize:"16px", border:"1px solid white", width:"200px", height:"70px", color:'white', opacity:'20%'}
const enabledButton = {cursor:'pointer', backgroundColor:"#020202", lineHeight:"20px", borderRadius:"5px", fontSize:"16px", border:"1px solid white", width:"200px", height:"70px", color:'white'}
export default Perks