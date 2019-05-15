import React from "react"
import styled, { css } from "styled-components"

const Button = styled.button`
  padding: 15px 10px;
  min-width: 120px;
  margin: 5px;
  transition: 0.3s all;
  border: white 3px solid;
  border-radius: 10px;
  font-family: "Roboto", serif;
  font-size: 20px;
  color: white;

  ${props =>
    props.com &&
    css`
      background: green;
      color: white;
      :hover {
        background: white;
        color: green;
      }
    `}
  ${props =>
    props.rem &&
    css`
      background: red;
      color: white;
      :hover {
        background: white;
        color: red;
      }
    `}
    @media (min-width: 768px) {
    min-width: 150px;
  }
`
const BtnWrap = styled.div``
const List = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 5px;
  text-decoration: none;
  list-style: none;
  @media (min-width: 768px) {
    padding: 0;
    flex-direction: row;
  }
`

const Content = styled.p`
  flex-grow: 1;
  margin: 20px 0;
  font-size: 20px;
`

const TodoItem = ({ content, completed, complete, remove, id }) => {
  return (
    <List>
      <Content>{content}</Content>
      <BtnWrap>
        <Button com onClick={() => complete(id)}>
          {completed ? "Uncomplete" : "Complete"}
        </Button>
        <Button rem onClick={() => remove(id)}>
          Remove
        </Button>
      </BtnWrap>
    </List>
  )
}

export default TodoItem
