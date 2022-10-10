import React from 'react'
import HTMLPage from './pages/HTML'
import CSSPage from './pages/CSS'
import JavascriptPage from './pages/Javascript'
import Home from './pages/Home'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/html" element={<HTMLPage />} />
        <Route path="/css" element={<CSSPage />} />
        <Route path="/javascript" element={<JavascriptPage />} />
      </Routes>
    </Router>
  )
}
