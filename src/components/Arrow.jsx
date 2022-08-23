import '../styles/Arrow.css'

function leftArrow(props) {
    return (
        <div className="leftArrow-box">
            <button className="leftArrow-button" onClick={props.click}>
                {props.icon}
            </button>
        </div>
    )
}

export default leftArrow