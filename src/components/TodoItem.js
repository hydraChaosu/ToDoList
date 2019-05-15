import React from "react"
import styled, { css } from "styled-components"

const Button = styled.button`
  padding: 15px 10px;
  min-width: 100px;
  margin: 5px;
  transition: 0.3s all;
  :hover {
    box-shadow: 0 0 10px yellow;
  }
  ${props =>
    props.com &&
    css`
      background: green;
      color: white;
    `}
  ${props =>
    props.rem &&
    css`
      background: red;
      color: white;
    `}
`
const List = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 5px;
  text-decoration: none;
  list-style: none;
  @media (min-width: 768px) {
    padding: 0;
  }
`

const Content = styled.p`
  flex-grow: 1;
`

const TodoItem = ({ content, completed, complete, remove, id }) => {
  return (
    <List>
      <Content>{content}</Content>
      <Button com onClick={() => complete(id)}>
        {completed ? "Uncomplete" : "Complete"}
      </Button>
      <Button rem onClick={() => remove(id)}>
        Remove
      </Button>
    </List>
  )
}

export default TodoItem
