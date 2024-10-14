import './App.css'
import About from './components/About/About'
import Contact from './components/contact/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/nav/Navbar'
import Services from './components/services/Services'
import Work from './components/work/Work'

function App() {


  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Work/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
