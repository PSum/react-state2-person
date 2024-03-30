import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [person, setPerson] = useState({name: "", lastName: ""})
  let fullname = person.name + " " + person.lastName
  return (
    <>
    <form class="formi">
      <input type="text" />
      <input type="text" />
    </form>
    <p>{fullname}</p>
    </>
  )
}

export default App
