import React from 'react'

const Container: React.FC = ({ children }) => {
  return (
    <div className="container">
      <div className="is-primary" style={{padding: "2rem 0.5rem",}}>
        {children}
      </div>
    </div>
  )
}
export default Container
