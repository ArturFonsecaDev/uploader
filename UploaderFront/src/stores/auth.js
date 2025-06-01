import { defineStore } from "pinia";
import apiClient from '@/plugins/axios';

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      user: JSON.parse(localStorage.getItem("user")) || null,
      accessToken: localStorage.getItem("accessToken") || null,
    }
  },
  getters: {
    isAuthenticated: (state) => {
      return state.accessToken !== null && state.user !== null;
    },
    getUser: (state) => {
      return state.user;
    },
  },
  actions: {
    async login(email, password){
      try{
        const response = await apiClient.post('/api/login', {
        email: email,
        password: password
      });
      this.user = response.data.user;
      this.accessToken = response.data.token;
      return response;
      }catch (err){
        throw err;
      }
    }
  }
})