import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './hooks/useTheme'
import Layout from './components/Layout'
import Hero from './components/Hero'

// Standalone pages
import AboutPage      from './pages/AboutPage'
import SkillsPage     from './pages/SkillsPage'
import ExperiencePage  from './pages/ExperiencePage'
import EducationPage  from './pages/EducationPage'
import ProjectsPage   from './pages/ProjectsPage'
import OpenSourcePage from './pages/OpenSourcePage'
import RecommendationsPage from './pages/RecommendationsPage'
import BlogList        from './pages/BlogList'
import BlogPost        from './pages/BlogPost'
import ContactPage    from './pages/ContactPage'

function Home() {
  return (
    <Layout>
      <Hero />
    </Layout>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/"            element={<Home />} />
          <Route path="/about"       element={<AboutPage />} />
          <Route path="/skills"      element={<SkillsPage />} />
          <Route path="/experience"  element={<ExperiencePage />} />
          <Route path="/education"   element={<EducationPage />} />
          <Route path="/projects"    element={<ProjectsPage />} />
          <Route path="/open-source" element={<OpenSourcePage />} />
          <Route path="/recommendations" element={<RecommendationsPage />} />
          <Route path="/blog"        element={<BlogList />} />
          <Route path="/blog/:slug"  element={<BlogPost />} />
          <Route path="/contact"     element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}