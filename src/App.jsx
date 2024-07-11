import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import ZegoCloud from './ZegoCloud'
import Video_Room from './Video_Room'
const App = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<ZegoCloud/>}/>
      <Route path='/room/:id' element={<Video_Room/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
