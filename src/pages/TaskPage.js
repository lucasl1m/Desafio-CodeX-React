import React, { useState } from 'react';
import { postTask } from "../services/TaskServices"
import style from '../styles/components/TaskPage.module.css'
import { NavLink } from 'react-router-dom'

export default function TaskForm({ history }) {
  const [task, setTask] = useState('')
  const [priority, setSelection] = useState('')

  const onSelectOption = (event) => {
    setSelection(event.target.value)
  }

  const onChangeTask = (event) => {
    setTask(event.target.value)
  }

  const toSave = (event) => {
    event.preventDefault()

    postTask({ task, priority })
      .then(res => {
        if (res.task) {
          setTask('')
          history.push('task')
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <div className={style.container}>
      <div className={style.card}>
        <div>
          <h4 className={style.title}>Add Task</h4>
        </div>
        <form>
          <div className={style.formItem}>
            <label htmlFor="name" className={style.formItemLabel}>Name</label>
            <input type="text" id="name" className="form-control" value={task} onChange={onChangeTask} placeholder="Name" autoComplete="off"/>
          </div>
          <div className={style.formItem}>
            <label htmlFor="priority" className={style.formItemLabel}>Priority</label>
            <select name="priority" onChange={onSelectOption}>
              <option value="Alta">Alta</option>
              <option value="Baixa">Baixa</option>
            </select>
          </div>
        </form>
        <div className={style.cardbuttons}>
          <NavLink to={'/'}><button className={style.cancelButton}>Cancel</button></NavLink>
          <NavLink to={'/'}><button className={style.saveButton} onClick={toSave}>Save</button></NavLink>
        </div>
      </div>
    </div>
  )
}