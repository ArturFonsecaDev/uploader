<template>
<div class="sobre-nos">
  <h1>Sobre Nós</h1>
  <p>Esta página pertence à <span id="casal">{{user.email }} está {{isAuthenticated? 'autenticado' : 'offline'}}</span>, casal mais lindo dessa terra</p>
</div>
</template>

<script>

import { useAuthStore } from '@/stores/auth';

export default {
  name: 'SobreNos',
  setup(){
    console.log('setup executado');
    const store = useAuthStore();
    return { store };
  },
  data(){
    return {
      user: this.store.user || null,
      isAuthenticated: this.store.isAuthenticated || false
    }
  }
};
</script>

<style scoped>
</style>