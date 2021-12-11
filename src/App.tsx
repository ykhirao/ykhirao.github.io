import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Link, Router } from '@reach/router'

import FancyDiv from 'components/FancyDiv'
import Dynamic from 'containers/Dynamic'

import './styles/app.css'
import './styles/github-markdown-light.css'

addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <nav>
        <Link to="/">Home</Link>
        {/* <Link to="/about">About</Link> */}
        <Link to="/posts">Posts</Link>
        {/* <Link to="/dynamic">Dynamic</Link> */}
      </nav>
      <div className="content">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <FancyDiv>
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Dynamic path="dynamic" />
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </FancyDiv>
      </div>
    </Root>
  )
}

export default App
