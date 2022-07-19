import React from "react";
import { questions2 } from "./Questionarry";
import {QuestionBox} from "./QuestionBox"
import { render, screen } from '@testing-library/react'


test('問題が描画されている', () => {
  render(<QuestionBox question={ questions2 } questionnum={1} />)
  // screen.debug()
  expect(screen.getByText(questions2[1][0]))
})
test('問題が描画されている', () => {
  render(<QuestionBox question={ questions2 } questionnum={10} />)
  // screen.debug()
  expect(screen.getByText(questions2[10][0]))
})
test('問題が描画されている', () => {
  render(<QuestionBox question={ questions2 } questionnum={20} />)
  // screen.debug()
  expect(screen.getByText(questions2[20][0]))
})