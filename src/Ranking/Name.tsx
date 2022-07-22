type props = {
    name: string,
}

export const Name = (props: props) => {
    return (
        <a>{props.name}</a>
    )
}