export function usersMetrics(state) {
    const total = state.users.length
    const argentinian = state.users.filter(item => item.country === 'Argentina')
    const spanish = state.users.filter(item => item.country === 'España')
    return {
        totalCount: total,
        totalCountFromArg: argentinian.length,
        totalCountFromSpa: spanish.length,
        totalCountFromOther: total - argentinian.length - spanish.length
    }
}

export function getUsers(state) {
    return state.users
}