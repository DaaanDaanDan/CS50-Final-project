import "./SpecialistPopup.css"
import SpecialistTable from "./SpecialistTable.jsx"

function SpecialistPopup(props) {

    return (props.trigger) ? (
        <div className="specialist-class-popup" onClick={() => props.setTrigger(false)}>
            <div onClick={(event) => event.stopPropagation()} className="specialist-class-popup-inner" style={{gap:'20px', border:'2px solid white', display:'flex', padding:'40px 200px', flexDirection:'column', alignItems:'center'}}>
                <div style={{display:'flex', width:'100%', display:'flex', flexDirection:'column', gap:'10px'}}>
                    <div style={{display:'flex', width:'100%', justifyContent:'center'}}>
                        <text className='cameo' style={{fontSize:'40px', color:'#B22729'}}>&nbsp;Informação&nbsp;</text>
                    </div>
                    <text style={insideText}>Um agente que confia mais em esperteza do que em força bruta. Um especialista se vale de conhecimento técnico, raciocínio rápido ou mesmo lábia para resolver mistérios e enfrentar o paranormal.</text>                  
                    <text style={insideText}>Cientistas, inventores, pesquisadores e técnicos de vários tipos são exemplos de especialistas, que são tão variados quanto as áreas do conhecimento e da tecnologia. Alguns ainda preferem estudar engenharia social e se tornam excelentes espiões infiltrados, ou mesmo estudam técnicas especiais de combate como artes marciais e tiro a distância, aliando conhecimento técnico e habilidade. </text>                  
                    <text style={insideText}>O que une todos os especialistas é sua incrível capacidade de aprender e improvisar usando seu intelecto e conhecimento avançado, que pode tirar o grupo todo dos mais diversos tipos de enrascadas. </text>
                </div>
                <div style={{display:'flex', width:'100%', flexDirection:'row', gap:'10px', justifyContent:'space-evenly'}}>
                    <div style={{width:'360px', display:"flex", flexDirection:'column', gap:'10px'}}>
                        <div style={{display:'flex', justifyContent:'center', color:'white', fontSize:'22px'}}>
                            <text className='cameo' style={{color:'#B22729'}}>Habilidades de especialista</text>
                        </div>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Eclético.</span> Quando faz um teste de uma perícia, você pode gastar 2 PE para receber os benefícios de ser treinado nesta perícia. </text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Perito.</span> Escolha duas perícias nas quais você é treinado (exceto Luta e Pontaria). Quando faz um teste de uma dessas perícias, você pode gastar 2 PE para somar +1d6 no resultado do teste. Conforme avança de NEX, você pode gastar +1 PE para aumentar o dado de bônus. Por exemplo, em NEX 55%, pode gastar 4 PE para receber +1d10 no teste. </text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Habilidade de trilha.</span> Em NEX 10% você escolhe uma das trilhas de especialista disponíveis e recebe o primeiro poder da trilha escolhida. Você recebe um novo poder da trilha escolhida respectivamente em NEX 40%, 65% e 99%.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Aumento de atributo.</span> Em NEX 20%, e novamente em NEX 50%, 80% e 95%, aumente um atributo a sua escolha em +1. Você não pode aumentar um atributo além de 5 desta forma. </text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Grau de treinamento.</span> Em NEX 35%, e novamente em NEX 70%, escolha um número de perícias treinadas igual a 5 + Int. Seu grau de treinamento nessas perícias aumenta em um (de treinado para veterano ou de veterano para expert).</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Versatilidade.</span> Em NEX 50%, escolha entre receber um poder de combatente ou o primeiro poder de uma trilha de combatente que não a sua.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Engenhosidade.</span> Em NEX 40%, quando usa sua habilidade Eclético, você pode gastar 2 PE adicionais para receber os benefícios de ser veterano na perícia. Em NEX 75%, pode gastar 4 PE adicionais para receber os benefícios de ser expert na perícia.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Poder de especialista.</span> Em NEX 15%, você recebe um poder de especialista à sua escolha. Você recebe um novo poder de especialista em NEX 30% e a cada 15% de NEX subsequentes, conforme indicado na tabela. Veja a lista de poderes a seguir. </text>
                    </div>
                    <div>
                        <SpecialistTable />
                    </div>
                </div>
                <div>
                    <div style={{gap:'20px', display:'flex', flexDirection:'column'}} className="hide-scroll">
                        <div style={{display:'flex', justifyContent:'center', color:'white', fontSize:'23px'}}>
                            <text className='cameo' style={{color:'#B22729'}}>&nbsp;Poderes de especialista&nbsp;</text>
                        </div>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Artista Marcial.</span> Seus ataques desarmados causam 1d6 pontos de dano, podem causar dano letal e contam como armas ágeis. Em NEX 35%, o dano aumenta para 1d8 e, em NEX 70%, para 1d10.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Balística Avançada.</span> Você recebe proficiência com armas táticas de fogo e +2 em rolagens de dano com armas de fogo.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Conhecimento Aplicado</span> Quando faz um teste de perícia (exceto Luta e Pontaria), você pode gastar 2 PE para mudar o atributo-base da perícia para Int. Pré-requisito: Int 2.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Hacker.</span> Você recebe +5 em testes de Tecnologia para invadir sistemas e diminui o tempo necessário para hackear qualquer sistema para uma ação completa. Pré-requisito: treinado em Tecnologia. </text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Mãos Rápidas.</span> Ao fazer um teste de Crime, você pode pagar 1 PE para fazê-lo como uma ação livre. Pré-requisitos: Agi 3, treinado em Crime.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Mochila de Utilidades.</span> Um item a sua escolha (exceto armas) conta como uma categoria abaixo e ocupa 1 espaço a menos. </text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Movimento Tático.</span> Você pode gastar 1 PE para ignorar a penalidade em deslocamento por terreno difícil e por escalar até o final do turno. Pré-requisito: treinado em Atletismo.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Na Trilha Certa.</span> Sempre que tiver sucesso em um teste para procurar pistas, você pode gastar 1 PE para receber +1d20 no próximo teste. Os custos e os bônus são cumulativos (se passar num segundo teste, pode pagar 2 PE para receber um total de +2d20 no próximo teste, e assim por diante).</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Nerd.</span> Você é um repositório de conhecimento útil (e inútil). Uma vez por cena, pode gastar 2 PE para fazer um teste de Atualidades (DT 20). Se passar, recebe uma informação útil para essa cena (se for uma investigação, uma dica para uma pista; se for um combate, uma fraqueza de um inimigo, e assim por diante). A fonte da informação pode ser desde um livro antigo que você leu na biblioteca até um episódio de sua série de ficção favorita.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Ninja Urbano.</span> Você recebe proficiência com armas táticas de ataque corpo a corpo e de disparo (exceto de fogo) e +2 em rolagens de dano com armas de corpo a corpo e de disparo.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Pensamento Ágil.</span> Uma vez por rodada, durante uma cena de investigação, você pode gastar 2 PE para fazer uma ação de procurar pistas adicional.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Perito em Explosivos.</span> Você soma seu Intelecto na DT para resistir aos seus explosivos e pode excluir dos efeitos da explosão um número de alvos igual ao seu valor de Intelecto. </text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Primeira Impressão.</span> Você recebe +2d20 no primeiro teste de Diplomacia, Enganação, Intimidação ou Intuição que fizer em uma cena.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Transcender.</span> Escolha um poder paranormal. Você recebe o poder escolhido, mas não ganha Sanidade neste aumento de NEX. Você pode escolher este poder várias vezes.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Treinamento em perícia.</span> Escolha duas perícias. Você se torna treinado nessas perícias. A partir de NEX 35%, você pode escolher perícias nas quais já é treinado para se tornar veterano. A partir de NEX 70%, pode escolher perícias nas quais já é veterano para se tornar expert. Você pode escolher este poder várias vezes.</text>
                    </div>
                </div>
                <button style={buttonStyle} onClick={() => props.setTrigger(false)}>Fechar</button>
            </div>
        </div>
    ) : "";
}

const insideText = {color:"white", fontSize:"18px", textAlign:"justify"}
const insideTitleText = {color:"#B22729", fontSize:"18px", textAlign:"justify"}
const buttonStyle = {cursor:'pointer', backgroundColor:"#020202", borderRadius:"5px", fontSize:"16px", border:"1px solid white", width:"300px", height:'200px', color:'white'}

export default SpecialistPopup