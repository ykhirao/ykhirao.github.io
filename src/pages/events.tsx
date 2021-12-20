import React from "react";
import { useRouteData } from "react-static";

import { ConnpassEvent } from "types";

export default () => {
  const { events }: { events: ConnpassEvent[] } = useRouteData();

  return (
    <div>
      <p>All events:</p>
      <ul>
        {events &&
          events.map &&
          events.map((event) => (
            <div className="box">
              <li key={event.event_id}>
                {event.started_at}{" "}
                <a href={event.event_url}>
                  {event.title} {event.catch}
                </a>
                {event.hash_tag ? ` #${event.hash_tag}` : ""}
              </li>
              I'm in a box.
            </div>
          ))}
      </ul>
    </div>
  );
};
