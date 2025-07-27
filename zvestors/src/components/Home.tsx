import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Master Your Financial Future</h1>
            <p className="hero-subtitle">
              Empowering Gen Z students with essential financial literacy through 
              interactive modules and practical learning experiences.
            </p>
            <div className="hero-buttons">
              <Link to="/register">
                <button className="primary-button">Start Learning</button>
              </Link>
              <button className="secondary-button">Learn More</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="placeholder-chart">
              <div className="chart-bar" style={{height: '60%'}}></div>
              <div className="chart-bar" style={{height: '80%'}}></div>
              <div className="chart-bar" style={{height: '45%'}}></div>
              <div className="chart-bar" style={{height: '90%'}}></div>
              <div className="chart-bar" style={{height: '70%'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2>Why Choose Zvestors?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Interactive Modules</h3>
              <p>Engaging content designed specifically for Gen Z learning preferences</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Practical Skills</h3>
              <p>Real-world financial scenarios and hands-on learning experiences</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Track Progress</h3>
              <p>Monitor your learning journey and celebrate achievements</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Building Financial Confidence</h2>
              <p>
                Zvestors is a comprehensive financial literacy platform designed to bridge 
                the knowledge gap for Gen Z students. Our carefully crafted modules cover 
                everything from basic budgeting to investment strategies.
              </p>
              <ul className="about-features">
                <li>✓ Comprehensive curriculum covering all financial basics</li>
                <li>✓ Interactive quizzes and practical exercises</li>
                <li>✓ Progress tracking and achievement system</li>
                <li>✓ Mobile-friendly design for learning on the go</li>
              </ul>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>10+</h3>
                <p>Learning Modules</p>
              </div>
              <div className="stat">
                <h3>100%</h3>
                <p>Free Access</p>
              </div>
              <div className="stat">
                <h3>24/7</h3>
                <p>Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Start Your Financial Journey?</h2>
          <p>Join thousands of students already building their financial future</p>
          <Link to="/register">
            <button className="primary-button large">Get Started Today</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
