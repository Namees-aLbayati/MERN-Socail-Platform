import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './compoenents/main';
import Dashboard from './compoenents/dashboard';
import { Virtuoso } from 'react-virtuoso'
import FriendComp from './compoenents/UserComp/rest/friend/FriendComp';

function App() {
  return (
<Router>
<Virtuoso  />

  <Routes>
    <Route path='/' element={<Home/>}/>
<Route path='/dashboard' element={<Dashboard/>}/>
<Route path='/friend' element={<FriendComp/>}/>
  </Routes>
</Router>
  
  
  )
}

export default App
