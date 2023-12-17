import React from 'react'
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const Title = styled.h2`
  font-weight: bold;
  color: #A59132;
  margin: 10px;
`

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Meeting 1',
    start: new Date(2023, 11, 5),
    end: new Date(2023, 11, 7),
  },
  {
    title: 'Meeting 2',
    start: new Date(2023, 11, 11),
    end: new Date(2023, 11, 13),
  },
  // Add more events as needed
];

const EventCalendar = () => {

  return (
    <Container>
        <Title>Calendar</Title>
        <div style={{ height: '800px', padding: '20px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={['month']}
        defaultDate={new Date(2023, 11, 1)} // Set the default date to the start of the month
        style={{ maxHeight: '100%', width: '100%' }} // Adjust style
        components={{
          month: {
            event: ({ event }) => (
              <div>
                <strong>{event.title}</strong>
              </div>
            ),
          },
        }}
      />
    </div>
    </Container>
  )
}

export default EventCalendar