import '../styles/Arrow.css'

function leftArrow(props) {
    return (
        <div className="rightArrow-box">
            <button className="rightArrow-button" onClick={props.click}>
                {props.icon}
            </button>
        </div>
    )
}

export default leftArrow