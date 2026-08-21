import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { Now } from './pages/Now';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

function PageTitleHandler() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const path = location.pathname;

    if (path === '/') {
      document.title = 'Kareem // ~/0Kareem0 — Personal Digital Space';
    } else if (path === '/about') {
      document.title = 'Kareem // ~/about — Identity & Systems Spec';
    } else if (path === '/projects') {
      document.title = 'Kareem // ~/projects — Project Archive (007)';
    } else if (path.startsWith('/projects/')) {
      const slug = path.split('/')[2];
      document.title = `Kareem // ~/projects/${slug} — Case Study`;
    } else if (path === '/now') {
      document.title = 'Kareem // ~/now — Status & Activity Log';
    } else if (path === '/contact') {
      document.title = 'Kareem // ~/contact — Communication Terminal';
    } else {
      document.title = 'Kareem // 404 — Path Not Found';
    }
  }, [location]);

  return null;
}

export function App() {
  return (
    <BrowserRouter>
      <PageTitleHandler />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/now" element={<Now />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
