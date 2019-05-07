import React from "react"
import styled, { createGlobalStyle } from "styled-components"
// import TodoItem from "../components/TodoItem"
import ToDoLists from "../components/TodoLists"
import TodoAdd from "../components/TodoAdd"

class ToDo extends React.Component {
  state = {
    list: [
      {
        id: 0,
        content: "Eat rabarbar",
        completed: false,
      },
      {
        id: 1,
        content: "Eat potato",
        completed: false,
      },
      {
        id: 2,
        content: "Eat rice",
        completed: true,
      },
      {
        id: 3,
        content: "Eat meat",
        completed: false,
      },
      {
        id: 4,
        content: "Eat cat and dog",
        completed: true,
      },
    ],
  }

  handleRemove = id => {
    const list = [...this.state.list].filter(item => item.id !== id)
    this.setState({
      list,
    })
  }

  handleComplete = id => {
    console.log(id, "handlecompl")
    const list = [...this.state.list].map(item => {
      if (item.id === id) {
        item.completed = !item.completed
      }
      return item
    })
    this.setState({
      list,
    })
  }

  handleAdd = text => {
    const item = {
      id: this.state.list.length,
      content: text,
      completed: false,
    }
    console.log(this.state.list)
    const list = [...this.state.list, item]
    console.log(list)
    this.setState({
      list,
    })
  }

  render() {
    return (
      <>
        <TodoAdd addTodo={this.handleAdd} />
        <ToDoLists
          todos={this.state.list}
          complete={this.handleComplete}
          remove={this.handleRemove}
        />
      </>
    )
  }
}

export default ToDo
