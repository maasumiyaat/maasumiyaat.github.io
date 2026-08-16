import Layout from '../components/Layout'
import OpenSource from '../components/OpenSource'
import { useSEO } from '../hooks/useSEO'

export default function OpenSourcePage() {
  useSEO({
    title: 'Open Source — Osman Gani Khan Masum',
    description: 'Open source work by Osman Gani Khan Masum (maasumiyaat) — Pretty Print, Cluster Pulse, Ignition, Peeklet, Convoy, Stylebot, Semantic Gallery, Lifeboat, and contributions to Express Gateway and Laravel.',
  })
  return (
    <Layout>
      <OpenSource />
    </Layout>
  )
}
