import dayjs from 'dayjs'
import React, { useMemo, useState } from 'react'
import { useRouteData } from 'react-static'

import { ConnpassEvent } from 'types'

export default () => {
  const { events }: { events: ConnpassEvent[] } = useRouteData()

  const [text, setText] = useState('')
  const onChange = (e: any) => {
    setText(e.target.value)
  }

  const filteredEvents = useMemo(() => {
    console.log('use memo filteredEvents')
    return (events || []).filter(event => {
      const isIncludeTitle = (event.title || '')
        .toLocaleLowerCase()
        .includes(text.toLocaleLowerCase())
      const isIncludeCatch = (event.catch || '')
        .toLocaleLowerCase()
        .includes(text.toLocaleLowerCase())
      return isIncludeTitle || isIncludeCatch
    })
  }, [text])

  return (
    <div>
      <input
        className="input is-normal"
        type="text"
        placeholder="Normal input"
        onChange={onChange}
      />
      <p>All events:</p>
      <ul>
        {filteredEvents.map(event => (
          <div className="box" key={event.event_id}>
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{event.hash_tag}</strong>
                    <small>
                      {' '}
                      in {dayjs(event.started_at).format(
                        'YYYY/MM/DD HH:mm',
                      )}{' '}
                    </small>
                    <small>~ {dayjs(event.ended_at).format('HH:mm')}</small>
                    <br />
                    <a
                      href={event.event_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>{event.title}</strong>
                    </a>{' '}
                    / {event.catch}
                  </p>
                </div>
              </div>
            </article>
          </div>
        ))}
      </ul>
    </div>
  )
}
