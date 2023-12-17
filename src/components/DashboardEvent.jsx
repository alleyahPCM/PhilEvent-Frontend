import { Card, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

const EventLink = styled.a`
  text-decoration: none;
  color: #DA7422;

  &:hover {
    color: #D06023;
  }
`

const DashboardEvent = ({item}) => {
  return (
    <Card style={{ width: '100%', marginBottom: '10px' }}>
      <Row className="g-0">
        <Col md={2}>
          <Card.Img
            variant="top"
            src={item.img}
            alt="Card image"
            style={{ objectFit: 'cover', maxHeight: '100px', width: '100%' }}
          />
        </Col>
        <Col md={10}>
          <Card.Body>
            <EventLink href={item.link}>
                  <Card.Title style={{fontWeight: 'bold'}}>{item.title}</Card.Title>
            </EventLink>
            <Card.Text>
                <span>{item.date}</span><span> | </span>
                <span>{item.time}</span>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default DashboardEvent;
