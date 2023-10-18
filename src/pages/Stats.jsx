import { useState } from "react";
import SparePoints from "../components/SparePoints";
import StatWord from "../components/StatWord";
import Limit3 from "../components/Limit3";
import Limit0 from "../components/Limit0";
import LimitSpare from "../components/LimitSpare";
import ConfirmButton from "../components/ConfirmButton";

function Stats() {


    function alterStat(stat, setStat, value){
        if (spare - value < 0)
        {
            setSpareLimit(true)
            return
        }

        const newStat = stat + value
        if ((newStat >= 0 && newStat <= 3))
        {
            setStat(newStat);
            setSpare(spare - value);
            setSpareLimit(false)
        }
        setIsMax0(newStat < 0)
        setIsMax3(newStat > 3)
    }

    const [spareLimit, setSpareLimit] = useState(false)
    const [isMax0, setIsMax0] = useState(false)
    const [isMax3, setIsMax3] = useState(false)
    const [agi, setAgi] = useState(1)
    const [str, setStr] = useState(1)
    const [inte, setInte] = useState(1)
    const [pre, setPre] = useState(1)
    const [vig, setVig] = useState(1)
    const [spare, setSpare] = useState(4)

    return (
        <div style={{display:"flex", justifyContent:"start"}}>
            <div style={{display:"flex", flexDirection:"column", gap:"20px", textAlign:"right", fontSize:"40px", color:"grey", lineHeight:"1"}}>
                <StatWord val={agi} word={"Agility"}/>
                <StatWord val={str} word={"Strength"}/>
                <StatWord val={inte} word={"Intelect"}/>
                <StatWord val={pre} word={"Presence"}/>
                <div style={{marginBottom:"-20px"}}><StatWord val={vig} word={"Vigour"}/></div>
                <SparePoints val={spare}/>
                <ConfirmButton />
            </div>
            <div style={{display:"flex", flexDirection:"column", marginLeft:"2px", gap:"48px"}}>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <button onClick={() => alterStat(agi, setAgi, 1)} style={{marginTop:"15px", cursor:"pointer"}} className="arrow up"></button>
                    <button onClick={() => alterStat(agi, setAgi, -1)} style={{cursor:"pointer"}} className="arrow down"></button>
                </div>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <button onClick={() => alterStat(str, setStr, 1)} style={{cursor:"pointer"}} className="arrow up"></button>
                    <button onClick={() => alterStat(str, setStr, -1)} style={{cursor:"pointer"}} className="arrow down"></button>
                </div>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <button onClick={() => alterStat(inte, setInte, 1)} style={{cursor:"pointer"}} className="arrow up"></button>
                    <button onClick={() => alterStat(inte, setInte, -1)} style={{cursor:"pointer"}} className="arrow down"></button>
                </div>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <button onClick={() => alterStat(pre, setPre, 1)} style={{cursor:"pointer"}} className="arrow up"></button>
                    <button onClick={() => alterStat(pre, setPre, -1)} style={{cursor:"pointer"}} className="arrow down"></button>
                </div>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <button onClick={() => alterStat(vig, setVig, 1)} style={{cursor:"pointer"}} className="arrow up"></button>
                    <button onClick={() => alterStat(vig, setVig, -1)} style={{cursor:"pointer"}} className="arrow down"></button>
                </div>
            </div>
            {isMax3 && <Limit3 />}
            {isMax0 && <Limit0 />}
            {spareLimit && <LimitSpare />}
        </div>
    )
}

export default Stats