import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
// import logo from './logo.svg';
import { Github } from 'styled-icons/fa-brands'
import { Slack } from 'styled-icons/boxicons-logos'
import landingSplash from './landing-splash.jpeg'
import vertLandingSplash from './landing-splash-vertical.jpeg'
import Form from './components/SlackSignupForm'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 20px;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  a {
    color: palevioletred;

    &:hover {
      color: mediumvioletred;
    }
  }
`

const LandingContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: start;
  min-height: 100vh;
  overflow: hidden;
  color: white;

  text-align: center;

  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url("${landingSplash}") no-repeat center fixed;

    @media (max-width: 900px) {
      background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url("${vertLandingSplash}") no-repeat center fixed;
    }
    background-color: #111;
    background-attachment: fixed;
  }
`

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  top: 0; left: 0;
  padding: 2rem;

  @media (max-width: 900px) {
    justify-content: center;
    & div:last-child {
      display: none;
    }
  }
`

const HeaderLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & a {
    margin: 1rem;
    font-size: 1.5rem;
    font-weight: 700;
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
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

const GithubLogo = styled(Github)`
  color: white;
  &:hover {
    color: rgba(150,150,150,1);
  }
`

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: stretch;
`

const ContentContainer = styled.div`
  max-width: 35ch;
  padding: 1rem;
  border: 1px solid lightgray;
  margin: 1rem;
  border-radius: 5px;
`

const EventsCalendar =styled.div`
  padding: 1rem;
  & iframe {
    overflow: hidden;
    pointer-events:none;
  }
`

const EventsCalendarLarge =styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 800px) {
    display: none;
  }
`
const EventsCalendarSmall =styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 800px) {
    display: none;
  }
`

const Footer = styled.div`
  min-height: 100px;
  background-color: #111111;
  padding: 1rem;
  color: white;
`


function App() {
  return (
    <>
      <GlobalStyle />
      <LandingContainer>
        <HeaderContainer>
          <HeaderLinks>
            <a href="/">Home</a>
            <a href="/#about-us">About us</a>
            <a href="/#events-calendar">Events Calendar</a>
          </HeaderLinks>
          <div>
            <a href="https://github.com/waterfordtech/waterfordtech.github.io/"><GithubLogo size="48"/></a>
          </div>
        </HeaderContainer>
        <CTAContainer>
          <FormContainer>
            <h1>Join the Waterford Tech Community on Slack <Slack size="48"/></h1>
            <p>
              The Waterford Tech Community has an official home!
              This community Slack was created to enable local tech collaboration and facilitate networking in the area.
              <br/>
              Check it out!
            </p>
            <Form />
          </FormContainer>
        </CTAContainer>
      </LandingContainer>
      <DetailsContainer id="about-us">
        <ContentContainer>
          <h2>Who are we?</h2>
          <p>
            We're the Waterford Tech Community!
            We're a mix of professionals, students and hobbyists with a connection to the <a href="//en.wikipedia.org/wiki/Waterford">Deise</a> in the Sunny South-East of Ireland.
            The Tech Community has grown significantly in the last few years, and needed a home to hang out online, and it's our hope that this website and open Slack community will become that home. {"<3"}
          </p>
        </ContentContainer>
        <ContentContainer>
          <h2>Who is this for?</h2>
          <p>
            This community is for anyone involved or interested in tech in the Sunny South-East!
            No matter if you're a developer, designer, PM, manager, analyst, recruiter, student, teacher or even a hobbyist, we have a home for you.
            Waterford is home to many different companies and organisations involved with tech, and we want them represented! :)
          </p>
        </ContentContainer>
        <ContentContainer>
          <h2>Slack Information</h2>
          <p>
            The Slack group is open for anyone to join in.
            It's important to keep the community welcoming and approachable, and to this end we ask people to abide by the <a href="https://www.contributor-covenant.org/">Contributor Convenant Code of Conduct</a>.
            Please contact an admin for assistance if you need any help, support or want to report an issue at any time. (<a href="https://slack.com/intl/en-ie/help/articles/360003534892-Browse-people-and-user-groups-in-Slack">You can find the admins/owners using the slack settings windows.</a>)
          </p>
        </ContentContainer>
      </DetailsContainer>
      <hr />
      <EventsCalendar id="events-calendar">
        <h2>Waterford Events Calendar</h2>
        <p>A google calendar can be found at <a href="https://calendar.google.com/calendar/embed?src=c8fpiiv7hds3aig26gb3ccpggc%40group.calendar.google.com&ctz=Europe%2FDublin">this link.</a></p>                                                                                        
        <p>Message the admins on slack if you want to add an event in the area.</p>
        <EventsCalendarLarge>
          <iframe title="desktop calendar" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FDublin&amp;src=YzhmcGlpdjdoZHMzYWlnMjZnYjNjY3BnZ2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23F4511E&amp;title=Waterford%20Tech%20Events&amp;showTitle=1&amp;showNav=0&amp;showDate=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=1&amp;showTz=1&amp;mode=MONTH" width="800" height="600" frameborder="0" scrolling="no"></iframe>
        </EventsCalendarLarge>
        <EventsCalendarSmall>
          <iframe title="mobile calendar" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FDublin&amp;src=YzhmcGlpdjdoZHMzYWlnMjZnYjNjY3BnZ2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23F4511E&amp;title=Waterford%20Tech%20Events&amp;showTitle=1&amp;showNav=0&amp;showDate=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=1&amp;showTz=1&amp;mode=AGENDA" width="800" height="600" frameborder="0" scrolling="no"></iframe>
        </EventsCalendarSmall>
      </EventsCalendar>
      <Footer>
        <h3>Waterford Tech Community</h3>
        <p>Copyright © 2020-2022 Waterford Tech Community</p>
      </Footer>
    </>
  );
}

export default App;
