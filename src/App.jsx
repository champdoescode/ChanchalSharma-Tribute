import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import HomeFlex from './pages/HomePage/HomeFlex'
import Biography from './pages/HomePage/Biography'
import Achievements from './pages/HomePage/Achievements'
import Footer from './pages/HomePage/Footer'
import AllRightsReserved from './pages/HomePage/AllRightsReserved'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      
    </>
  )
}

export default App
