import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Experience from './components/Experience'
import Skills from './components/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar></Navbar>
     <div className="container">
     <Home></Home>
      <Experience></Experience>
      <Skills></Skills>
      <Projects></Projects>
     </div>
     
    </>
  )
}

export default App
