import React from "react";
import { Name } from "./Name";
import { render, screen } from '@testing-library/react'


test('問題が描画されている', () => {
    render(<Name name={"まさし"} />)
    // screen.debug()
    expect(screen.getByText("まさし"))
})