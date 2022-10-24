/* import { eventQuery } from '../../lib/queries'
 * import { getClient, overlayDrafts } from '../../lib/sanity.server'
 * import { usePreviewSubscription } from '../../lib/sanity' */
import { createClient } from "next-sanity";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

export default function Event(events: any) {
  return (
    <>
      <ul>
        {events.events.map(
          (event: { _id: Key | null | undefined; eventName: any }) => (
            <li key={event._id}>{event.eventName}</li>
          )
        )}
      </ul>
    </>
  );
}

const client = createClient({
  projectId: "87su1btw",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: false,
});

export async function getServerSideProps() {
  const events = await client.fetch(`*[_type == "event"]`);

  return {
    props: {
      events,
    },
  };
}

/* export async function getStaticProps({ preview = false }) {
 *     const allEvents = overlayDrafts(await getClient(preview).fetch(eventQuery))
 *     return {
 *       props: { allEvents, preview },
 *       // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
 *       revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
 *     }
 *   } */
