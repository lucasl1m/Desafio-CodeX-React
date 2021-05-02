import React, { useState } from 'react'
import { postSingUp } from '../services/AuthService'
import { useHistory } from 'react-router-dom'
import styles from '../styles/components/Form.module.css'

export default function SignUp() {

    const [emailInvalid, setEmailInvalid] = useState('')
    const [email, setEmail] = useState('')
    const [passwordInvalid, setPasswordInvalid] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

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
        }
        postSingUp({ email, password }).then(status => {
            console.log(status)
            if (status === 201) {
                history.push('/user/auth')
            }
        }).catch(err => console.log(err))
    }

    return (
        <div className={styles.card}>
            <form>
                <h1 className={styles.title}>Create Account</h1>
                <p className={styles.subtitle}>Enter your credentials to create your account</p>

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

                <input type="submit" value="Sing Up" onClick={toSignUp} />

                <p>
                    Already have an Account ?
                    <a>Sing In</a> 
                </p>
            </form>
        </div>
    )
}