import React from 'react'
import { useSiteData } from 'react-static'

const Footer = () => {
  const { updatedAt } = useSiteData()

  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>last uploaded at {updatedAt}</p>
        <p>{'© 2021 ykhirao'}</p>
      </div>
    </footer>
  )
}
export default Footer
