<template>
    <div v-if="users">
        <UserItem v-for="user in users" :user="user" :key="user.id"/>
    </div>
    <div v-else>
        <p>No hay usarios</p>
    </div>
</template>

<script>
import UserItem from './UserItem.vue';
export default {
    props: {
        users: {
            type: Array,
            required: true
        }
    },
    components: {
        UserItem
    }
}

</script>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
}
</style>