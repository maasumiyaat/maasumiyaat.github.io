import Layout from '../components/Layout'
import Recommendations from '../components/Recommendations'
import { useSEO } from '../hooks/useSEO'

export default function RecommendationsPage() {
  useSEO({
    title: 'Recommendations — Osman Gani Khan Masum',
    description: 'Recommendations for Osman Gani Khan Masum (Masum Osman) from managers, direct reports, teammates, and university peers at Truck Lagbe Inc., 10 Minute School, and Rooya.',
  })
  return (
    <Layout>
      <Recommendations />
    </Layout>
  )
}
