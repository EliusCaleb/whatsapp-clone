import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import{ auth, provider} from '../firebase'

function Login() {
    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then((result)=> console.log(result))
        .catch((error) => alert(error.message))
    }
  return (
      <div className='login'>
        <div className='login__container'>
           <img src='https://cdn3.iconfinder.com/data/icons/social-media-logos-flat-colorful/2048/5302_-_Whatsapp-512.png' alt='/'/>
           <div className='login__text'>
                 <h1>Sign To WhatsApp</h1>
           </div>
           <Button type='submit' onClick={signIn}>
              Sign With Google
           </Button>
        </div>
        <h1>LogIn</h1>
      </div>
  )
}

export default Login