import "./Name.css"
import namebar from "../assets/inputbar.svg"

type props = {
    name: string,
}

export const Name = (props: props) => {
    return (

        <img src={namebar} alt=""><a className="rankname">{props.name}</a></img>
    )
}