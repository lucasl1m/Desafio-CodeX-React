import React, { useEffect, useState } from 'react'
import App from './App'

import SignIn from './routes/SignIn'
import {checkToken} from './services/AuthService'
import LoadError from './routes/LoadError'
import Loading from './routes/Loading'

export default function Routes() {
    const [tokenStatus, setTokenStatus] = useState(2)
    const [token, setToken] = useState('')

    useEffect(() => {
        setToken(localStorage.getItem('createUserToken'))
        checkToken(token).then(res => {
            res.status ? setTokenStatus(2) : setTokenStatus(3)
        }).catch(err => {
            console.log(err)
            setTokenStatus(4)
        })
    }, [token])

    if (tokenStatus === 1) {
        return <Loading />
    } else if (tokenStatus === 2) {
        return <App />
    } else if (tokenStatus === 4) {
        return <SignIn />
    } else if (tokenStatus === 4) {
        return <LoadError />
    }
}