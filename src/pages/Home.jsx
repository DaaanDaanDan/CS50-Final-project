import HomeConfirmButton from "../components/HomeConfirmButton";

function Home() {

    return (
        <div>
            <div style={{display:"flex", gap:"240px", marginLeft:"5px"}}>
                <div style={{display:"flex", flexDirection:"column", maxWidth:"604px"}}>
                    <div style={{justifyContent:"center", display:"flex", textAlign:"center", maxWidth:"600px", padding:"15px"}}>
                        <text style={headStyle}>Creating your agent step by step</text>
                    </div>
                    <div style={paragStyle}>
                        <text style={subHeadStyle}>Crie um conceito. </text><text style={insideText}>Como é seu personagem? Pense no que fazia antes de encontrar
        o paranormal e entrar na Ordem, e no que você gostaria que ele ou ela
        fizesse enquanto agente. Resuma isso em uma pequena frase. Essa frase será o
        seu conceito de personagem e irá ajudá-lo a tomar as decisões a seguir.</text>
                    </div>
                    <div style={paragStyle}>
                        <text style={subHeadStyle}>Escolha seus atributos. </text><text style={insideText}>Cada personagem possui cinco atributos, que definem suas
        capacidades (ou incapacidades…): Agilidade, Força, Intelecto, Presença e Vigor.
        Você começa com cada atributo em 1 e tem 4 pontos para distribuir entre eles
        como quiser. Você pode reduzir um de seus atributos para 0 para receber 1 ponto
        adicional. Porém, o valor máximo inicial de cada atributo é 3.</text>
                    </div>
                    <div style={paragStyle}>
                        <text style={subHeadStyle}>Escolha sua origem. </text><text style={insideText}>Sua origem indica o que você fazia antes de entrar para a Ordem.
        Ela fornece dois benefícios que representam seu conhecimento pregresso.</text>
                    </div>
                    <div style={paragStyle}>
                        <text style={subHeadStyle}>Escolha sua classe. </text><text style={insideText}>Sua classe indica o treinamento que você recebeu dentro da Ordem.
        Existem três classes: combatentes, especialistas e ocultistas. Cada uma delas fornece
        poderes relacionados a luta, uso de perícias e conhecimento do paranormal.</text>
                    </div>
                    <div style={paragStyle}>
                        <text style={subHeadStyle}>Escolha suas perícias. </text><text style={insideText}>As habilidades mundanas que seu personagem aprendeu com
        treinamento, importantes para resolver desafios físicos e mentais. Perícias são
        definidas por sua origem, classe e Intelecto.</text>
                    </div>
                    <div style={paragStyle}>
                        <text style={subHeadStyle}>Revise sua ficha. </text><text style={insideText}>Por fim, repasse sua ficha para garantir que todas as
        perícias e poderes estão anotados. Confira também seus pontos de vida, pontos
        de esforço e Sanidade. Não se preocupe com equipamento. Você receberá o
        necessário em sua primeira missão.</text>
                    </div>
                </div>
                <div style={{maxWidth:"450px", display:"flex", flexDirection:"column", alignItems:"center", gap:"20px"}}>
                    <img src={require("../Images/character.png")} alt="Character silhouette" style={{maxHeight:"550px"}}/>
                    <input placeholder="Character name" style={{color:"white", outline:"none", background:"#424752", fontSize:"30px", borderRadius:"10px", border:"2px solid black", width:"300px", height:"50px", alignSelf:"center"}}></input>
                    <HomeConfirmButton />
                </div>
            </div>
            
        </div>
    )
}

const headStyle = {color:"white", fontFamily:"Adobe Hebrew Regular", fontSize:"35px", marginTop:"10px"}
const subHeadStyle = {color:"red", fontFamily:"Adobe Hebrew Regular", fontSize:"23px"}
const insideText = {color:"white", fontFamily:"Adobe Hebrew Regular", fontSize:"18px"}
const paragStyle = {maxWidth:"600px", textAlign:"justify", margin:"10px 0px"}
export default Home