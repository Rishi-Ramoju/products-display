'use client'
import { useRouter } from 'next/navigation'
import styles from './Header.module.css'
import { useEffect } from 'react'

export default function Header(){
    const router = useRouter()
    let username = ''
    useEffect(()=>{
        username = JSON.parse(localStorage.getItem('user-info')).username
    },[])
    // Deleting user data stored in localStorage() and redirecting user to Login page on Logout event
    function logOutHandler(){
        localStorage.clear()
        router.push('/')
    }
    return (
        <header className={styles.header}>
            <h2>{'Hello, '+username}</h2>
            <button onClick={logOutHandler}>Logout</button>
        </header>
    )
}