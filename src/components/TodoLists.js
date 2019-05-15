import React from "react"
import TodoItem from "./TodoItem"
import styled from "styled-components"

const Lists = styled.div`
  flex-grow: 1;
  background: pink;
  @media (min-width: 768px) {
    width: 70%;
  }
`

const ListName = styled.p`
  margin: 10px 0;
  text-align: center;
`

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
    <Lists>
      <ListName>
        {unComplTodos.length > 1
          ? "Uncompleted tasks"
          : unComplTodos.length === 0
          ? false
          : "Uncompleted task"}
      </ListName>
      {unComplTodos}
      <ListName>
        {ComplTodos.length > 1
          ? "Completed tasks"
          : ComplTodos.length === 0
          ? false
          : "Completed task"}
      </ListName>
      {ComplTodos}
    </Lists>
  )
}

export default TodoLists
