import React from 'react'
import NavBar from './components/NavBar'
import './App.css'
import HeroSection from './components/HeroSection'
import Card from './components/Card'

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Card
        img="../images/katie-zaferes.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136} />
    </>
  )
}

export default App
