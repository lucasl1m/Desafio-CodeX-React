import api from '../services/api'

export const postSignIn = async ({email, password}) => {
    const response = await api.post('/users/auth', {email, password})
    return response.data
}

export const checkToken = async (token) => {
    const response = await api.post('/users/auth', {token})
    return response.data
}

export const postSingUp = async ({email, password}) => {
    const response = await api.post('/users/create', {email, password})
    return response.data
}

export const getUsers = async () => {
    const response = await api.get('/users')
    
    return response.data
}
