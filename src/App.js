import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Countries from './components/Countries'

function App() {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [click, setClick] = useState(false)

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const display = () => {
    setClick(!click)
  }

  const hook = () => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      setCountries(response.data)
    })
  }

  useEffect(hook, [])

  return (
    <>
      <label>
        find countries <input value={search} onChange={handleSearch} />
      </label>
      <Countries
        countries={countries}
        search={search}
        click={click}
        onClick={display}
      />
    </>
  )
}

export default App
