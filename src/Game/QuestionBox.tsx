type QuestionProps = {
    question: string[][];
    questionnum: number;
}


export const QuestionBox = (props: QuestionProps) => {
    return (
        <div className='questionBox'>
            {props.question[props.questionnum][0]}
        </div>
    );
}