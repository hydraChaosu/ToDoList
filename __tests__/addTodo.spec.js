import React from "react"
import renderer from "react-test-renderer"

import ToDo from "../src/pages/index"
import TodoItem from "../src/components/TodoItem"
describe("ToDo", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<TodoItem id={20} key={20} content={"roman"} completed={false} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
