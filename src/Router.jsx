import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import HomePage from './pages/HomePage'
import BiographyPage from './pages/BiographyPage'
import FunFacts from './pages/FunFacts'
import Media from './pages/Media'
import NavFeatures from './pages/NavFeatures'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<App/>}>
            <Route path='' element ={<HomePage/>}/>
            <Route path='/biography-page' element = {<BiographyPage/>} />
            <Route path='/fun-facts' element={<FunFacts/>} />
            <Route path='/media' element={<Media/>} />
            <Route path='/features' element={<NavFeatures/>}/>

        </Route>
    </Routes>
  )
}

export default Router