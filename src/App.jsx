import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Layout from './layout/Layout.jsx';

export default function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<Projects />} />
        <Route path="/app/contact" element={<Contact />} />
        <Route path="/app/about" element={<About />} />
      </Routes>
    </Layout>
    </BrowserRouter>
  );
}
