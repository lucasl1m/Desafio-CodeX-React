import React, { useState, useEffect } from 'react';
import {getTaskById, putTask} from "../services/TaskServices"

export default function TaskEditPage({history}) {
  const {id} = history.location.state
  const [tasks, setTasks] = useState('')
  const [taskError, setTaskError] = useState({})
  const [task, setTask] = useState('')

  useEffect(() => {
      getTaskById(id)
        .then(res => {
          setTasks(res)
          setTask(res.task)
        })
        .catch(err => setTaskError(err))
  }, [id])

  const onChangeTask = (event) => {
    setTask(event.target.value)
  }

  const toEdit = (req) => {
    req.preventDefault()
    tasks.task = req.task
    tasks.prioridade = req.prioridade
    console.log(tasks)

    putTask(id, tasks)
      .then(() => history.push('tasks'))
      .catch(err => setTaskError(err))
  }


  if (taskError) {
    return (
      <div>
        <h2>Error</h2>
      </div>
    )
  } else {
    return (
            <div>
              <div className="card-header text-center">
                <h4 className="card-text">Editar Tarefa</h4>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="title" className="form-control-label">Titulo</label>
                    <input
                      type="text"
                      id="title"
                      className="form-control"
                      value={task}
                      onChange={onChangeTask}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="prioridade" className="form-control-label">Priority</label>
                    <select name="prioridade">
                        <option value="Alta">Alta</option>
                        <option value="Baixa">Baixa</option>
                    </select>
                  </div>
              
                </form>
              </div>
              <div className="card-footer">
                <button className="btn btn-outline-light rounded-circle btn-lg" onClick={toEdit}>Edit</button>
              </div>
          </div>
    )
  }
  
  
}