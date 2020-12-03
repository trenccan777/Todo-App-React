import React from 'react'
import Header from './components/Header'
import './App.css'
import Todos from './components/Todos'

export default function App() {
  return (
    <div id='page'>
        <div className="container">
          <Header/>
          <Todos/>
        </div>
    </div>
  )
}
