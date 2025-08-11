import React, { useState } from 'react';
import './App.css';
import { modules } from './modulesData';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'modules' | 'completion'>('home');
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [completedModules, setCompletedModules] = useState<number[]>([]);

  const showHome = () => setCurrentPage('home');
  const showModules = () => setCurrentPage('modules');

  const nextModule = () => {
    if (currentModuleIndex < modules.length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1);
      setShowQuiz(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const startQuiz = () => {
    setShowQuiz(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const completeModule = () => {
    if (!completedModules.includes(modules[currentModuleIndex].id)) {
      setCompletedModules([...completedModules, modules[currentModuleIndex].id]);
    }
    if (currentModuleIndex < modules.length - 1) {
      nextModule();
    } else {
      setCurrentPage('completion');
    }
  };

  const formatTextWithBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.substring(2, part.length - 2)}</strong>;
      }
      return part;
    });
  };

  // Quiz Component
  const QuizComponent = ({ quiz, onBack }: { quiz: any, onBack: () => void }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
    const [showExplanation, setShowExplanation] = useState(false);
    const [showResults, setShowResults] = useState(false);

    const currentQuestion = quiz.questions[currentQuestionIndex];

    const handleAnswerSelect = (answerIndex: number) => {
      const newAnswers = [...selectedAnswers];
      newAnswers[currentQuestionIndex] = answerIndex;
      setSelectedAnswers(newAnswers);
    };

    const handleNext = () => {
      if (selectedAnswers[currentQuestionIndex] !== undefined) {
        if (currentQuestionIndex < quiz.questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setShowExplanation(false);
        } else {
          setShowResults(true);
        }
      }
    };

    const handleSubmitAnswer = () => {
      setShowExplanation(true);
    };

    const calculateScore = () => {
      return selectedAnswers.reduce((score, answer, index) => {
        return score + (answer === quiz.questions[index].correctAnswer ? 1 : 0);
      }, 0);
    };

    if (showResults) {
      const score = calculateScore();
      const percentage = Math.round((score / quiz.questions.length) * 100);
      const isExcellent = score === quiz.questions.length;
      const isGood = score >= quiz.questions.length * 0.7;

      return (
        <div className="quiz-results">
          <div className="results-header">
            <h2>🎉 Quiz Complete!</h2>
            <div className="score-display">
              <div className="score-circle">
                <span className="score-number">{percentage}%</span>
                <span className="score-label">Score</span>
              </div>
            </div>
            <p>You got {score} out of {quiz.questions.length} questions correct!</p>
          </div>

          <div className="encouragement">
            <p>
              {isExcellent ?
                "🌟 Outstanding! You've completely mastered this module! Your understanding of financial concepts is excellent." :
                isGood ?
                "🎯 Great job! You have a solid grasp of the concepts. Keep up the excellent work!" :
                "📚 Good effort! Learning is a journey. You're building your financial knowledge step by step!"}
            </p>
          </div>

          {!isExcellent && (
            <div className="improvement-tip">
              <p><strong>💡 Tip:</strong> Review the module content again to strengthen your understanding of the concepts you missed.</p>
            </div>
          )}

          <button className="primary-button" onClick={completeModule}>
            {currentModuleIndex < modules.length - 1 ? 'Continue to Next Module' : 'Complete Course'}
          </button>
        </div>
      );
    }

    return (
      <div className="quiz-container">
        <div className="quiz-card">
          <div className="quiz-header">
            <h2>Quiz - Question {currentQuestionIndex + 1} of {quiz.questions.length}</h2>
            <button className="back-button" onClick={onBack}>← Back to Module</button>
          </div>

          <div className="question-section">
            <h3>{currentQuestion.question}</h3>
            <div className="options-grid">
              {currentQuestion.options.map((option: string, index: number) => (
                <button
                  key={index}
                  className={`option-button ${selectedAnswers[currentQuestionIndex] === index ? 'selected' : ''}`}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showExplanation}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {showExplanation && (
            <div className={`explanation ${selectedAnswers[currentQuestionIndex] === currentQuestion.correctAnswer ? 'correct' : 'incorrect'}`}>
              <h4>{selectedAnswers[currentQuestionIndex] === currentQuestion.correctAnswer ? '✅ Correct!' : '❌ Incorrect'}</h4>
              <p>{currentQuestion.explanation}</p>
            </div>
          )}

          <div className="quiz-actions">
            {!showExplanation ? (
              <button 
                className="primary-button" 
                onClick={handleSubmitAnswer}
                disabled={selectedAnswers[currentQuestionIndex] === undefined}
              >
                Submit Answer
              </button>
            ) : (
              <button className="primary-button" onClick={handleNext}>
                {currentQuestionIndex < quiz.questions.length - 1 ? 'Next Question' : 'View Results'}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  if (currentPage === 'completion') {
    return (
      <div className="completion-page">
        <div className="completion-container">
          <div className="completion-header">
            <h1>🎉 Congratulations!</h1>
            <p>You've successfully completed the Zvestors Financial Literacy Course!</p>
          </div>

          <div className="completion-stats">
            <div className="completion-stat">
              <div className="completion-stat-number">{modules.length}</div>
              <div className="completion-stat-label">Modules Completed</div>
            </div>
            <div className="completion-stat">
              <div className="completion-stat-number">{completedModules.length}</div>
              <div className="completion-stat-label">Quizzes Passed</div>
            </div>
            <div className="completion-stat">
              <div className="completion-stat-number">100%</div>
              <div className="completion-stat-label">Course Progress</div>
            </div>
          </div>

          <div className="completion-message">
            <p>
              You've taken the first crucial step towards financial independence! 
              You now have the knowledge to make informed investment decisions and build wealth over time.
            </p>
            
            <h3>🚀 What's Next?</h3>
            <ul>
              <li>Open your first Demat account and start investing</li>
              <li>Apply the value investing principles you've learned</li>
              <li>Start building your emergency fund</li>
              <li>Continue learning with advanced modules (coming soon!)</li>
              <li>Join our community of young investors</li>
            </ul>
          </div>

          <div className="completion-actions">
            <button className="primary-button large" onClick={showHome}>
              Back to Home
            </button>
            <button className="secondary-button large" onClick={() => setCurrentPage('modules')}>
              Review Modules
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'modules') {
    return (
      <div className="app">
        <div className="modules-container">
          {!showQuiz ? (
            <div className="module-content">
              <div className="module-header">
                <button className="back-button" onClick={showHome}>← Back to Home</button>
                <h1>Module {modules[currentModuleIndex].id}: {modules[currentModuleIndex].title}</h1>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: `${((currentModuleIndex + 1) / modules.length) * 100}%`}}></div>
                </div>
                <p>Module {currentModuleIndex + 1} of {modules.length}</p>
              </div>

              <div className="module-text">
                {modules[currentModuleIndex].image && (
                  <div className="module-image">
                    <img
                      src={modules[currentModuleIndex].image}
                      alt={modules[currentModuleIndex].title}
                      className="module-img"
                    />
                  </div>
                )}
                {modules[currentModuleIndex].content.split('\n').map((line, index) => {
                  if (line.startsWith('# ')) {
                    return <h1 key={index}>{line.substring(2)}</h1>;
                  } else if (line.startsWith('## ')) {
                    return <h2 key={index}>{line.substring(3)}</h2>;
                  } else if (line.startsWith('### ')) {
                    return <h3 key={index}>{line.substring(4)}</h3>;
                  } else if (line.startsWith('- ')) {
                    return <li key={index}>{formatTextWithBold(line.substring(2))}</li>;
                  } else if (line.trim() === '') {
                    return <br key={index} />;
                  } else {
                    return <p key={index}>{formatTextWithBold(line)}</p>;
                  }
                })}
              </div>

              <div className="module-actions">
                {modules[currentModuleIndex].hasQuiz ? (
                  <button className="primary-button" onClick={startQuiz}>
                    Take Quiz
                  </button>
                ) : (
                  <button className="primary-button" onClick={completeModule}>
                    {currentModuleIndex < modules.length - 1 ? 'Next Module' : 'Complete Course'}
                  </button>
                )}
              </div>
            </div>
          ) : (
            <QuizComponent 
              quiz={modules[currentModuleIndex].quiz} 
              onBack={() => setShowQuiz(false)} 
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="landing-page">
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                Master Your Money with <span className="brand-highlight">Zvestors</span>
              </h1>
              <p className="hero-subtitle">
                Learn investing, build wealth, and secure your financial future with our comprehensive course designed for young Indians.
              </p>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">{modules.length}</span>
                  <span className="stat-label">Interactive Modules</span>
                </div>
                <div className="stat">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Quizzes</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Free</span>
                </div>
              </div>
              <div className="hero-actions">
                <button className="primary-button large" onClick={showModules}>Start Learning Now</button>
              </div>
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="container">
            <h2>Why Choose Zvestors?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📚</div>
                <h3>Beginner Friendly</h3>
                <p>Start from zero knowledge and build expertise step by step</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🇮🇳</div>
                <h3>India Focused</h3>
                <p>Learn about Indian markets, regulations, and investment options</p>
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

        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-brand">
                <h3>Zvestors</h3>
                <p>Empowering young Indians with financial knowledge</p>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2024 Zvestors. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
