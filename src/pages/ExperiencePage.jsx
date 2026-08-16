import Layout from '../components/Layout'
import Experience from '../components/Experience'
import { useSEO } from '../hooks/useSEO'

export default function ExperiencePage() {
  useSEO({
    title: 'Experience — Osman Gani Khan Masum',
    description: 'Professional experience of Osman Gani Khan Masum (Masum Osman) — Software Engineer at Rooya, Sr Golang Engineer at Tenbyte, Backend Engineer at 10 Minute School, and Senior Software Engineer at Truck Lagbe Inc.',
  })
  return (
    <Layout>
      <Experience />
    </Layout>
  )
}
