import React from "react"
import styled from "styled-components"

class ToDoList extends React.Component {
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
    ],
  }

  handleRemove = id => {
    const list = [...this.state.list].filter(item => item.id !== id)
    this.setState({
      list,
    })
  }

  handleComplete = id => {
    const list = [...this.state.list].filter(item => {
      if (item.id !== id) return (item.completed = !item.completed)
    })
    this.setState({
      list,
    })
  }

  render() {
    const ToDoList = this.state.list.map(item => {
      return (
        <li key={item.id}>
          <p>{item.content}</p>
          <button>{item.completed ? "Uncomplete" : "Complete"}</button>
          <button onClick={() => this.handleRemove(item.id)}>Remove</button>
        </li>
      )
    })
    return (
      <>
        <h1>hahaha</h1>
        <ul>{ToDoList}</ul>
      </>
    )
  }
}

export default ToDoList
