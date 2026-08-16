import Layout from '../components/Layout'
import About from '../components/About'
import { useSEO } from '../hooks/useSEO'

export default function AboutPage() {
  useSEO({
    title: 'About — Osman Gani Khan Masum',
    description: "About Osman Gani Khan Masum (Masum Osman) — backend engineer specialising in API design, database engineering, communication protocols, and distributed systems. 7+ years across logistics, e-commerce, and EdTech.",
  })
  return (
    <Layout>
      <About />
    </Layout>
  )
}
