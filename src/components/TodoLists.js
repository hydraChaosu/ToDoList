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
      <p>
        {unComplTodos.length > 1
          ? "Uncompleted tasks"
          : unComplTodos.length === 0
          ? false
          : "Uncompleted task"}
      </p>
      {unComplTodos}
      <p>
        {ComplTodos.length > 1
          ? "Completed tasks"
          : ComplTodos.length === 0
          ? false
          : "Completed task"}
      </p>
      {ComplTodos}
    </>
  )
}

export default TodoLists
