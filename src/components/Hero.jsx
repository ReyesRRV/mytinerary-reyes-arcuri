import "../styles/Hero.css"
import { Link as LinkRouter } from "react-router-dom"

export default function CallToAction(props) {
    let linkTo = props.linkTo
    let buttonText = props.buttonText
  return (
    <LinkRouter to={linkTo} className="boton-init">{ buttonText }</LinkRouter>
  )
}
