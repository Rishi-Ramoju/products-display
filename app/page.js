'use client'
import styles from './page.module.css'
import { useState } from 'react'
import Signup from '../components/forms/signup'
import Login from '../components/forms/login'
import { useRouter } from 'next/navigation'

export default function Home() {
  
  const [isLogin,setIsLogin] = useState(true)
  const router = useRouter()
  function signUpHandler(){
    setIsLogin(!isLogin)
  }
  return (
    <section className={styles.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      {isLogin && <Login />}
      {!isLogin && <Signup/>}
      <div className={styles.actions}>
        <u onClick={signUpHandler}>{isLogin ? 'New User?' : 'Existing User?'}</u>
      </div>
    </section>
  )
}
