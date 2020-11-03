import * as axios from "axios";

// Передаем параметры в axios и заносим их в instance
const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {'API-KEY': 'a408275d-5a41-436f-871e-389175d1d72a'}
    }
)

// === USERS-API ===
export const UsersAPI = {
    async getUsers(page, count) {
        let response = await instance.get(`users/?page=${page}&count=${count}`)
        return response.data
    },
    async followUsers(id) {
        let response = await instance.post(`follow/${id}`)
        return response.data
    },
    async unFollowUsers(id) {
        let response = await instance.delete(`follow/${id}`)
        return response.data
    }
}

// === PROFILE-API ===
export const ProfileAPI = {
    async getProfile(id) {
        let response = await instance.get(`profile/${id}`)
        return response.data
    },
    async getStatus(id) {
        let response = await instance.get(`profile/status/${id}`)
        return response.data

    },
    async updateStatus(status) {
        let response = await instance.put(`profile/status`, {status: status})
        return response
    },
}

// === AUTH-API ===
export const AuthAPI = {
    async getAuth() {
        let response = await instance.get('auth/me')
        return response.data
    },

    async auth(email, password, rememberMe) {
        let response = await instance.post('auth/login', {email, password, rememberMe})
        return response.data

    },
    async exit() {
        let response = await instance.delete('auth/login')
        return response.data

    }
}
