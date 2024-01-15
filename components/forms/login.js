import { useState } from "react";
import styles from './login.module.css'
import { useRouter } from "next/navigation";

export default function Login(){
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    /* On Login event, a POST request is sent to the auth login api.
       And JW Token received in the body of response on successful api call, is stored in the localStorage() along with user info. (*) 
       And user is navigated to Products Display page. (**) */
    async function loginHandler(){
        event.preventDefault()
        let response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              
              username: userName,
              password: password,
            })
        })
        if(!response.ok){
            throw new Error('something went wrong')
        }
        let responseData = await response.json()
        localStorage.setItem('user-info',JSON.stringify(responseData))          // *
        router.push('/products')                                                // **
    }
    return (
        <div className={styles.login}>
            <form className={styles.form}>
                <div className={styles.control}>
                    <label htmlFor="username">User Name</label>
                    <input type="text" id="username" value={userName} onChange={e=>setUserName(e.target.value)} required/>
                </div>
                <div className={styles.control}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={e=>setPassword(e.target.value)} required/>
                </div>
                <button onClick={loginHandler}>Login</button>
            </form>
        </div>
    )
}