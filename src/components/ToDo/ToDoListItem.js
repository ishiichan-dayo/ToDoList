import React, { Component } from 'react'
import styled from 'styled-components'

class ToDoListItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Box>
        <Title>{this.props.title}</Title>
        <Description>{this.props.description}</Description>
      </Box>
    )
  }
}

const Box = styled.div`
  width: 100%;
  border: 1px solid #000;
  padding: 30px;
`
const Title = styled.div`
  font-weight: bold;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #000;
`
const Description = styled.div`
`

export default ToDoListItem