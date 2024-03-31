import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector } from 'react-redux'
import { Route, Router,Routes} from 'react-router-dom'
import HomePages from './pages/HomePages'
import PokeDetails from './pages/PokeDetails'
import PokedexPages from './pages/PokedexPages'
import ProtecterRouters from './pages/ProtecterRouters'
import "./card.css"

function App() {
  
  return (
    <>
    <Routes>
      <Route element={<ProtecterRouters/>}>
        <Route path='/pokedex' element={<PokedexPages/>}></Route>
        <Route path='/pokedex/:name' element={<PokeDetails/>}></Route>
      </Route>
      <Route path='/' element={<HomePages/>}></Route>
      
    </Routes>
    </>
  )
}

export default App
