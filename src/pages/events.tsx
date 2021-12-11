import React from 'react'
import { useRouteData } from 'react-static'
// import { Link } from '@reach/router'

import { ConnpassEvent } from 'types'

export default () => {
  const { events }: { events: ConnpassEvent[] } = useRouteData()
  console.log(events)
  return (
    <div>
      <br />
      All events:
      <ul>
        {events && events.map && events.map(event => (
          <li key={event.event_id}>
            {event.started_at}{' '}
            <a href={event.event_url}>{event.title} {event.catch}</a>
            { event.hash_tag ? ` #${event.hash_tag }` : ''}
          </li>
        ))}
      </ul>
    </div>
  )
}
