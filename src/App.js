import React from 'react';
import styled from 'styled-components'
import logo from './logo.svg';
import landingSplash from './landing-splash.jpeg'

const LandingContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    filter: blur(3px);
    background: url("${landingSplash}") no-repeat center fixed;
    background-color: #111;
    background-attachment: fixed;
    transform: scale(1.03); 
  }
`

const CTAContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  border: 3px solid palevioletred;
  border-radius: .5em;
  padding: 1rem;
  font-size: 1.5rem;
  text-align: center;
  background: rgba(0,0,0,0.3);
  backdrop-filter: blur(6px);
  & > * {
    margin: 1rem;
  }
`

const Button = styled.button`
  background: white;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1rem;
  padding: 0.25rem 1rem;
  font-size: 1.5rem;
`

const Input = styled.input`
  background: white;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1rem;
  padding: 0.25rem 1rem;
  font-size: 1.5rem;

`

function App() {
  return (
    <>
      <LandingContainer>
        <CTAContainer>
          <h1>Join the Waterford Tech Community Slack</h1>
          <p>The Waterford Tech Community just got a new home! this slack was created to enable local tech community collaboration and facilitate networking in the area. Check it out!</p>
          <form
            action="//docs.google.com/forms/d/e/1FAIpQLSfSOuBAy3L5VR8TRsMSwIZVPcZYHLOIGnh2QTCt_UhEliSFEg/formResponse"
            method="post"
            target="_blank"
          >
            <Input
              autocomplete="email"
              name="emailAddress"
              placeholder="Your email"
              type="email"
            />
            <Button
              type="submit"
            >
              Invite Me!
            </Button>
          </form>
        </CTAContainer>
      </LandingContainer>
    </>
  );
}

export default App;
