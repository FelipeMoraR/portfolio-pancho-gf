import { useState, useEffect } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000"

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`${URL}/api`)
      .then((res) => res.json())
      .then((data) => setData(data.time))
  }, [])

  console.log(data)
  return(
    <div className='App'>
      <header className='App-header'>
        <img src={viteLogo} className='App-logo' alt='logo' />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  )


}

export default App
