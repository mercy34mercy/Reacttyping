import "./Name.css"
import namebar from "../assets/inputbar.svg"

type props = {
    name: string,
}

export const Name = (props: props) => {
    return (
        <div  className="rankname">
            <p>{props.name}</p>
        </div>
    )
}