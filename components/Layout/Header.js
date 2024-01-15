'use client'
import { useRouter } from 'next/navigation'
import styles from './header.module.css'

export default function Header(){
    const router = useRouter()

    // Deleting user data stored in localStorage() and redirecting user to Login page on Logout event
    function logOutHandler(){
        localStorage.clear()
        router.push('/')
    }
    return (
        <header className={styles.header}>
            <h2>{'Hello, '+JSON.parse(localStorage.getItem('user-info')).username}</h2>
            <button onClick={logOutHandler}>Logout</button>
        </header>
    )
}