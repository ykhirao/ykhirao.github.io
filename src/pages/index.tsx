import React from 'react'
import { useRouteData } from 'react-static'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Profile from 'components/Profile'

export default () => {
  const { about }: { about: string } = useRouteData()
  // console.log(about);
  return (
    <>
      <Profile />
      <ReactMarkdown children={about} className={'md-body'} remarkPlugins={[remarkGfm]} />
    </>
  )
}
