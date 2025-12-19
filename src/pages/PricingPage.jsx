import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

function PricingPage() {
    return (
        <div className="pricing-page">
            <Navigation />
            
            <main className="pricing-main">
                <section className="pricing-hero">
                    <div className="container">
                        <h1 className="hero-headline">Simple, Trust-Based Pricing</h1>
                        <p className="hero-subtitle">
                            Free for individuals. Commercial licenses for teams and enterprises.
                        </p>
                    </div>
                </section>

                <section className="pricing-grid-section">
                    <div className="container">
                        <div className="pricing-grid">
                            {/* Individual Plan */}
                            <div className="pricing-card individual">
                                <div className="card-tag">Open Source</div>
                                <h2 className="plan-name">Individual</h2>
                                <div className="plan-price">
                                    <span className="amount">$0</span>
                                    <span className="period">/ forever</span>
                                </div>
                                <p className="plan-desc">
                                    Perfect for solo developers, students, and open-source contributors.
                                </p>
                                <ul className="plan-features">
                                    <li>Full local indexing</li>
                                    <li>Persistent Memory (.linggen/memory)</li>
                                    <li>Visual System Map (Graph)</li>
                                    <li>Local Vector Search (LanceDB)</li>
                                    <li>Cursor & Zed MCP Integration</li>
                                </ul>
                                <Link 
                                    to="/docs" 
                                    className="pricing-btn secondary"
                                    style={{ textDecoration: 'none', textAlign: 'center', display: 'block' }}
                                >
                                    Get Started
                                </Link>
                            </div>

                            {/* Commercial Plan */}
                            <div className="pricing-card commercial featured">
                                <div className="card-tag primary">Recommended</div>
                                <h2 className="plan-name">Commercial</h2>
                                <div className="plan-price">
                                    <span className="amount">$50</span>
                                    <span className="period">/ user / year</span>
                                </div>
                                <p className="plan-desc">
                                    For professional teams (5+) and companies using Linggen in commercial environments.
                                </p>
                                <ul className="plan-features">
                                    <li><strong>All Individual features</strong></li>
                                    <li>Commercial Use Rights</li>
                                    <li>Team Memory Sync (Coming Soon)</li>
                                    <li>Priority Technical Support</li>
                                    <li>Shared Knowledge Graph (Coming Soon)</li>
                                </ul>
                                <a 
                                    href="mailto:linggen77@gmail.com?subject=Commercial License Inquiry" 
                                    className="pricing-btn primary"
                                    style={{ textDecoration: 'none', textAlign: 'center', display: 'block' }}
                                >
                                    Contact for License
                                </a>
                            </div>

                            {/* Enterprise Plan */}
                            <div className="pricing-card enterprise">
                                <div className="card-tag">High Control</div>
                                <h2 className="plan-name">Enterprise</h2>
                                <div className="plan-price">
                                    <span className="amount">Custom</span>
                                </div>
                                <p className="plan-desc">
                                    For large organizations requiring centralized control, security, and governance.
                                </p>
                                <ul className="plan-features">
                                    <li><strong>All Commercial features</strong></li>
                                    <li>Single Sign-On (SSO)</li>
                                    <li>Role-Based Access Control (RBAC)</li>
                                    <li>Security & Audit Logs</li>
                                    <li>On-Prem / Private Cloud Deployment</li>
                                    <li>SLA & Dedicated Account Manager</li>
                                </ul>
                                <a 
                                    href="mailto:linggen77@gmail.com?subject=Enterprise Inquiry" 
                                    className="pricing-btn secondary"
                                    style={{ textDecoration: 'none', textAlign: 'center', display: 'block' }}
                                >
                                    Contact Sales
                                </a>
                            </div>
                        </div>

                        <div className="pricing-contact-manual">
                            <p>Prefer to copy? Contact us at: <strong>linggen77@gmail.com</strong></p>
                        </div>

                        <div className="pricing-faq">
                            <h3>FAQ</h3>
                            <div className="faq-item">
                                <h4>Do I need a license for a team of 2?</h4>
                                <p>
                                    No. Linggen is free for small teams up to 5 users. Once your team grows beyond 5, 
                                    we ask you to purchase a commercial license to support the project.
                                </p>
                            </div>
                            <div className="faq-item">
                                <h4>Is there a SaaS version?</h4>
                                <p>
                                    Linggen is primarily local-first to ensure your code stays private. We are working on 
                                    a managed team sync service for teams that want zero-devops shared memory.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default PricingPage

