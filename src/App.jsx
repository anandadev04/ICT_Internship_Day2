import { useState } from 'react'
import './App.css'
import View from './components/View'
import Records from './components/Records'
import Add from './components/Add'

function App() {
  return (
    <>
      <h1>Welcome to React Session</h1>
      <View />
      <br />
      <Records />
      <br />
      <Add/>
    </>
  )
}

export default App
