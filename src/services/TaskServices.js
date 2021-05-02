import api from '../services/api'

export const getTasks = async () => {
    const response = await api.get('/tasks')
    return response.data
}

export const postTask = async ({task, priority}) => {
    const response = await api.post('/tasks/create', {task, priority})
    return response.data
}

export const getTaskById = async (id) => {
    const response = await api.get(`/tasks/${id}`)
    return response.data
}

export const putTask = async (id, {task, priority}) => {
    const response = await api.put(`/tasks/edit${id}`, {task, priority})
    return response.data
}

export const deleteTaskById = async (id) => {
    await api.delete(`/tasks/delete${id}`)
}