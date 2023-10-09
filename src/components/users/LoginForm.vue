<template>
  <form @submit.prevent="$emit('login')">
    <div class="form-group">
      <label for="email">Correo Electrónico:</label>
      <input type="email" id="email" v-model="user.email" required />
    </div>
    <div class="form-group">
      <label for="password">Contraseña:</label>
      <input type="password" id="password" v-model="user.password" required />
    </div>
    <div class="form-group">
      <button type="submit" :disabled="! user.password || !user.email">Iniciar Sesión</button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
      validator: user => {
        if (!user.hasOwnProperty('email') || !user.hasOwnProperty('password')) {
          console.warn('Invalid user');
          return false
        } else return true
      }
    }
  }
}
</script>

<style scoped>
form {
  margin-left: 20px;
}

.form-group {
  margin-bottom: 20px;
  width: 300px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="number"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>