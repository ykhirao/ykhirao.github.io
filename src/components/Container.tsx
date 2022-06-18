import React, { ReactNode } from 'react'

const Container = ({
  children,
}: {
  children: ReactNode
}) => {
  return (
    <div className="container">
      <div
        className="is-primary"
        style={{ padding: '4.5rem 0.5rem' }}>
        {children}
      </div>
    </div>
  )
}
export default Container
