import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components'
// import logo from './logo.svg';
import { Github } from 'styled-icons/fa-brands'
import { Slack } from 'styled-icons/boxicons-logos'
import {Spinner3 as Spinner} from 'styled-icons/evil'
import landingSplash from './landing-splash.jpeg'
import vertLandingSplash from './landing-splash-vertical.jpeg'

const LandingContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: start;
  min-height: 100vh;
  overflow: hidden;

  font-size: 1.5rem;
  text-align: center;
  color: white;

  & a {
    color: palevioletred;

    &:hover {
      color: mediumvioletred;
    }
  }

  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    filter: blur(3px);
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${landingSplash}") no-repeat center fixed;

    @media (max-width: 900px) {
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${vertLandingSplash}") no-repeat center fixed;
    }
    background-color: #111;
    background-attachment: fixed;
    transform: scale(1.03); 
  }
`

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  top: 0; left: 0;
  padding: 2rem;
`

const CTAContainer = styled.div`
  color: white;
  display: flex;
  flex-grow: 1;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  border: 3px solid palevioletred;
  border-radius: .5em;
  padding: 1rem;
  margin: 1rem;
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
  min-width: 100px;

  &:hover {
    border: 2px solid mediumvioletred;
    color: mediumvioletred;
    shadow: none;
  }

  & > svg {
    height: 1.5rem; width: auto;
  }
`

const Input = styled.input`
  background: white;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1rem;
  padding: 0.25rem 1rem;
  font-size: 1.5rem;

  &:hover, &:focus {
    border: 2px solid mediumvioletred;
    color: mediumvioletred;
    shadow: none;
  }
`

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const SpinningIcon = styled(Spinner)`
  animation: 2s linear ${spin} infinite;
`

const GithubLogo = styled(Github)`
  color: white;
  &:hover {
    color: rgba(150,150,150,1);
  }
`

function Form () {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)
  const [timeout, setTimeoutFn] = useState(null)

  const onSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target);

    if (submitting || !(data.get('emailAddress') ) || !(data.get('emailAddress')).includes('@')) {
      return;
    }

    if (timeout) {
      clearTimeout(timeout)
      setTimeoutFn(null)
    }

    setError(false)
    setSubmitted(false)
    setSubmitting(true)


    fetch('//docs.google.com/forms/d/e/1FAIpQLSfSOuBAy3L5VR8TRsMSwIZVPcZYHLOIGnh2QTCt_UhEliSFEg/formResponse', {
      method: 'POST',
      body: data,
      mode: 'no-cors'
    }).then((res) => {
      setSubmitting(false)
      if (res.ok || res.status === 0) {
        setSubmitted(true)
      } else {
        setError('There was an issue submitting. Please try again.')
      }
      const t = setTimeout(() => {
          setSubmitted(false)
          setError(false)
          setTimeoutFn(null)
      }, 3000)
      setTimeoutFn(t)
    }).catch((e) => {
      setSubmitting(false)
      setError('There was an issue submitting. Please try again.')
      const t = setTimeout(() => {
          setSubmitted(false)
          setError(false)
          setTimeoutFn(null)
      }, 3000)
      setTimeoutFn(t)
    });
  }

  return <>{
    submitted 
      ? <h3>Submitted! Thank you. <span role='img' aria-label='bowing man'>🙇‍♂️</span></h3>
      : <form onSubmit={onSubmit}>
      <Input
        autocomplete="email"
        name="emailAddress"
        placeholder="Your email"
        type="email"
      />
      <Button
        type="submit"
        disabled={submitting}
      >
        {submitting ? <SpinningIcon /> : 'Invite Me!' }
      </Button>
      { error ? <p style={{color: 'red'}}>{error}</p> : '' }
    </form>
  }</>
  
}

function App() {
  

  return (
    <>
      <LandingContainer>
        <HeaderContainer>
          <div>
            <a href="/">Home</a>
          </div>
          <div>
            <a href="//github.com/waterfordtech/waterfordtech.github.io/"><GithubLogo size="48"/></a>
          </div>
        </HeaderContainer>
        <CTAContainer>
          <FormContainer>
            <h1>Join the Waterford Tech Community on Slack <Slack size="48"/></h1>
            <p>The Waterford Tech Community just got a new home! this slack was created to enable local tech community collaboration and facilitate networking in the area. Check it out!</p>
            <Form />
          </FormContainer>
        </CTAContainer>
      </LandingContainer>
    </>
  );
}

export default App;
