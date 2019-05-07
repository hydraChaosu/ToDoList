import React from "react"
import TodoItem from "./TodoItem"
import styled from "styled-components"

const TodoLists = ({ todos, complete, remove }) => {
  const unComplTodos = todos
    .filter(todo => todo.completed === false)
    .map(todo => {
      return (
        <TodoItem
          id={todo.id}
          key={todo.id}
          content={todo.content}
          completed={todo.completed}
          complete={complete}
          remove={remove}
        />
      )
    })
  const ComplTodos = todos
    .filter(todo => todo.completed === true)
    .map(todo => {
      return (
        <TodoItem
          id={todo.id}
          key={todo.id}
          content={todo.content}
          completed={todo.completed}
          complete={complete}
          remove={remove}
        />
      )
    })

  return (
    <>
      <p>Uncompleted tasks</p>
      {unComplTodos}
      <p>Completed tasks</p>
      {ComplTodos}
    </>
  )
}

export default TodoLists
