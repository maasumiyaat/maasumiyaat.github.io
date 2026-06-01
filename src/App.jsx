import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './hooks/useTheme'

// Main portfolio layout
import ProgressBar from './components/ProgressBar'
import Nav        from './components/Nav'
import Hero       from './components/Hero'
import About      from './components/About'
import Experience from './components/Experience'
import Projects   from './components/Projects'
import Blog       from './components/Blog'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

// Blog pages
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'

function Portfolio() {
  return (
    <>
      <ProgressBar />
      <Nav />
      <main>
        <Hero />
        <hr className="divider" />
        <About />
        <hr className="divider" />
        <Experience />
        <hr className="divider" />
        <Projects />
        <hr className="divider" />
        <Blog />
        <hr className="divider" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/"           element={<Portfolio />} />
          <Route path="/blog"       element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}