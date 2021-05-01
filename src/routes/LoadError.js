import React from 'react'
import app from '../styles/components/App.module.css'

export default function LoadError() {
    return (
        <div className={app.container}>
            <div>
                <h2>Loading Error</h2>
            </div>
            <button onClick={() => window.location.reload(false)}>
                Click here to reload the page 
            </button>
        </div>
    )
}