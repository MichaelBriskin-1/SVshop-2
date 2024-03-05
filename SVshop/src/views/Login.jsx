import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div style={{display:'flex', flexDirection:'column', gap:'20px'}}>
            <form action="signin" method='post'>
        <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                <input type="email" placeholder='email' onChange={(ev)=>{setEmail(ev.target.value)}}/>
                <input type="password" placeholder='password' onChange={(ev)=>{setPassword(ev.target.value)}}/>
        </div>
            </form>
        <div style={{display:'flex', flexDirection:'row', gap:'10px'}}>
            <button>sign in</button>
            <Link to={'/signup'}><button>sign up</button></Link>
        </div>
    </div>
  )
}
