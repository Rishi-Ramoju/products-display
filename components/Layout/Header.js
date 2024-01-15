'use client'
import { useRouter } from 'next/navigation'
import styles from './Header.module.css'
import { useEffect, useState } from 'react'

export default function Header(){
    const router = useRouter()
    const [name,setName] = useState('')
    useEffect(()=>{
        if (typeof window !== 'undefined') {
            const username = JSON.parse(localStorage.getItem('user-info')).username;
            setName(username)
        }
    },[])
    // Deleting user data stored in localStorage() and redirecting user to Login page on Logout event
    function logOutHandler(){
        localStorage.clear()
        router.push('/')
    }
    return (
        <header className={styles.header}>
            <h2>{`Hello, ${name}`}</h2>
            <button onClick={logOutHandler}>Logout</button>
        </header>
    )
}