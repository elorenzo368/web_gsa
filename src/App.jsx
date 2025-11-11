import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import Citrus from './pages/Citrus'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/citrus" element={<Citrus />} />
      </Routes>
    </Router>
  )
}

export default App

