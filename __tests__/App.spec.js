import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import { shallow } from "enzyme"
import ToDo from "../src/pages/index"
import TodoItem from "../src/components/TodoItem"

import { configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

configure({ adapter: new Adapter() })

describe("<ToDo/>", () =>
  it("renders without crashing", () => {
    const App = renderer.create(<ToDo />).toJSON()
    expect(App).toMatchSnapshot()
  }))

describe(
  "<TodoItem/>",
  () =>
    it("renders without crashing", () => {
      const Item = shallow(<TodoItem />)
      expect(Item).toMatchSnapshot()
    }),

  it("renders 2 button in item", () => {
    const Item = shallow(<TodoItem />)
    expect(Item.find("button").length).toEqual(2)
  })
)
