import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import PropTypes from "prop-types"
// import TodoItem from "../components/TodoItem"
import ToDoLists from "../components/TodoLists"
import TodoAdd from "../components/TodoAdd"

const GlobalStyle = createGlobalStyle`
* {
margin: 0px;
padding: 0px;
box-sizing: border-box;
}
// body {
  // min-height: 100vh;
  // background: blue;
// }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: red;
  min-height: 100vh;
`

const StyledTodoAdd = styled(TodoAdd)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20vh;
  padding-bottom: 10px;
  background: #5cb1f8;
  font-family: "Roboto", serif;
  @media (min-width: 768px) {
    width: 70%;
    padding: 0;
  }
`

class ToDo extends React.Component {
  state = {
    list: [
      {
        id: 0,
        content: "Eat rabarbar",
        completed: false,
      },
      {
        id: 1,
        content: "Eat potato",
        completed: false,
      },
      {
        id: 2,
        content: "Eat rice",
        completed: true,
      },
      {
        id: 3,
        content: "Eat meat",
        completed: false,
      },
      {
        id: 4,
        content: "Eat cat and dog",
        completed: true,
      },
    ],
  }

  handleRemove = id => {
    const list = [...this.state.list].filter(item => item.id !== id)
    this.setState({
      list,
    })
  }

  handleComplete = id => {
    const list = [...this.state.list].map(item => {
      if (item.id === id) {
        item.completed = !item.completed
      }
      return item
    })
    this.setState({
      list,
    })
  }

  handleAdd = text => {
    const item = {
      id: this.state.list.length,
      content: text,
      completed: false,
    }
    console.log(this.state.list)
    const list = [...this.state.list, item]
    console.log(list)
    this.setState({
      list,
    })
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <Wrapper>
          <StyledTodoAdd addTodo={this.handleAdd} />
          <ToDoLists
            todos={this.state.list}
            complete={this.handleComplete}
            remove={this.handleRemove}
          />
        </Wrapper>
      </>
    )
  }
}

ToDo.propTypes = {
  list: PropTypes.array,
}

export default ToDo
