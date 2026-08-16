import Layout from '../components/Layout'
import Skills from '../components/Skills'
import { useSEO } from '../hooks/useSEO'

export default function SkillsPage() {
  useSEO({
    title: 'Skills — Osman Gani Khan Masum',
    description: 'Technical skills of Osman Gani Khan Masum (Masum Osman): Go, TypeScript, Node.js, Python, PostgreSQL, MySQL, Redis, MongoDB, AWS, GCP, Kubernetes, Docker, Kafka, RabbitMQ, gRPC, and microservices architecture.',
  })
  return (
    <Layout>
      <Skills />
    </Layout>
  )
}
