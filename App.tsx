
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import JournalsList from './pages/JournalsList';
import JournalOverview from './pages/JournalOverview';
import ArticlesList from './pages/ArticlesList';
import ArticleDetails from './pages/ArticleDetails';
import EditorialBoard from './pages/EditorialBoard';
import Metrics from './pages/Metrics';
import Submissions from './pages/Submissions';
import Resources from './pages/Resources';
import About from './pages/About';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/journals" element={<JournalsList />} />
            <Route path="/submissions" element={<Submissions />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal/:id/overview" element={<JournalOverview />} />
            <Route path="/journal/:id/articles" element={<ArticlesList />} />
            <Route path="/journal/:journalId/article/:articleId" element={<ArticleDetails />} />
            <Route path="/journal/:id/editorial-board" element={<EditorialBoard />} />
            <Route path="/journal/:id/metrics" element={<Metrics />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
