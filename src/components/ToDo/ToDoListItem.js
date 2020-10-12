import React, { Component } from 'react'
import styled from 'styled-components'

class ToDoListItem extends Component {
  render() {
    const {
      title,
      description
    } = this.props

    return (
      <Box>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Box>
    )
  }
}

const Box = styled.div`
  display: inline-block;
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