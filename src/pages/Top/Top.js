import React, { Component } from 'react';
import styled from 'styled-components'
import ToDoListItem from 'components/ToDo/ToDoListItem.js'

class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    }
  }

  render() {
    return (
      <Container>
        <main>
          <FormArea
            onSubmit={this.handleAddToDo}
          >
            <ul>
              <li>
                <input
                  type="text"
                  id="title"
                  placeholder="タイトル"
                />
              </li>
              <li>
                <textarea
                  id="description"
                  placeholder="説明文"
                />
              </li>
            </ul>
            <FormSubmit>
              <input type="submit" value="送信"/>
            </FormSubmit>
          </FormArea>

          <ul>
            {this.state.todoList.map(todo => (
              <ToDoListItem
                key={todo.id}
                title={todo.title}
                description={todo.description}
              />
            ))}
          </ul>
        </main>
      </Container>
    )
  }

  handleAddToDo = e => {
    e.preventDefault();

    const titleElement = e.target.elements["title"];
    const descriptionElement = e.target.elements["description"];

    this.setState(
      {
        todoList: this.state.todoList.concat({
          id: this.state.todoList.length + 1,
          title: titleElement.value,
          description: descriptionElement.value
        }),
      },
      () => {
        titleElement.value = "";
        descriptionElement.value = "";
      }
    )
  }

}

const Container = styled.div`
  width: 100%;
  max-width: 60.0rem;
  margin: 0 auto;
`

const FormArea = styled.form`
  border-bottom: 1px solid #ccc;
  margin: 4.0rem 0;
  padding-bottom: 4.0rem;
  ul {
    li + li {
      margin-top: 2.0rem;
    }
  }
`

const FormSubmit = styled.div`
  width: 100%;
  max-width: 20.0rem;
  margin: 2.0rem auto 0;
`

export default Top;
