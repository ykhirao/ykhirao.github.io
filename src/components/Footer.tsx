import React from 'react'
import { useSiteData } from 'react-static'

const Footer = () => {
  const { updatedAt } = useSiteData()

  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          {'This web site was created by ykhirao using react-static. '}
          <a
            href="https://github.com/ykhirao/ykhirao.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Here
          </a>{' '}
          is the link to the GitHub repository
        </p>
        <p>
         & last uploaded at {updatedAt}
        </p>
        <p>{'© 2021 ykhirao'}</p>
      </div>
    </footer>
  )
}
export default Footer
