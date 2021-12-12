import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Link, Router } from '@reach/router'

import Container from 'components/Container'
import Dynamic from 'containers/Dynamic'

import './styles/app.css'
import 'bulma/css/bulma.css'
import './styles/github-markdown-light.css'

addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <nav>
        <Link to="/">Home</Link>
        {/* <Link to="/about">About</Link> */}
        <Link to="/posts">Posts</Link>
        <Link to="/events">Events</Link>
      </nav>
      <Container>
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </Container>
    </Root>
  )
}

export default App
