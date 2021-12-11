import React from 'react'
import { useRouteData } from 'react-static'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default () => {
  const { about }: { about: string } = useRouteData()
  console.log(about);
  return (
    <>
      <ReactMarkdown children={about} className={'md-body'} remarkPlugins={[remarkGfm]} />
    </>
  )
}
