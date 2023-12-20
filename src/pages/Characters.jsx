

function Characters() {

    return (
        <div style={{gap:'20px', display:'flex', padding:'40px 200px', flexDirection:'column', alignItems:'center'}}>
            <div style={{display:'flex', width:'100%', justifyContent:'center'}}> 
                <img src={require("../Images/firstStepHeader.jpg")} alt="Header 1"></img>   
            </div>
            <div style={{color:"white", fontSize:"15px", textAlign:"justify"}}>
                Bem vindo à criação de personagem do sistema de RPG Ordem Paranormal. Para iniciar, clique no botão abaixo.
            </div>
            <div>
                <button style={{cursor:'pointer', backgroundColor:"#020202", lineHeight:"20px", borderRadius:"5px", fontSize:"16px", border:"1px solid white", width:"200px", height:"70px", color:'white'}}>Próximo passo</button>
            </div>
            
        </div>
    )
}
export default Characters