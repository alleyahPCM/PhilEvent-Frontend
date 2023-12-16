import React from 'react'
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Title = styled.h2`
  font-weight: bold;
  color: #A59132;
  margin: 10px;
`

const Calendar = () => {
  return (
    <Container>
        <Title>Calendar</Title>
    </Container>
  )
}

export default Calendar