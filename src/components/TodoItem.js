import React from "react"
import styled from "styled-components"

const TodoItem = ({ content, completed, complete, remove, key, id }) => {
  return (
    <li key={key}>
      <p>{content}</p>
      <button>{completed ? "Uncomplete" : "Complete"}</button>
      {/* <button onClick={remove}>Remove</button>  1 bez wysylania id  */}
      <button onClick={() => remove(id)}>Remove</button>
    </li>
  )
}

export default TodoItem
