import React, { useState } from "react"
import styled, { keyframes } from "styled-components"

const BlinkInput = keyframes`
0% {
opacity: 1
}
100% {
opacity: 0
}
`

const Button = styled.button`
  min-width: 150px;
  padding: 10px 0px;
  margin: 5px auto;
  transition: 0.3s all;
  border: white 3px solid;
  border-radius: 10px;
  background: #5cb1f8;
  font-family: "Roboto", serif;
  font-size: 20px;
  color: white;
  :hover {
    background: white;
    color: #5cb1f8;
  }
`
const Input = styled.input`
  width: 74%;
  margin: 20px 0px 10px 0;
  font-size: 32px;
  color: white;
  background: transparent;
  border: none;
  border-bottom: white solid 2px;
  :focus {
    color: black;
    animation: ${BlinkInput} 0.8s linear 1;
  }
  @media (min-width: 768px) {
    width: 50%;
  }
`
const Error = styled.p`
  margin-bottom: 10px;
  text-align: center;
  color: red;
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
      {showEmptyError && <Error>You need to write something </Error>}
    </form>
  )
}

export default TodoAdd
