<template>
    <div class="usersSection">
        <div class="usersHeader">
            <p>Cantidad de usuarios: {{ usersMetrics.totalCount }} ({{ usersMetrics.totalCountFromArg }} ARG, {{
                usersMetrics.totalCountFromSpa }} SPA, {{ usersMetrics.totalCountFromOther }} Other)
            </p>
            <button @click="goToCreate" >
                Crear usuario
            </button>
        </div>
        <UsersList :users="getUsers" />
    </div>
</template>

<script>
import UsersList from '../components/users/UsersList.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    components: {
        UsersList
    },
    mounted() {
        this.fetchUsers()
    },
    methods: {
        ...mapActions('users', ['fetchUsers']),
        goToCreate(){
            this.$router.push('/create-user')
        }
    },
    computed: {
        ...mapGetters('users', ['usersMetrics', 'getUsers'])
    }
}
</script>

<style scoped>
.usersSection {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    flex-direction: column;
}

p {
    display: inline-block;
    margin: 0;
}

.usersHeader {
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    align-items: center;
}

button {
    background-color: #A4BE7B;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 40px;
}

button:hover{
    background-color: #5F8D4E;
}
</style>