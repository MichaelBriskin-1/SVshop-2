import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Login from './views/Login'
import SignUp from './views/SignUp'

function App() {
  const [users, setUsers] = useState([])

  return (
      <div style={{backgroundColor:'lightblue' }}>
        <h4>SV-Shop</h4>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>


      </div>
  )
}

export default App
