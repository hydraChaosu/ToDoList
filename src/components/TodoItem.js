import React from "react"
import styled from "styled-components"

const TodoItem = ({ content, completed, complete, remove, id }) => {
  return (
    <li>
      <p>{content}</p>
      <button onClick={() => complete(id)}>
        {completed ? "Uncomplete" : "Complete"}
      </button>
      <button onClick={() => remove(id)}>Remove</button>
    </li>
  )
}

export default TodoItem
