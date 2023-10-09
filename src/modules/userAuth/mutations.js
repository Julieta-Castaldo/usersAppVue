export function setUser (state, user) {
    state.user = user
    state.error = false
    state.errorMessage = ''
    state.isLogged = true
}

export function logout (state){
    state.user = null
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    state.isLogged = false
}

export function authError (state, error)  {
    state.error = true
    state.errorMessage = error
    state.user = null
    state.isLogged = false
}