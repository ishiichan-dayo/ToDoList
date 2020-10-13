import React, { Component } from 'react'
import styled from 'styled-components'

class ToDoListItem extends Component {
  render() {
    return (
      <Box>
        <OptionArea>
          <button type="button">編集</button> ｜ <button {...this.props} type="button">削除</button>
        </OptionArea>
        <Title>{this.props.title}</Title>
        <Description>{this.props.description}</Description>
      </Box>
    )
  }
}

const Title = styled.div`
  font-weight: bold;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #ccc;
`
const OptionArea = styled.div`
  transition: .2s all;
  opacity: 0;
  position: absolute;
  top: 3.0rem;
  right: 3.0rem;
  font-size: 1.4rem;
  button {
    width: auto;
    display: inline-block;
    font-size: 1.4rem;
    cursor: pointer;
  }
`
const Box = styled.div`
  width: 100%;
  border-radius: 0.4rem;
  background: #fff;
  padding: 8.0rem 3.0rem 3.0rem;
  position: relative;
  &:hover {
    ${OptionArea} {
      opacity: 1;
    }
  }
`
const Description = styled.div`
`

export default ToDoListItem