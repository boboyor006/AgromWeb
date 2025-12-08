import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './pages/Header'
import Navbar from './pages/Navbar'
import Registrasion from './pages/Register/Register'
import Logins from "./pages/Register/Login"
import Footer from "./pages/Footer"
import About from './pages/About'
import ContactPage from './pages/Contac'
import Blog from './Components/Blog'

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        {/* Asosiy sahifa - Header ichida barcha komponentlar bor */}
        <Route path='/' element={<Header />} />
        
        {/* Register sahifasi - faqat Register komponenti */}
        <Route path='/login' element={<Logins />} />
        <Route path='/register' element={<Registrasion />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contac' element={<ContactPage/>} />
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
      
      <Footer />
    </>
  )
}

export default App