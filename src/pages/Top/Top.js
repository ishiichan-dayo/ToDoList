import React from 'react';
import styled from 'styled-components'
import ToDoListItem from 'components/ToDo/ToDoListItem.js'

function Top() {
  return (
    <Container>
      <main>
        <ToDoListItem title="テスト" description="ここにToDoの内容が入ります" />
      </main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`

export default Top;
