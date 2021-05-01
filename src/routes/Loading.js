import React from 'react'
import app from '../styles/components/App.module.css'
import styles from '../styles/components/Loading.module.css'

export default function Loading() {
    return (
        <div className={app.container}>
            <h3 className={styles.loading}>Loading...</h3>
        </div>
    )
}