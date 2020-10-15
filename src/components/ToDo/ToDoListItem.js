import React from 'react'
import styled from 'styled-components'

const ToDoListItem = (props) => {
    return (
      <Box>
        <OptionArea>
          {/* <button type="button">編集</button> */}
           {/* ｜ */}
          <button onClick={props.onClick} type="button">削除</button>
        </OptionArea>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
      </Box>
    )
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
  box-shadow: 0 0 2.0rem rgba(0,0,0, 0.05);
  &:hover {
    ${OptionArea} {
      opacity: 1;
    }
  }
`
const Description = styled.div`
`

export default ToDoListItem