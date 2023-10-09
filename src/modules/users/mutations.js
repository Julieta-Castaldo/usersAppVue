export function setUsers (state, users) {
    state.users = users
}

export function setUser (state, user) {
    state.selectedUser = {
        ...user,
        country: user.country !== 'Argentina' && user.country !== 'España' ? 'Otro' : user.country 
    }
}