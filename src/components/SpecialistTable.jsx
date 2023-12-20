import "./SpecialistPopup.css"

function SpecialistTable() {
  return (
    <div>
        <div style={{gap:'20px', flexDirection:'column', display:'flex', alignItems:'center', backgroundColor:"#020202", width:'330px'}}>
            <div style={{width:'260px', display:'flex', fontSize:"23px", color:"white", flexDirection:'column', alignItems:'center'}}>
                <a>CARACTERÍSTICAS</a>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'320px'}}>
                <div style={{display:'flex', borderBottom:"2px solid white", fontSize:"16px", color:"white", flexDirection:'row', justifyContent:'space-between'}}>
                    <text>PONTOS DE VIDA INICIAS</text>
                    <text>16+VIGOR</text>
                </div>
                <div style={{display:'flex', fontSize:"16px", color:"white", flexDirection:'row', justifyContent:'space-between'}}>
                    <text style={{fontSize:'16px'}}>A cada novo nível de exposição</text>
                    <text>3 PV (+Vig)</text>
                </div>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'320px'}}>
                <div style={{display:'flex', borderBottom:"2px solid white", fontSize:"16px", color:"white", flexDirection:'row', justifyContent:'space-between'}}>
                    <text>PE INICIAIS</text>
                    <text>3+PRESENÇA</text>
                </div>
                <div style={{display:'flex', fontSize:"16px", color:"white", flexDirection:'row', justifyContent:'space-between'}}>
                    <text style={{fontSize:'16px'}}>A cada novo nível de exposição</text>
                    <text>3 PE (+Pre)</text>
                </div>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'320px'}}>
                <div style={{display:'flex', borderBottom:"2px solid white", fontSize:"16px", color:"white", flexDirection:'row', justifyContent:'space-between'}}>
                    <text>SANIDADE INICIAL</text>
                    <text>16</text>
                </div>
                <div style={{display:'flex', fontSize:"16px", color:"white", flexDirection:'row', justifyContent:'space-between'}}>
                    <text style={{fontSize:'16px'}}>A cada novo nível de exposição</text>
                    <text>4 San</text>
                </div>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'320px'}}>
                <div style={{display:'flex', borderBottom:"2px solid white", fontSize:"16px", color:"white", flexDirection:'row', justifyContent:'space-between'}}>
                    <text>PERÍCIAS TREINADAS</text>
                </div>
                <div style={{textAlign:'justify', display:'flex', fontSize:"16px", color:"white", flexDirection:'row', justifyContent:'space-between'}}>
                    <text style={{fontSize:'16px'}}>Uma quantidade de perícias à sua escolha igual a 7 + Intelecto.</text>
                </div>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'320px'}}>
                <div style={{display:'flex', borderBottom:"2px solid white", fontSize:"16px", color:"white", flexDirection:'row', justifyContent:'space-between'}}>
                    <text>PROFICIÊNCIAS</text>
                </div>
                <div style={{textAlign:'justify', display:'flex', fontSize:"16px", color:"white", flexDirection:'row', justifyContent:'space-between'}}>
                    <text style={{fontSize:'16px'}}>Armas simples e proteções leves.</text>
                </div>
            </div>
            <div>
                <table className='specialist' style={{borderSpacing:"0px", color:"white", width:"320px", textAlign:"center"}}>
                    <tr>
                        <th style={{paddingLeft:"10px"}}>PEL</th>
                        <th>Habilidades</th>
                    </tr>
                    <tr>
                        <td>5%</td>
                        <td>Eclético, perito (2 PE, +1d6)</td>
                    </tr>
                    <tr>
                        <td>10%</td>
                        <td>Habilidade de trilha</td>
                    </tr>
                    <tr>
                        <td>15%</td>
                        <td>Poder de especialista</td>
                    </tr>
                    <tr>
                        <td>20%</td>
                        <td>Aumento de atributo</td>
                    </tr>
                    <tr>
                        <td>25%</td>
                        <td>Perito (3 PE, +1d8)</td>
                    </tr>
                    <tr>
                        <td>30%</td>
                        <td>Poder de especialista</td>
                    </tr>
                    <tr>
                        <td>35%</td>
                        <td>Grau de treinamento</td>
                    </tr>
                    <tr>
                        <td>40%</td>
                        <td>Engenhosidade (veterano), habilidade de trilha</td>
                    </tr>
                    <tr>
                        <td>45%</td>
                        <td>Poder de especialista</td>
                    </tr>
                    <tr>
                        <td>50%</td>
                        <td>Aumento de atributo, versatilidade</td>
                    </tr>
                    <tr>
                        <td>55%</td>
                        <td>Perito (4 PE, +1d10)</td>
                    </tr>
                    <tr>
                        <td>60%</td>
                        <td>Poder de especialista</td>
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
                        <td>Engenhosidade (expert), poder de especialista</td>
                    </tr>
                    <tr>
                        <td>80%</td>
                        <td>Aumento de atributo</td>
                    </tr>
                    <tr>
                        <td>85%</td>
                        <td>Perito (5 PE, +1d12)</td>
                    </tr>
                    <tr>
                        <td>90%</td>
                        <td>Poder de especialista</td>
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

export default SpecialistTable;


