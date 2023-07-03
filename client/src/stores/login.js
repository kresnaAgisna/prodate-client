import { defineStore } from 'pinia'
import { axios } from '../axios'

export const useLoginStore = defineStore('login', {
  state: () => ({

  }),
  actions: {
    async handleRegister(dataUser) {
      try {
        const { data } =  await axios.post('/users/register', dataUser)
      } catch (error) {
        console.log(error)
      }
    },
    async handleLogin(dataUser) {
      try {
        const { data } = await axios.post('/users/login', dataUser)
        
        localStorage.access_token = data.access_token
      } catch (error) {
        console.log(error)
      }
    }
  }

})
