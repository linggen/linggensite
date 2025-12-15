import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Features from '../components/Features'
import GettingStarted from '../components/GettingStarted'
import VideoDemo from '../components/VideoDemo'
import BetaDisclaimer from '../components/BetaDisclaimer'
import Footer from '../components/Footer'

function HomePage() {
    return (
        <>
            <Navigation />
            <Hero />
            <Features />
            <GettingStarted />
            <VideoDemo />
            <BetaDisclaimer />
            <Footer />
        </>
    )
}

export default HomePage
