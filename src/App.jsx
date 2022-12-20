import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/header'
import Search from './components/search'
import 'instantsearch.css/themes/satellite.css';

function App() {

  return (
    <div>
      <Header />
      <Search />
    </div>
  )
}

export default App
