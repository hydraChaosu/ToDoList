import React from "react"
import styled from "styled-components"
import TodoItem from "../components/TodoItem"

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
        <TodoItem
          id={item.id}
          key={item.id}
          content={item.content}
          completed={item.completed}
          complete={this.handleComplete}
          // remove={() => this.handleRemove(item.id)} bez wysylania id
          remove={this.handleRemove}
        />
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
