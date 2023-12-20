function PossibleOrigins(props) {

    return (
        <div onClick={props.onClick} style={props.mainStyle}>
            <a>{props.originWord}</a>
            <a className="arrow right"></a>
        </div>
    )
}
export default PossibleOrigins