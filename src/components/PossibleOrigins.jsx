function PossibleOrigins(props) {

    return (
        <div onClick={props.onClick} style={{cursor:"pointer", display:"flex", backgroundColor:"#424752", border:"2px solid black", width:"600px", height:"50px", borderRadius:"10px", alignItems:"center", padding:"20px", fontSize:"30px", color:"white", flexDirection:"row", justifyContent:"space-between"}}>
            <a>{props.originWord}</a>
            <a className="arrow right"></a>
        </div>
    )
}
export default PossibleOrigins