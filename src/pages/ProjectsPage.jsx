import Layout from '../components/Layout'
import Projects from '../components/Projects'
import { useSEO } from '../hooks/useSEO'

export default function ProjectsPage() {
  useSEO({
    title: 'Projects — Osman Gani Khan Masum',
    description: 'Projects built by Osman Gani Khan Masum (Masum Osman) — WebP Edge, Booking Service, Tenlytics Service, GPS Subscription, Truck Marketplace, Price Predictor, Image Server, API Gateway, and Driver Referral.',
  })
  return (
    <Layout>
      <Projects />
    </Layout>
  )
}
