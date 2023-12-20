import "./CombatentPopup.css"

function CombatentTable() {
  return (
    <div>
        <div style={{gap:'20px', flexDirection:'column', display:'flex', alignItems:'center', backgroundColor:"#020202", width:'330px'}}>
            <div style={{width:'260px', display:'flex', fontSize:"23px", color:"white", flexDirection:'column', alignItems:'center'}}>
                <a>CARACTERÍSTICAS</a>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'320px'}}>
                <div style={{display:'flex', borderBottom:"2px solid white", fontSize:'16px', color:"white", flexDirection:'row', justifyContent:'space-between'}}>
                    <text>PONTOS DE VIDA INICIAIS</text>
                    <text>20+VIGOR</text>
                </div>
                <div style={{display:'flex', fontSize:'16px', color:"white", flexDirection:'row', justifyContent:'space-between'}}>
                    <text style={{fontSize:'16px'}}>A cada nível de exposição</text>
                    <text>4 PV (+Vig)</text>
                </div>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'320px'}}>
                <div style={{display:'flex', borderBottom:"2px solid white", fontSize:'16px', color:"white", flexDirection:'row', justifyContent:'space-between'}}>
                    <text>PE INICIAIS</text>
                    <text>2+PRESENÇA</text>
                </div>
                <div style={{display:'flex', fontSize:'16px', color:"white", flexDirection:'row', justifyContent:'space-between'}}>
                    <text style={{fontSize:'16px'}}>A cada nível de exposição</text>
                    <text>2 PE (+Pre)</text>
                </div>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'320px'}}>
                <div style={{display:'flex', borderBottom:"2px solid white", fontSize:'16px', color:"white", flexDirection:'row', justifyContent:'space-between'}}>
                    <text>SANIDADE INICIAL</text>
                    <text>12</text>
                </div>
                <div style={{display:'flex', fontSize:'16px', color:"white", flexDirection:'row', justifyContent:'space-between'}}>
                    <text style={{fontSize:'16px'}}>A cada nível de exposição</text>
                    <text>3 San</text>
                </div>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'320px'}}>
                <div style={{display:'flex', borderBottom:"2px solid white", fontSize:'16px', color:"white", flexDirection:'row', justifyContent:'space-between'}}>
                    <text>PERÍCIAS INICIAIS</text>
                </div>
                <div style={{textAlign:'justify', display:'flex', fontSize:'16px', color:"white", flexDirection:'row', justifyContent:'space-between'}}>
                    <text style={{fontSize:'16px'}}>Luta ou Pontaria (uma das duas) e Fortitude ou Reflexos (uma das duas), mais uma quantidade de perícias à sua escolha igual a 1 + Intelecto.</text>
                </div>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'320px'}}>
                <div style={{display:'flex', borderBottom:"2px solid white", fontSize:'16px', color:"white", flexDirection:'row', justifyContent:'space-between'}}>
                    <text>PROFICIÊNCIAS</text>
                </div>
                <div style={{textAlign:'justify', display:'flex', fontSize:'16px', color:"white", flexDirection:'row', justifyContent:'space-between'}}>
                    <text style={{fontSize:'16px'}}>Armas simples, armas táticas e proteções leves.</text>
                </div>
            </div>
            <div>
                <table className='combatent' style={{borderSpacing:"0px", color:"white", width:"320px", textAlign:"center"}}>
                    <tr>
                        <th style={{paddingLeft:"10px"}}>NEX</th>
                        <th>Habilidades</th>
                    </tr>
                    <tr>
                        <td>5%</td>
                        <td>Ataque especial (2 PE, +5)</td>
                    </tr>
                    <tr>
                        <td>10%</td>
                        <td>Habilidade de trilha</td>
                    </tr>
                    <tr>
                        <td>15%</td>
                        <td>Poder de combatente</td>
                    </tr>
                    <tr>
                        <td>20%</td>
                        <td>Aumento de atributo</td>
                    </tr>
                    <tr>
                        <td>25%</td>
                        <td>Ataque especial (3 PE, +10)</td>
                    </tr>
                    <tr>
                        <td>30%</td>
                        <td>Poder de combatente</td>
                    </tr>
                    <tr>
                        <td>35%</td>
                        <td>Grau de treinamento</td>
                    </tr>
                    <tr>
                        <td>40%</td>
                        <td>Habilidade de trilha</td>
                    </tr>
                    <tr>
                        <td>45%</td>
                        <td>Poder de combatente</td>
                    </tr>
                    <tr>
                        <td>50%</td>
                        <td>Aumento de atributo, versatilidade</td>
                    </tr>
                    <tr>
                        <td>55%</td>
                        <td>Ataque especial (4 PE, +15)</td>
                    </tr>
                    <tr>
                        <td>60%</td>
                        <td>Poder de combatente</td>
                    </tr>
                    <tr>
                        <td>65%</td>
                        <td>Habilidade de trilha</td>
                    </tr>
                    <tr>
                        <td>70%</td>
                        <td>Grau de treinamento</td>
                    </tr>
                    <tr>
                        <td>75%</td>
                        <td>Poder de combatente</td>
                    </tr>
                    <tr>
                        <td>80%</td>
                        <td>Aumento de atributo</td>
                    </tr>
                    <tr>
                        <td>85%</td>
                        <td>Ataque especial (5 PE, +20)</td>
                    </tr>
                    <tr>
                        <td>90%</td>
                        <td>Poder de combatente</td>
                    </tr>
                    <tr>
                        <td>95%</td>
                        <td>Aumento de atributo</td>
                    </tr>
                    <tr>
                        <td>99%</td>
                        <td>Habilidade de trilha</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
  );
}

export default CombatentTable;


