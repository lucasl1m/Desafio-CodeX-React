import api from '../services/api'

export const postSignIn = async ({email, password}) => {
    const response = await api.post('/auth/signin', {email, password})
    return response.data
}

export const checkToken = async (token) => {
    const response = await api.post('/auth/check-token', {token})
    return response.data
}

