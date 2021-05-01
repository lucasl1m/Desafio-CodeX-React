import React from 'react'
import app from '../styles/components/App.module.css'
import style from '../styles/components/LoadError.module.css'

export default function LoadError() {
    return (
        <div className={app.container}>
            <div>
                <h2 className={style.error}>Loading Error</h2>
            </div>
            <button className={style.button} onClick={() => window.location.reload(false)}>
                Click here to reload the page 
            </button>
        </div>
    )
}