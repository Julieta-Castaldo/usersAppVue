
import users from './modules/users';
import userAuth from './modules/userAuth';
import { createStore } from 'vuex'

export default createStore({
    state: {
        loading: false
    },
    mutations: {
        setLoading (state, bool){
            state.loading = bool
        }
    },
    modules: {
        users,
        userAuth
    }
});