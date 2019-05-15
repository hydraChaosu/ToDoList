import React from "react"
import TodoItem from "./TodoItem"
import styled, { css } from "styled-components"

const Lists = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background: #5cb1f8;
  color: white;
  font-family: "Roboto", serif;

  @media (min-width: 768px) {
    width: 70%;
  }
`

const List = styled.div`
  background: #5cb1f8;
  color: white;
`

const ListName = styled.p`
  font-size: 20px;
  background: #5cb1f8;
  margin: 10px 0;
  text-align: center;
  ${props =>
    props.com &&
    css`
      color: green;
    `}
  ${props =>
    props.uncom &&
    css`
      color: red;
    `}
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
      <ListName uncom>
        {unComplTodos.length > 1
          ? "Uncompleted tasks"
          : unComplTodos.length === 0
          ? false
          : "Uncompleted task"}
      </ListName>
      <List uncom> {unComplTodos}</List>
      <ListName com>
        {ComplTodos.length > 1
          ? "Completed tasks"
          : ComplTodos.length === 0
          ? false
          : "Completed task"}
      </ListName>
      <List com>{ComplTodos}</List>
    </Lists>
  )
}

export default TodoLists
