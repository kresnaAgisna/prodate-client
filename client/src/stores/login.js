import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', {
  state: () => ({

  }),
  actions: {
    async handleRegister(dataUser) {
      try {
        console.log(dataUser)
      } catch (error) {
        console.log(error)
      }
    }
  }

})
