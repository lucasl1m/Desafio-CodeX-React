import React, { useState } from 'react'
import {checkToken, postSignUp} from '../services/AuthService'
import styles from '../styles/components/Form.module.css';

export default function SignUp() {

    const [password, setPassword] = useState('')
    const [emailInvalid, setEmailInvalid] = useState('')
    const [email, setEmail] = useState('')
    const [passwordInvalid, setPasswordInvalid] = useState('')
   

    const onChangeEmail = (event) => {
        setEmailInvalid('')
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPasswordInvalid('')
        setPassword(event.target.value)
    }

    const toSignUp = () => {
        if (!email.match(/\S+@\S+\.\S+/)) {
            setEmailInvalid('Insira um email valido')
    } else if (!password) {
            setPasswordInvalid('Insisra uma senha')
    } else {
        setEmailInvalid('')
        setPasswordInvalid('')

        postSignUp({email, password}).then(token => {
            if (token) {
                checkToken(token).then(res => {
                    if (res.status) {
                        localStorage.setItem('task-token', token)
                        window.location.reload(false)
                    }
                }).catch(err => console.log(err))
            }
        }).catch(err => console.log(err))
    }
    }

    return ( 
        <div className={styles.card}> 
        <form action="" method="get">
            <h1 className={styles.title}>Create Account</h1>
            <p className={styles.subtitle}>Enter your credentials to create your account</p>

            <div className={styles.inputfield}>
                <label htmlFor="email">{emailInvalid ? emailInvalid : 'Email'}</label>
                <input type="email" name="email" id="email" placeholder="Enter your email" autoComplete="off" onChange={onChangeEmail} value={email}/>
                <div className={styles.underline}></div>
            </div>

            <div className={styles.inputfield}>
                <label htmlFor="password">{passwordInvalid ? passwordInvalid : 'Password'}</label>
                <input type='password' name="" id="password" placeholder="Enter your password" value={password} onChange={onChangePassword}/>
                <div className={styles.underline}></div>
            </div>

            <input type="submit" value="Sing Up" onClick={toSignUp} />

            <p>
            Already have an Account ?                
            <a href="" >Sign In</a>
            </p>
        </form>
    </div>
    )
}