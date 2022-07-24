import React from "react";
import { Score } from "./Score";
import { render, screen } from '@testing-library/react'


test('問題が描画されている', () => {
    render(<Score score={5.76} />)
    // screen.debug()
    expect(screen.getByText(5.76))
})