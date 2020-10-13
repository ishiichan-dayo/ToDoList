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

  // タスク追加の処理
  addToDo = e => {
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

  render() {
    return (
      <Container>
        <main>
          <FormArea
            onSubmit={this.addToDo}
          >
            <ul>
              <li>
                <input
                  type="text"
                  id="title"
                  placeholder="タイトル"
                  required
                />
              </li>
              <li>
                <textarea
                  id="description"
                  placeholder="説明文"
                  required
                />
              </li>
            </ul>
            <div>
              <input type="submit" value="送信"/>
            </div>
          </FormArea>

          <ToDoList>
            <ul>
              {
                this.state.todoList.map(todo => (
                  <li
                    key={todo.id}
                  >
                    <ToDoListItem
                      title={todo.title}
                      description={todo.description}
                      onClick={() => {
                        this.setState({
                          todoList: this.state.todoList.filter(x => x !== todo)
                        })
                      }}
                    />
                  </li>
                ),
                this.state.todoList.sort(function(a, b) {
                  if (a.id < b.id) {
                    return 1;
                  } else {
                    return -1;
                  }
                }))
              }
            </ul>
          </ToDoList>
        </main>
      </Container>
    )
  }
}

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`

const FormArea = styled.form`
  width: 100%;
  max-width: 60.0rem;
  border-bottom: 1px solid #ccc;
  margin: 4.0rem auto;
  padding-bottom: 4.0rem;
  ul {
    li + li {
      margin-top: 2.0rem;
    }
  }
  div {
    width: 100%;
    max-width: 20.0rem;
    margin: 2.0rem auto 0;
    input[type="submit"] {
      background: #000;
      color: #fff;
      padding: 1.0rem;
    }
  }
`

const ToDoList = styled.div`
  width: 100%;
  max-width: 120.0rem;
  margin: 0 auto;
  ul {
    display: flex;
    margin: 0 -2.0rem;
    li {
      width: 33.333%;
      padding: 0 2.0rem;
    }
  }
`

export default Top;
