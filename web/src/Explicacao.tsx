import React, { useState } from 'react'
import './App.css'

import Header from './Header'

function App() {
  // const counter = 1
  const [counter, setCounter] = useState(0) // [valor do estado, funcao para atualizar o valor do estado]

  function handleClick() {
    setCounter(counter + 1)
  }

  return (
    <div>
      <Header />
      <h1> {counter} </h1>

      <button type="button" onClick={handleClick}>Aumentar</button>
    </div>
  )
}

export default App
