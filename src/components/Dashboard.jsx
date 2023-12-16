import React from 'react'
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { popularEvents } from '../data';
import Event from './Event';

const Title = styled.h2`
  font-weight: bold;
  color: #A59132;
  margin: 10px;
`

const Dashboard = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Container>
      <Title>Dashboard</Title>
      <Title>Recommended Events</Title>
      <div style={{margin: 10}}>
        <Carousel responsive={responsive}>
          {popularEvents.map((item) => (
              <Event item={item} key={item.id}/>
            ))}
        </Carousel>
      </div>
    </Container>
  )
}

export default Dashboard