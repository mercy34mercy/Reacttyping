import React from "react";
import { Rank } from "./Rank"
import { render, screen } from '@testing-library/react'


test('問題が描画されている', () => {
    render(<Rank rank={1} />)
    // screen.debug()
    expect(screen.getByText(1))
})