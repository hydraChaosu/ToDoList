import React, { useState } from "react"
import styled from "styled-components"

const TodoAdd = ({ addTodo }) => {
  const [text, setText] = useState("")
  const handleSubmit = e => {
    e.preventDefault()
    addTodo(text)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={e => setText(e.target.value)} />
      <button>Add Todo</button>
    </form>
  )
}

export default TodoAdd
