import React, { useState } from "react"
import styled from "styled-components"

const TodoAdd = ({ addTodo }) => {
  const [text, setText] = useState("")
  const [showEmptyError, setEmptyError] = useState(false)

  const handleChange = e => {
    setText(e.target.value)
    if (text.length) {
      setEmptyError(false)
    }
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
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} />
      <button>Add Todo</button>
      {showEmptyError && <p>You need write something </p>}
    </form>
  )
}

export default TodoAdd
