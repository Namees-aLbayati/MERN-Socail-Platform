import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './compoenents/Home';
import Dashboard from './compoenents/dashboard';
function App() {
  return (
<Router>
  <Routes>
    <Route path='/' element={<Home/>}/>
<Route path='/dashboard' element={<Dashboard/>}/>
  </Routes>
</Router>
  
  
  )
}

export default App
