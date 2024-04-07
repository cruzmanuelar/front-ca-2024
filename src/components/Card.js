const Card = ({children}) => {

    const cardStyle = {
        border : "thin solid red"
    }

    return (
        <div style={cardStyle}>{children}</div>
    )
}

export default Card