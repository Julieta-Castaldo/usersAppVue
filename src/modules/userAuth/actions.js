import axios from "axios"
import config from "../../config"

const url = config.API_URL

export async function login({ commit }, user) {
    try {
        commit('setLoading', true, { root: true })
        const res = await axios({
            method: 'POST',
            url: `${config.API_URL}/auth/login`,
            data: user
        })
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user', JSON.stringify(res.data.user))
        commit('userAuth/setUser', res.data.user, { root: true })
    } catch (e) {
        commit('userAuth/authError', e.message)
    } finally {
        commit('setLoading', false, { root: true })
    }
}