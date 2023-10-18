function LimitSpare() {

    return (
        <p style={hiddenStyle}>Can't go below 0 spare points</p>
    )
}
const hiddenStyle = {fontSize:"40px", border:"2px solid black", margin:"195px 45px", borderRadius:"30px", backgroundColor:"#22252b", color:"white"}
export default LimitSpare