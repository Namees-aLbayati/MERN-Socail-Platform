import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './compoenents/main';
import Dashboard from './compoenents/dashboard';
import { Virtuoso } from 'react-virtuoso'

function App() {
  return (
<Router>
<Virtuoso  />

  <Routes>
    <Route path='/' element={<Home/>}/>
<Route path='/dashboard' element={<Dashboard/>}/>
  </Routes>
</Router>
  
  
  )
}

export default App
