<template>
  <div class="home-container">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <div class="field-group">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" placeholder="example@domain.com" v-model="email" required>
      </div>
      <div class="field-group">
        <label for="password">Senha</label>
        <input type="password" name="password" id="password" placeholder="******" v-model="password" required>
      </div>
      <div class="field-group">
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import { useAuthStore }from '@/stores/auth.js';

export default {
  setup() {
    console.log('setup executado');
    const store = useAuthStore();
    return { store };
  },
  data(){
    return{
      email: '',
      password: ''
    };
  },
  methods: {
    async handleLogin(){
      try{
        const data = await this.store.login(this.email, this.password);
        console.log('Login bem-sucedido:', data);
        this.$router.push({ name: 'about' });
      }
      catch(error){
        alert('Erro ao fazer login. Verifique suas credenciais.');
      }
    }
  }
}
</script>

<style scoped>
   .home-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #3F5EFB;
    background: radial-gradient(circle,rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%);
    margin: 0px;
    min-height: 100vh;
   }

   h1{
    color: #fadb5d;
    font-size: 2.5rem;
   }

   button{
    background: #59b6e4;
    border: 1px solid #ccc;
    border-radius: 11px;
    height: 50px;
    width: 200px;
    font-size: 1.5rem;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
    color: #111;
   }

    button:hover {
      background-color: #e0e0e0;
      transform: scale(1.05);
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
    }

    .field-group {
      margin-bottom: 15px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    label {
      margin-bottom: 5px;
      font-weight: bold;
      color: #fadb5d;
    }

    input[type="email"],
    input[type="password"] {
      width: 250px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 1rem;
      color: #333;
    }
</style>