import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/home/Navigation.jsx'
import Hero from './components/home/Hero.jsx'
import Feature from './components/home/Feature.jsx'
import Contact from './components/home/Contact.jsx'
// import Home from './pages/Home';
import Collections from './pages/Collections';
import About from './pages/About.jsx';
import Contacts from './pages/Contacts';
const App = () => {
  return (
    <Router>
    <Navigation />
    <Routes>
        <Route path="/" element={
        <>
            <Hero />
            <Feature />
            <Contact />
        </>
      } />
        
        <Route path="/collections" element={<Collections />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
    </Router>
  )
}

export default App