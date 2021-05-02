import React, { useState } from 'react'
import { postSignIn } from '../services/AuthService'
import styles from '../styles/components/Form.module.css';
import app from '../styles/components/App.module.css'
import { useHistory, Link } from 'react-router-dom'

export default function SignIn() {

    const [password, setPassword] = useState('')
    const [emailInvalid, setEmailInvalid] = useState('')
    const [email, setEmail] = useState('')
    const [passwordInvalid, setPasswordInvalid] = useState('')

    const history = useHistory()

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
                    localStorage.setItem('task-token', token.token)
                    localStorage.setItem('id', token.user._id)
                    history.push('/task/create')
            }
        }).catch(err => console.log(err))
    }
    }

    return (
        <div class={app.container}>
            <div className={styles.card}>
                <form>
                    <h1 className={styles.title}>Login</h1>
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
                        <Link to={'/user/create'}><a>SingUp</a></Link>
                    </p>
                </form>
            </div>
        </div>
    )
}