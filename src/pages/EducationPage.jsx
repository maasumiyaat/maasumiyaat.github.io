import Layout from '../components/Layout'
import Education from '../components/Education'
import { useSEO } from '../hooks/useSEO'

export default function EducationPage() {
  useSEO({
    title: 'Education — Osman Gani Khan Masum',
    description: 'Education of Osman Gani Khan Masum (Masum Osman) — B.Sc. in Computer Science and Engineering from Daffodil International University, plus certifications in AWS, gRPC, Docker, Kubernetes, and system design.',
  })
  return (
    <Layout>
      <Education />
    </Layout>
  )
}
