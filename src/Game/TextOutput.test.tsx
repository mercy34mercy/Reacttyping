import React from "react";
import { questions2 } from "./Questionarry";
import { Textoutput } from "./TextOutput";
import { render, screen } from '@testing-library/react'


test('問題が描画されている', () => {
    render(<Textoutput 
        children={ ""} 
        key={ questions2[1][0] }
        value={ questions2[1][0]}
        answernum={ 0}
        valuekey={ 1} />)
    // screen.debug()
    expect(screen.getByText(questions2[1][0]))
})
test('問題が描画されている', () => {
    render(<Textoutput
        children={""}
        key={questions2[10][0]}
        value={questions2[10][0]}
        answernum={0}
        valuekey={10}
    />)
    // screen.debug()
    expect(screen.getByText(questions2[10][0]))
})