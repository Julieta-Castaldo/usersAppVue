import axios from "axios"
import config from "../../config"

const url = config.API_URL

export async function fetchUsers({ commit }) {
    const token = localStorage.getItem('token')
    const headers = {
        headers: {
            "Authorization": token
        }
    }
    try {
        const res = await axios.get(`${url}/users`, headers)
        const data = res.data
        commit('users/setUsers', data.users, { root: true })
    } catch (e) {
        console.error(e);
    }
}

export async function addUser({ commit, dispatch }, user) {
    const token = localStorage.getItem('token')
    const headers = {
        headers: {
            "Authorization": token
        }
    }
    try {
        if (token) await axios.post(`${url}/users`, user, headers)
        else axios.post(`${url}/auth/signup`, user)
        dispatch('fetchUsers')
    } catch (e) {
        console.error(e);
    }
}

export async function updateUser({ commit, dispatch }, user) {
    const token = localStorage.getItem('token')
    const headers = {
        headers: {
            "Authorization": token
        }
    }
    try {
        await axios.put(`${url}/users/${user.id}`, user, headers)
        dispatch('fetchUsers')
    } catch (e) {
        return e.message
    }
}

export async function removeUser({ commit, dispatch }, id) {
    const token = localStorage.getItem('token')
    const headers = {
        headers: {
            "Authorization": token
        }
    }
    try {
        await axios.delete(`${url}/users/${id}`, headers)
        dispatch('fetchUsers')
    } catch (e) {
        console.error(e);
    }
} 