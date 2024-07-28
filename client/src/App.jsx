import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactForm from './pages/ContactForm';
function App() {
  return (
    <Router>
           <Routes>
                <Route path="/" element={<ContactForm/>} />
           </Routes>
    </Router>
  )
}

export default App