import OriginPopup from "../components/OriginPopup"
import PossibleOrigins from "../components/PossibleOrigins"
import { useState } from "react";

function Origin() {

    var [buttonPopup, setButtonPopup] = useState(false);
    var [popupHeader, setpopupHeader] = useState();
    var [popupText, setPopupText] = useState ();
    var [popupSkill, setPopupSkill] = useState();
    var [popupPower, setPopupPower] = useState();
    var [popupPower2, setPopupPower2] = useState();

    function PopupChoose(head, text, skill, power, power2) {
        buttonPopup = setButtonPopup(true)
        popupHeader = setpopupHeader(head)
        popupText = setPopupText(text)
        popupSkill = setPopupSkill(skill)
        popupPower = setPopupPower(power)
        popupPower2 = setPopupPower2(power2)
    }

    return (
        <div style={outBox}>
            <div className="scrollFlex" style={midBox}>
                <PossibleOrigins onClick={() => PopupChoose("Acadêmico", "Você era um pesquisador ou professor universitário. De forma proposital ou não, seus estudos tocaram em assuntos misteriosos e chamaram a atenção da Ordo Realitas.", "Ciências e Investigação.", "Saber é Poder.", "Quando faz um teste usando Intelecto, você pode gastar 2 PE para receber +5 nesse teste.")} originWord={"Acadêmico"}/>
                <PossibleOrigins onClick={() => PopupChoose("Agente de saúde", "Você era um profissional da saúde, como um enfermeiro, farmacêutico, médico, psicólogo ou socorrista, treinado no atendimento e cuidado de pessoas. Você pode ter sido surpreendido por um evento paranormal durante o trabalho ou mesmo cuidado de um agente da Ordem em uma emergência, que ficou surpreso com o quão bem você lidou com a situação.", "Intuição e Medicina.", "Técnica Medicinal.", "Sempre que cura um personagem, você adiciona seu Intelecto no total de PV curados.")} originWord={"Agente de saúde"}/>
                <PossibleOrigins onClick={() => PopupChoose("Amnésico", "Você perdeu a maior parte da memória. Sabe apenas o próprio nome, ou nem isso. Sua amnésia pode ser resultado de um trauma paranormal ou mesmo de um ritual. Talvez você tenha sido vítima de cultistas? Talvez você tenha sido um cultista? Seja como for, hoje a Ordem é a única família que conhece. Quem sabe, cumprindo missões, você descubra algo sobre seu passado.", "Duas à escolha do mestre.", "Vislumbres do Passado.", "Uma vez por sessão, você pode fazerum teste de Intelecto (DT 10) para reconhecer pessoas ou lugares familiares, que tenha encontrado antes de perder a memória. Se passar, recebe 1d4 PE temporários e, a critério do mestre, uma informação útil.")} originWord={"Amnésico"}/>
                <PossibleOrigins onClick={() => PopupChoose("Artista", "Você era um ator, músico, escritor, dançarino, influenciador… Seu trabalho pode ter sido inspirado por uma experiência paranormal do passado e o que o público acha que é pura criatividade, a Ordem sabe que tem um lado mais sombrio.", "Artes e Enganação.", "Magnum Opus.", "Você é famoso por uma de suas obras. Uma vez por missão, pode determinar que um personagem envolvido em uma cena de interação o reconheça. Você recebe +5 em testes de Presença e de perícias baseadas em Presença contra aquele personagem. A critério do mestre, pode receber esse bônus em outras situações nas quais seria reconhecido.")} originWord={"Artista"}/>
                <PossibleOrigins onClick={() => PopupChoose("Atleta", "Você competia em um esporte individual ou coletivo, como natação ou futebol. Seu desempenho pode ser fruto de uma influência paranormal que nem mesmo você conhecia ou você pode ter se envolvido em algum evento relacionado ao Outro Lado em uma de suas competições.", "Acrobacia e Atletismo.", "110%", "Quando faz um teste de perícia usando Força ou Agilidade (exceto Luta e Pontaria) você pode gastar 2 PE para receber +5 nesse teste.")} originWord={"Atleta"}/>
                <PossibleOrigins onClick={() => PopupChoose("Chef", "Você é um cozinheiro amador ou profissional. Talvez trabalhasse em um restaurante, talvez simplesmente gostasse de cozinhar para a família e amigos. Como sua comida fez com que você se envolvesse com o paranormal? Ninguém sabe. Mas os outros agentes adoram quando você vai para a missão!", "Fortitude e Profissão (cozinheiro).", "Ingrediente Secreto.", "Em cenas de interlúdio, você pode fazer a ação alimentar-se para cozinhar um prato especial. Você, e todos os membros do grupo que fizeram a ação alimentar-se, recebem o benefício de dois pratos (caso o mesmo benefício seja escolhido duas vezes, seus efeitos se acumulam).")} originWord={"Chef"}/>
                <PossibleOrigins onClick={() => PopupChoose("Criminoso", "Você vivia uma vida fora da lei, seja como mero batedor de carteiras, seja como membro de uma facção criminosa. Em algum momento, você se envolveu em um assunto da Ordem — talvez tenha roubado um item amaldiçoado? A organização, por sua vez, achou melhor recrutar seus talentos do que ter você como um estorvo.", "Crime e Furtividade.", "O Crime Compensa.", "No final de uma missão, escolha um item encontrado na missão. Em sua próxima missão, você pode incluir esse item em seu inventário sem que ele conte em seu limite de itens por patente.")} originWord={"Criminoso"}/>
                <PossibleOrigins onClick={() => PopupChoose("Cultista Arrependido", "Você fez parte de um culto paranormal. Talvez fossem ignorantes iludidos, que acreditavam estar contatando entidades benevolentes. Talvez soubessem exatamente o que estavam fazendo. Seja como for, algo abriu seus olhos e agora você luta pelo lado certo — embora carregue para sempre traços de sua vida pregressa. Outros membros da Ordem podem desconfiar de sua conversão e você sabe que precisará se esforçar para conquistar a confiança de todos.", "Ocultismo e Religião.", "Traços do Outro Lado.", "Você possui um poder paranormal à sua escolha. Porém, começa o jogo com metade da Sanidade normal para sua classe.")} originWord={"Cultista Arrependido"}/>
                <PossibleOrigins onClick={() => PopupChoose("Desgarrado", "Você não vivia de acordo com as normas da sociedade. Podia ser um eremita, uma pessoa em situação de rua ou simplesmente alguém que descobriu o paranormal e abandonou sua rotina — sabendo o quão frágil era a existência humana, não conseguia simplesmente continuar indo para o trabalho todo dia. De qualquer forma, a vida sem os confortos modernos o deixou mais forte.", "Fortitude e Sobrevivência.", "Calejado", "Você recebe +1 PV para cada 5% de NEX.")} originWord={"Desgarrado"}/>
                <PossibleOrigins onClick={() => PopupChoose("Engenheiro", "Enquanto os acadêmicos estão preocupados com teorias, você coloca a mão na massa, seja como engenheiro profissional, seja como inventor de garagem. Provavelmente você criou algum dispositivo paranormal que chamou a atenção da Ordem.", "Profissão e Tecnologia.", "Ferramenta Favorita.", "Um item a sua escolha (exceto armas) conta como uma categoria abaixo (por exemplo, um item de categoria II conta como categoria I para você).")} originWord={"Engenheiro"}/>
                <PossibleOrigins onClick={() => PopupChoose("Executivo", "Você possuía um trabalho de escritório em uma grande empresa, banco ou corporação. Era um administrador, advogado, contador ou de qualquer outra profissão que lida com papelada e burocracia. Sua vida era bastante normal, até que você descobriu algo que não devia. Talvez o sucesso da empresa residisse em um ritual? Talvez toda a corporação fosse fachada para um culto e o presidente, um líder cultista envolvido com entidades paranormais? Após essa descoberta, você foi recrutado pela Ordem e trocou seu trabalho de escritório por missões de campo — hoje, sua vida é tudo, menos normal.", "Diplomacia e Profissão.", "Processo Otimizado.", "Sempre que faz um teste de perícia durante um teste estendido, ou uma ação para revisar documentos (físicos ou digitais), pode pagar 2 PE para receber +5 nesse teste.")} originWord={"Executivo"}/>
                <PossibleOrigins onClick={() => PopupChoose("Investigador", "Você era um investigador do governo, como um perito forense ou policial federal, ou privado, como um detetive particular. Pode ter tido contato com o paranormal em algum caso ou ter sido recrutado pela Ordem por suas habilidades de resolução de mistérios.", "Investigação e Percepção.", "Faro para Pistas.", "Uma vez por cena, quando fizer um teste para procurar pistas, você pode gastar 1 PE para receber +5 nesse teste.")} originWord={"Investigador"}/>
                <PossibleOrigins onClick={() => PopupChoose("Lutador", "Você pratica uma arte marcial ou esporte de luta, ou cresceu em um bairro perigoso onde aprendeu briga de rua. Já quebrou muitos ossos, tanto seus quanto dos outros. Pode ter conhecido a Ordem após um torneio secreto envolvendo entidades do Outro Lado ou ter sido recrutado pela sua capacidade de luta.", "Luta e Reflexos.", "Mão Pesada.", "Você recebe +2 em rolagens de dano com ataques corpo a corpo.")} originWord={"Lutador"}/>
                <PossibleOrigins onClick={() => PopupChoose("Magnata", "Você possui muito dinheiro ou patrimônio. Pode ser o herdeiro de uma família antiga ligada ao oculto, ter criado e vendido uma empresa e decidido usar sua riqueza para uma causa maior, ou ter ganho uma loteria após inadvertidamente escolher números amaldiçoados que formavam um ritual.", "Diplomacia e Pilotagem.", "Patrocinador da Ordem.", "Seu limite de crédito é sempre considerado um acima do atual.")} originWord={"Magnata"}/>
                <PossibleOrigins onClick={() => PopupChoose("", "", "", "", "")} originWord={""}/>
                <PossibleOrigins onClick={() => PopupChoose("", "", "", "", "")} originWord={""}/>
                <PossibleOrigins onClick={() => PopupChoose("", "", "", "", "")} originWord={""}/>

            </div>
            
            <OriginPopup trigger={buttonPopup} setTrigger={setButtonPopup} originHead={popupHeader} originText={popupText} originSkill={popupSkill} originPower1={popupPower} originPower2={popupPower2}>
            </OriginPopup>
        </div>
    )
}

const outBox = {display:"flex", position:"fixed", justifyContent:"center", height:"100vh", width:"1440px", padding:"50px"}
const midBox = {display:"flex", width:"800px", flexDirection:"column", alignItems:"center", gap:"10px", height:"620px"}
export default Origin