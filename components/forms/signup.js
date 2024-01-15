import { useRouter } from 'next/navigation';
import styles from './signup.module.css'
import { useState } from "react";

export default function Signup(){
    const [userName,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const router = useRouter()

/*  On Sign Up event, a POST request is sent to the add user api. Since new user name cannot be added to database, Token of an already existing user is being utilized.
    Similar to Login process, Auth Token along with user data are stored in localStorage(). And user is navigated to Products Display page. 
*/
    async function signUpHandler(){
        event.preventDefault()
        let TOKEN = await fetch('https://dummyjson.com/auth/login',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "username": "kminchelle",
                "password": "0lelplR"
            })
        })
        TOKEN = await TOKEN.json()
        TOKEN = TOKEN.token
        let response = await fetch('https://dummyjson.com/users/add',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: userName,
                email: email,
                password: password,
            })
        })
        if(!response.ok){
            throw new Error('something went wrong')
        }
        let responseData = await response.json()
        responseData.token = TOKEN
        localStorage.setItem('user-info',JSON.stringify(responseData))
        router.push('/products')
    }
    return (
        <div className={styles.signup}>
            <form className={styles.form}>
                <div className={styles.control}>
                    <label htmlFor="username">User Name</label>
                    <input type="text" id="username" value={userName} onChange={e=>setUserName(e.target.value)} required/>
                </div>
                <div className={styles.control}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={e=>setEmail(e.target.value)} required/>
                </div>
                <div className={styles.control}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={e=>setPassword(e.target.value)} required/>
                </div>
                <button onClick={signUpHandler}>Sign Up</button>
            </form>
        </div>
    )
}