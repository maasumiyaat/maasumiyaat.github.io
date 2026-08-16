import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ProgressBar from './ProgressBar'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout({ children }) {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  return (
    <>
      <ProgressBar />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}
