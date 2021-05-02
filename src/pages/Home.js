import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../styles/components/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <h2 className={styles.title}>My Task</h2>
                    <button>logout</button>
                </div>

                <NavLink to='/task/create' className={styles.newTask}>+ New task</NavLink>
                <table className={styles.datatable}>
                    <thead>
                        <tr>
                            <th className={styles.dataitem}>Name</th>
                            <th className={styles.dataitem}>Priority</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    )
}