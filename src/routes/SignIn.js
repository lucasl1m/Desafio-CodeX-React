import React, { useState } from 'react'
import { checkToken, postSignIn } from '../services/AuthService'
import styles from '../styles/components/Form.module.css';
import app from '../styles/components/App.module.css'

export default function SignIn() {

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

    const toSignIn = () => {
        if (!email.match(/\S+@\S+\.\S+/)) {
            setEmailInvalid('Insira um email valido')
        } else if (!password) {
            setPasswordInvalid('Insira uma senha')
        } else {
            setEmailInvalid('')
            setPasswordInvalid('')

            postSignIn({ email, password }).then(token => {
                if (token) {
                    checkToken(token).then(res => {
                        if (res.status) {
                            localStorage.setItem('pass_ok', token)
                            window.location.reload(false)
                        }
                    }).catch(err => console.log(err))
                }
            }).catch(err => console.log(err))
        }
    }

    return (
        <div class={app.container}>
            <div className={styles.card}>
                <form action="" method="get">
                    <h1 className={styles.title}>Welcome Back</h1>
                    <p className={styles.subtitle}>Enter your credentials to acess your account</p>
                    <div className={styles.inputfield}>
                        <label htmlFor="email">{emailInvalid ? emailInvalid : 'Email'}</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email" autoComplete="off" onChange={onChangeEmail} value={email} />
                        <div className={styles.underline}></div>
                    </div>
                    <div className={styles.inputfield}>
                        <label htmlFor="password">{passwordInvalid ? passwordInvalid : 'Password'}</label>
                        <input type='password' name="" id="password" placeholder="Enter your password" value={password} onChange={onChangePassword} />
                        <div className={styles.underline}></div>
                    </div>
                    <input type="submit" value="Sing In" onClick={toSignIn} />
                    <p>
                        Not registered yet ?
                    <a href="" >Create an Account</a>
                    </p>
                </form>
            </div>
        </div>
    )
}