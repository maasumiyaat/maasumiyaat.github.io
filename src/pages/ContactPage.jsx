import Layout from '../components/Layout'
import Contact from '../components/Contact'
import { useSEO } from '../hooks/useSEO'

export default function ContactPage() {
  useSEO({
    title: 'Contact — Osman Gani Khan Masum',
    description: 'Get in touch with Osman Gani Khan Masum (Masum Osman) — backend engineer available for full-time roles, contract work, and consultancy.',
  })
  return (
    <Layout>
      <Contact />
    </Layout>
  )
}
