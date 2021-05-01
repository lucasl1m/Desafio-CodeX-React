import api from '../services/api'

export const getTasks = async () => {
    const response = await api.get('/tasks')
    
    return response.data
}

export const postTask = async ({title, description}) => {
    const status = 1
    const response = await api.post('/tasks/create', {title, description, status})
    return response.data
}

export const getTaskById = async (id) => {
    const response = await api.get(`/tasks/${id}`)
    return response.data
}

export const putTask = async (id, {title, description, status, created_at}) => {
    const response = await api.put(`/tasks/edit${id}`, {title, description, status, created_at})
    return response.data
}

export const deleteTaskById = async (id) => {
    await api.delete(`/tasks/delete${id}`)
}