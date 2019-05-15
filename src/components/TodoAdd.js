import React, { useState } from "react"
import styled from "styled-components"

const Button = styled.button`
  padding: 10px 10px;
  min-width: 150px;
  margin: 5px auto;
  transition: 0.3s all;
  :hover {
    box-shadow: 0 0 10px yellow;
  }
`
const Input = styled.input`
  width: 50%;
  margin: 20px 0px 10px 0;
  font-size: 32px;
  color: white;
  background: transparent;
  border: none;
  border-bottom: white solid 2px;
`
const Error = styled.p`
  text-align: center;
  padding: 10px 0;
`

const TodoAdd = ({ addTodo, className }) => {
  const [text, setText] = useState("")
  const [showEmptyError, setEmptyError] = useState(false)

  const handleChange = e => {
    setText(e.target.value)
    setEmptyError(false)
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (text.length === 0) {
      return setEmptyError(true)
    }

    addTodo(text)
    setText("")
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <Input type="text" value={text} onChange={handleChange} />
      <Button>Add Todo</Button>
      {showEmptyError && <Error>You need write something </Error>}
    </form>
  )
}

export default TodoAdd
