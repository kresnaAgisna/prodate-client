import { defineStore } from 'pinia'
import { axios } from '../axios/index'

export const useProfileStore = defineStore('profiles', {
    state: () => ({

    }),
    actions: {
        async getUser() {
            
        },
        async createProfile(dataProfile) {
            try {
                const {data} = await axios.post('/users/profiles', dataProfile, {
                    headers: {
                        access_token: localStorage.access_token
                    }
                })

                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
    }
})