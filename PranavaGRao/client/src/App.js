import React from 'react'
import LandingPage from './pages/LandingPage'
import './App.css'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className='app-wrapper'>
      <Router>
        <Routes>
          <Route path='/' element={ <LandingPage/>}/>
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
