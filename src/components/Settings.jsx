import { useRef, useEffect }from 'react'
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from 'react-bootstrap/Button';

const Title = styled.h2`
  font-weight: bold;
  color: #A59132;
  margin: 10px;
`

const SaveButton = styled(Button)`
  width: 70px;
  border-radius: 45px;
  background-color: #DA7422;
  border: none;
  margin-right: 5px;

  &:hover {
      background-color: #D06023;
  }

  &:active {
      background-color: #D06023 !important;
  }
`

const CancelButton = styled(Button)`
  width: 70px;
  border-radius: 45px;
  background-color: #ced4da;
  color: gray;
  border: none;

  &:hover {
      background-color: #c3c9ce;
      color: gray;
  }

  &:active {
      background-color: #c3c9ce !important;
      color: gray;
  }
`

const Settings = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;
    if (content.scrollHeight <= content.clientHeight) {
      content.style.overflowY = 'hidden';
    } else {
      content.style.overflowY = 'scroll';
    }
  }, []);

  return (
    <Container>
      <Title>Settings</Title>
      <div ref={contentRef} style={{overflow: 'hidden', overflowY: 'scroll', height: 'calc(100vh - 150px)'}}>
        <div style={{margin: 20, display: 'flex', flexDirection: 'column', maxWidth: 300}}>
          <TextField
            required
            id="outlined-required"
            label="First Name"
            defaultValue="Aaron"
            style={{marginBottom: 20}}
          />
          <TextField
            required
            id="outlined-required"
            label="Last Name"
            defaultValue="Amora"
            style={{marginBottom: 20}}
          />
          <TextField
            required
            id="outlined-required"
            label="Username"
            defaultValue="Rieze"
            style={{marginBottom: 20}}
          />
        <TextField
            required
            id="outlined-required"
            label="Email"
            defaultValue="email@gmail.com"
            style={{marginBottom: 20}}
          />
          <TextField
            required
            id="outlined-required"
            label="Change Password"
            defaultValue=" "
            style={{marginBottom: 20}}
          />
          <TextField
            required
            id="outlined-required"
            label="Confirm Password"
            defaultValue=" "
            style={{marginBottom: 20}}
          />
          <div>
            <SaveButton>Save</SaveButton>
            <CancelButton variant="secondary">Cancel</CancelButton>
          </div>

        </div>
          
      </div>
    </Container>
  )
}

export default Settings