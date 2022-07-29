import "./Name.css"

type props = {
    name: string,
}

export const Name = (props: props) => {
    return (
        <a className="rankname">{props.name}</a>
    )
}