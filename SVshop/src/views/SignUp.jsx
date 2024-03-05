import React from 'react'

export default function SignUp() {
  return (
    <div>
        <form style={{display:'flex', flexDirection:'column', gap:'10px'}} action="/signup" method='post'>
            <input type="text" placeholder='name'/>
            <input type="email" placeholder='email' />
            <input type="password" placeholder='password'/>
            <input type="submit" value={'sign up'}/>
        </form>
    </div>
  )
}
