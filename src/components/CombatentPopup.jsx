import "./CombatentPopup.css"
import CombatentTable from "./CombatentTable";
function CombatentPopup(props) {

    return (props.trigger) ? (
        <div className="combatent-class-popup" onClick={() => props.setTrigger(false)}>
            <div onClick={(event) => event.stopPropagation()} className="combatent-class-popup-inner" style={{gap:'20px', border:'2px solid white', display:'flex', padding:'40px 200px', flexDirection:'column', alignItems:'center'}}>
                <div style={{display:'flex', width:'100%', display:'flex', flexDirection:'column', gap:'10px'}}>
                    <div style={{display:'flex', width:'100%', justifyContent:'center'}}>
                        <text className='cameo' style={{fontSize:'40px', color:'#B22729'}}>&nbsp;Informação&nbsp;</text>
                    </div>
                    <text style={insideText}>Treinado para lutar com todo tipo de armas, e com a força e a coragem para encarar os perigos de frente. É o tipo de agente que prefere abordagens mais diretas e costuma atirar primeiro e perguntar depois.</text>                  
                    <text style={insideText}>Do mercenário especialista em armas de fogo até o perito em espadas, combatentes apresentam uma gama enorme de habilidades e técnicas especiais que aprimoram sua eficiência no campo de batalha, tornando-os membros essenciais em qualquer missão de extermínio.</text>                  
                    <text style={insideText}>Além de treinar seu corpo, o combatente também é perito em liderar seus aliados em batalha e em cuidar de seu equipamento de combate, sempre preparado para assumir a linha de frente quando a coisa fica feia.</text>
                </div>
                <div style={{display:'flex', width:'100%', flexDirection:'row', gap:'10px', justifyContent:'space-evenly'}}>
                    <div style={{width:'360px', display:"flex", flexDirection:'column', gap:'10px'}}>
                        <div style={{display:'flex', justifyContent:'center', color:'white', fontSize:'23px'}}>
                            <text style={{fontSize:'22px', color:'#B22729'}} className='cameo'>&nbsp;Habilidades de combatente&nbsp;</text>
                        </div>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Ataque especial.</span> Quando faz um ataque, você pode gastar 2 PE para receber +5 no teste de ataque ou na rolagem de dano. Conforme avança de NEX, você pode gastar +1 PE para receber mais bônus de +5 (conforme tabela). Você pode aplicar cada bônus de +5 em ataque ou dano. Por exemplo, em NEX 55%, você pode gastar 4 PE para receber +5 no teste de ataque e +10 na rolagem de dano.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Habilidade de trilha.</span> Em NEX 10% você escolhe uma das trilhas de combatente e recebe o primeiro poder da trilha escolhida. Você recebe um novo poder da trilha escolhida em NEX 40%, 65% e 99%. Veja a descrição das trilhas nas páginas 26 e 27.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Aumento de atributo.</span> Em NEX 20%, e novamente em NEX 50%, 80% e 95%, aumente um atributo a sua escolha em +1. Você não pode aumentar um atributo além de 5 desta forma.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Grau de treinamento.</span> Em NEX 35%, e novamente em NEX 70%, escolha um número de perícias treinadas igual a 2 + Int. Seu grau de treinamento nessas perícias aumenta em um (de treinado para veterano ou de veterano para expert).</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Versatilidade.</span> Em NEX 50%, escolha entre receber um poder de combatente ou o primeiro poder de uma trilha de combatente que não a sua.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Poder de combatente.</span> Em NEX 15%, você recebe um poder de combatente à sua escolha. Você recebe um novo poder de combatente em NEX 30% e a cada 15% de NEX subsequentes, conforme indicado na tabela. Veja a lista de poderes a seguir.</text>
                    </div>
                    <div>
                        <CombatentTable />
                    </div>
                </div>
                <div>
                    <div style={{gap:'20px', display:'flex', flexDirection:'column'}} className="hide-scroll">
                        <div style={{display:'flex', justifyContent:'center', color:'white', fontSize:'23px'}}>
                            <text className='cameo' style={{color:'#B22729'}}>Poderes de combatente</text>
                        </div>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Armamento pesado.</span> Você recebe proficiência com armas pesadas. Pré-requisito: For 2.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Artista marcial.</span> Seus ataques desarmados causam 1d6 pontos de dano, podem causar dano letal e contam como armas ágeis. Em NEX 35%, o dano aumenta para 1d8 e, em NEX 70%, para 1d10.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Ataque de oportunidade.</span> Sempre que um ser sair voluntariamente de um espaço adjacente ao seu, você pode gastar uma reação e 1 PE para fazer um ataque corpo a corpo contra ele.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Combater com duas armas.</span> Se estiver empunhando duas armas (e pelo menos uma for leve) e fizer a ação agredir, você pode fazer dois ataques, um com cada arma. Se fizer isso, sofre –1d20 em todos os testes de ataque até o seu próximo turno. Pré-requisitos: Agi 3, treinado em Luta ou Pontaria.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Combate defensivo.</span> Quando usa a ação agredir, você pode combater defensivamente. Se fizer isso, até seu próximo turno, sofre –1d20 em todos os testes de ataque, mas recebe +5 na Defesa. Pré-requisito: Int 2.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Golpe demolidor.</span> Quando usa a manobra quebrar ou ataca um objeto, você pode gastar 1 PE para causar dois dados de dano extra do mesmo tipo de sua arma. Pré-requisitos: For 2, treinado em Luta.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Golpe pesado.</span> O dano de suas armas corpo a corpo aumenta em mais um dado do mesmo tipo.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Incansável.</span> Uma vez por cena, você pode gastar 2 PE para fazer uma ação de investigação adicional, mas deve usar Força ou Agilidade como atributo-base do teste.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Presteza atlética.</span> Quando faz um teste de facilitar a investigação, você pode gastar 1 PE para usar Força ou Agilidade no lugar do atributo-base da perícia. Se passar no teste, o próximo aliado que usar seu bônus também recebe +1d20 no teste.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Proteção pesada.</span> Você recebe proficiência com Proteções Pesadas. Pré-requisito: NEX 30%.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Reflexos defensivos.</span> Você recebe +2 em Defesa e em testes de resistência. Pré-requisitos: Agi 2.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Saque rápido.</span> Você pode sacar ou guardar itens como uma ação livre (em vez de ação de movimento). Além disso, caso esteja usando a regra opcional de contagem de munição, uma vez por rodada pode recarregar uma arma de disparo como uma ação livre. Pré-requisito: treinado em Iniciativa.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Segurar o gatilho.</span> Sempre que acerta um ataque com uma arma de fogo, pode fazer outro ataque com a mesma arma contra o mesmo alvo, pagando 2 PE por cada ataque já realizado no turno. Ou seja, pode fazer o primeiro ataque extra gastando 2 PE e, se acertar, pode fazer um segundo ataque extra gastando mais 4 PE e assim por diante, até errar um ataque ou atingir o limite de seus PE por rodada. Pré-requisito: NEX 60%.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Sentido tático.</span> Você pode gastar uma ação de movimento e 2 PE para analisar o ambiente. Se fizer isso, recebe um bônus em Defesa e em testes de resistência igual ao seu Intelecto até o final da cena. Pré-requisitos: Int 2, treinado em Percepção e Tática.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Tanque de guerra.</span> Se estiver usando uma proteção pesada, a Defesa e a resistência a dano que ela fornece aumentam em +2. Pré-requisito: Proteção Pesada.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Tiro certeiro.</span> Se estiver usando uma arma de disparo, você soma sua Agilidade nas rolagens de dano e ignora a penalidade contra alvos envolvidos em combate corpo a corpo (mesmo se não usar a ação mirar). Pré-requisito: treinado em Pontaria.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Tiro de cobertura.</span> Você pode gastar uma ação padrão e 1 PE para disparar uma arma de fogo na direção de um personagem no alcance da arma para forçá-lo a se proteger. Faça um teste de Pontaria contra a Vontade do alvo. Se vencer, até o início do seu próximo turno o alvo não pode sair do lugar onde está e sofre –5 em testes de ataque. A critério do mestre, o alvo recebe +5 no teste de Vontade se estiver em um lugar extremamente perigoso, como uma casa em chamas ou um barco afundando. Este é um efeito de medo.</text>
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

export default CombatentPopup