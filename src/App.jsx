import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DocsLayout from './pages/DocsLayout'
import PricingPage from './pages/PricingPage'
import './App.css'

function AppContent() {
  const location = useLocation()

  useEffect(() => {
    // Scroll-triggered animations - run after route change
    const observerOptions = {
      threshold: 0, // Trigger as soon as even 1 pixel is visible
      rootMargin: '0px 0px 200px 0px' // Trigger 200px before it enters viewport
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
          entry.target.classList.add('animate-in')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    const setupObserver = () => {
      const elements = document.querySelectorAll('.feature-card, .guide-card, .step, .use-case-card, .advantage-card, .doc-card, .video-container');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        // If element is already in view or has been passed, animate immediately
        if (rect.top < window.innerHeight + 100) {
          el.classList.add('animate-in');
        } else {
          observer.observe(el);
        }
      });
    };

    // Initial setup
    setupObserver();

    // Re-run after a short delay just in case
    const timeoutId = setTimeout(setupObserver, 200);

    return () => {
      clearTimeout(timeoutId)
      observer.disconnect()
    }
  }, [location.pathname])

  return (
    <div className="App">
      <div className="spiritual-energy"></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/docs" element={<DocsLayout />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
