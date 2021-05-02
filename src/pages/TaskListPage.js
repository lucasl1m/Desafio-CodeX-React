import React, { useState } from 'react';
import { postTask } from "../services/TaskServices"


export default function TaskListPage({history}) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setSelection] = useState('')

  const onChangeDescription = (event) => {
    setDescription(event.target.value)
  }

  const onSelectOption = (event) => {
    setSelection(event.target.value)
  }

  const onChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  const toSave = (event) => {
    event.preventDefault()

    postTask({title, priority, description})
      .then(res => {
        if (res.title) {
          setTitle('')
          setDescription('')
          history.push('/task')
        }
      })
      .catch(err => console.log(err))
  }
  
  return (
    <div className="row p-2">
      <div className="col-md-4 p-2"></div>
      <div className="col-md-4 p-2">
        <div className="card bg-primary text-black">
          <div className="card-header text-center">
            <h4 className="card-text">Add Task</h4>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="title" className="form-control-label">Titulo</label>
                <input type="text" id="title" className="form-control" value={title} onChange={onChangeTitle} />
              </div>
              <div className="form-group">
                <label htmlFor="priority" className="form-control-label">Prioridade</label>
                <select name="priority" onChange={onSelectOption}>
                    <option value="Alta">Alta</option>
                    <option value="Baixa">Baixa</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="description" className="form-control-label">Descrição</label>
                <textarea
                  name="description"
                  id="description"
                  cols="30"
                  rows="5"
                  className="form-control"
                  value={description}
                  onChange={onChangeDescription}
                />
              </div>
            </form>
          </div>
          <div className="card-footer">
            <button className="btn btn-outline-light rounded-circle btn-lg" onClick={toSave}>Salvar</button>
          </div>
        </div>
      </div>
      <div className="col-md-4 p-2"></div>
    </div>
  )
}