type TextOutputProps = {
    children: string;
    key: string;
    value: string;
    answernum: number;
    valuekey: number;
}

export const Textoutput = (props: TextOutputProps) => {
    if (props.valuekey <= props.answernum) {
        return (
            <a className='colorGray'>
                {props.value}
            </a>
        )
    } else if (props.valuekey == props.answernum + 1) {
        return (
            <a className='underbar'>
                {props.value}
            </a>
        )
    }
    return (
        <a className='colorwhiteGray'>
            {props.value}
        </a>
    )
}