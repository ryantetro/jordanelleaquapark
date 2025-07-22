import { MainLayout } from './layouts/MainLayout'
import { Hero } from './components/Hero'
import { HowToBook } from './components/HowToBook'
import { WhyAquaPark } from './components/WhyAquaPark'
import Pricing from './components/Pricing'
import { Routes, Route } from 'react-router-dom'
import FAQPage from './pages/FAQ'
import ContactPage from './pages/Contact'

function Home() {
  return (
    <MainLayout>
      <Hero />
      {/* <About /> */}
      {/* <Features /> */}
      {/* Add new sections here: Showcase, Pricing, etc. */}
      <HowToBook />
      <Pricing />
      <WhyAquaPark />
    </MainLayout>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/FAQ" element={<FAQPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}

export default App
