import "./OcultistPopup.css"
import OcultistTable from "./OcultistTable.jsx"

function OcultistPopup(props) {

    return (props.trigger) ? (
        <div className="Ocultist-class-popup" onClick={() => props.setTrigger(false)}>
            <div onClick={(event) => event.stopPropagation()} className="Ocultist-class-popup-inner" style={{gap:'20px', border:'2px solid white', display:'flex', padding:'40px 200px', flexDirection:'column', alignItems:'center'}}>
                <div style={{display:'flex', width:'100%', display:'flex', flexDirection:'column', gap:'10px'}}>
                    <div style={{display:'flex', width:'100%', justifyContent:'center'}}>
                        <text className='cameo' style={{fontSize:'40px', color:'#B22729'}}>&nbsp;Informação&nbsp;</text>
                    </div>
                    <text style={insideText}>O Outro Lado é misterioso, perigoso e, de certa forma, cativante. Muitos estudiosos das entidades se perdem em seus reinos obscuros em busca de poder, mas existem aqueles que visam compreender e dominar os mistérios paranormais para usá-los para combater o próprio Outro Lado. Esse tipo de agente não é apenas um conhecedor do oculto, como também possui talento para se conectar com elementos paranormais. </text>                  
                    <text style={insideText}>Ao contrário da crendice popular, ocultistas não são intrinsecamente malignos. Seria como dizer que o cientista que inventou a pólvora é culpado pelo assassino que disparou o revólver. Para a Ordem, o paranormal é uma força que pode ser usada para os mais diversos propósitos, de acordo com a intenção de seu usuário. </text>                  
                    <text style={insideText}>Ocultistas aplicam seu conhecimento acadêmico e suas capacidades de conjuração de rituais em missões para investigar e combater o paranormal em todas as suas formas, principalmente quando munição convencional não é o suficiente para lidar com a tarefa. </text>
                </div>
                <div style={{display:'flex', width:'100%', flexDirection:'row', gap:'10px', justifyContent:'space-evenly'}}>
                    <div style={{width:'360px', display:"flex", flexDirection:'column', gap:'10px'}}>
                        <div style={{display:'flex', justifyContent:'center', color:'white', fontSize:'23px'}}>
                            <text className='cameo' style={{color:'#B22729'}}>Habilidades de Ocultista</text>
                        </div>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Escolhido pelo Outro Lado.</span> Você teve uma experiência paranormal e foi marcado pelo Outro Lado, absorvendo o conhecimento e poder necessários para realizar rituais. Você pode lançar rituais de 1º círculo. À medida que aumenta seu NEX, pode lançar rituais de círculos maiores (2º círculo em NEX 25%, 3º círculo em NEX 55% e 4º círculo em NEX 85%). Você começa com três rituais de 1º círculo. Sempre que avança de NEX, aprende um ritual de qualquer círculo que possa lançar. Esses rituais não contam no seu limite de rituais conhecidos. Veja o Capítulo 5 para as regras de rituais. </text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Habilidade de trilha.</span> Em NEX 10% você escolhe uma das trilhas de especialista disponíveis e recebe o primeiro poder da trilha escolhida. Você recebe um novo poder da trilha escolhida respectivamente em NEX 40%, 65% e 99%.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Aumento de atributos.</span> Em NEX 20%, e novamente em NEX 50%, 80% e 95%, aumente um atributo a sua escolha em +1. Você não pode aumentar um atributo além de 5 desta forma. </text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Grau de treinamento.</span> Em NEX 35%, e novamente em NEX 70%, escolha um número de perícias treinadas igual a 3 + Int. Seu grau de treinamento nessas perícias aumenta em um (de treinado para veterano ou de veterano para expert).</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Versatilidade.</span> Em NEX 50%, escolha entre receber um poder de combatente ou o primeiro poder de uma trilha de combatente que não a sua.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Poder de ocultista.</span> Em NEX 15%, você recebe um poder de ocultista à sua escolha. Você recebe um novo poder de ocultista em NEX 30% e a cada 15% de NEX subsequentes, conforme indicado na tabela. Veja a lista de poderes a seguir. </text>
                    </div>
                    <div>
                        <OcultistTable />
                    </div>
                </div>
                <div>
                    <div style={{gap:'20px', display:'flex', flexDirection:'column'}} className="hide-scroll">
                        <div style={{display:'flex', justifyContent:'center', color:'white', fontSize:'23px'}}>
                            <text className="cameo" style={{color:'#B22729'}}>&nbsp;Poderes de ocultista&nbsp;</text>
                        </div>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Camuflar Ocultistmo.</span> Você pode gastar uma ação livre para esconder símbolos e sigilos que estejam desenhados ou gravados em objetos ou em sua pele, tornando-os invisíveis para outras pessoas além de você mesmo. Além disso, quando lança um ritual, pode gastar +2 PE para lançá-lo sem usar componentes ritualísticos e sem gesticular (o que permite conjurar um ritual com as mãos presas), usando apenas concentração. Outros seres só perceberão que você lançou um ritual se passarem num teste de Ocultismo (DT 25).</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Criar Selo.</span> Você sabe fabricar selos paranormais de rituais que conheça. Fabricar um selo gasta uma ação de interlúdio e um número de PE iguais ao custo de conjurar o ritual. Você pode ter um número máximo de selos criados ao mesmo tempo igual à sua Presença.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Envolto em Mistério.</span> Sua aparência e postura assombrosas o permitem manipular e assustar pessoas ignorantes ou supersticiosas. O mestre define o que exatamente você pode fazer e quem se encaixa nessa descrição. Como regra geral, você recebe +5 em Enganação e Intimidação contra pessoas não treinadas em Ocultismo. </text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Especialista em Elemento.</span> Escolha um elemento. A DT para resistir aos seus rituais desse elemento aumenta em +2. </text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Ferramentas Paranormais.</span> Você reduz a categoria de um item paranormal em I e pode ativar itens paranormais sem pagar seu custo em PE.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Fluxo de Poder.</span> Você pode manter dois efeitos sustentados de rituais ativos ao mesmo tempo com apenas uma ação livre, pagando o custo de cada efeito separadamente. Pré-requisito: NEX 60%. </text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Guiado pelo Paranormal.</span> Uma vez por cena, você pode gastar 2 PE para fazer uma ação de investigação adicional.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Identificação Paranormal.</span> Você recebe +10 em testes de Ocultismo para identificar criaturas, objetos ou rituais.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Improvisar Componentes.</span> Uma vez por cena, você pode gastar uma ação completa para fazer um teste de Investigação (DT 15). Se passar, encontra objetos que podem servir como componentes ritualísticos de um elemento à sua escolha. O mestre define se é possível usar esse poder na cena atual. </text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Intuição Paranormal.</span> Sempre que usa a ação facilitar investigação, você soma seu Intelecto ou Presença no teste (à sua escolha).</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Mestre em Elemento.</span> Escolha um elemento. O custo para lançar rituais desse elemento diminui em –1 PE. Pré-requisitos: Especialista em Elemento no elemento escolhido, NEX 45%.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Ritual Potente.</span> Você soma seu Intelecto nas rolagens de dano ou nos efeitos de cura de seus rituais. Pré-requisito: Int 2. </text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Ritual Predileto.</span> Escolha um ritual que você conhece. Você reduz em –1 PE o custo do ritual. Essa redução se acumula com reduções fornecidas por outras fontes.</text>
                        <text style={insideText}><span className='cameo' style={insideTitleText}>Tatuagem ritualística.</span> Símbolos marcados em sua pele reduzem em –1 PE o custo de rituais de alcance pessoal que têm você como alvo.</text>
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

export default OcultistPopup