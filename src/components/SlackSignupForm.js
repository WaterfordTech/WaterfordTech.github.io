import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components'
import {Spinner3 as Spinner} from 'styled-icons/evil'

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
  
    if (submitted) {
      return <h3>Submitted! Thank you. <span role='img' aria-label='bowing man'>🙇‍♂️</span></h3>
    }
  
    return <form onSubmit={onSubmit}>
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
  }
  
export default Form
