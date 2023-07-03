import { defineStore } from 'pinia'
import { axios } from '../axios/index'

export const useProfileStore = defineStore('profiles', {
    state: () => ({
        profile: {}
    }),
    actions: {
        async getUser() {
            try {
                const { data } = await axios.get('/users/profiles', {
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                this.profile = data.Profile
                console.log(this.profile)   
            } catch (error) {
                console.log(error)
            }
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