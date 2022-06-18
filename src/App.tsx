import React, { Suspense } from 'react'
import {
  Root,
  Routes,
  addPrefetchExcludes,
} from 'react-static'
import { Router } from '@reach/router'

import Container from 'components/Container'
import Dynamic from 'components/Dynamic'

import 'bulma/css/bulma.css'
import './assets/github-markdown-light.css'
// import './assets/app.css'
import Header from 'components/Header'
import Footer from 'components/Footer'

addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <Header />
      <Container>
        <Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </Suspense>
      </Container>
      <Footer />
    </Root>
  )
}

export default App
