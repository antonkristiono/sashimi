
import { eventQuery } from '../../lib/queries'
import { getClient, overlayDrafts } from '../../lib/sanity.server'
import { usePreviewSubscription } from '../../lib/sanity'

export default function Event({ allEvents }) {
  return <>aa </>;
}

export async function getStaticProps({ preview = false }) {
    const allEvents = overlayDrafts(await getClient(preview).fetch(eventQuery))
    return {
      props: { allEvents, preview },
      // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
      revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
    }
  }
