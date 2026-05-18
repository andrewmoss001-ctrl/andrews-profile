import './index.css'  // Generic wireframes first
import './App.css'    // Tailwind & DaisyUI Theme configurations LAST

import Header from './header'
import Body from './body'
import Contact from './contact'
import Footer from './footer'

import "tailwindcss";

function App() {
  return (
    <>
      <Header/>
      <Body/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App