<template>
    <div class="d-flex justify-content-center align-items-center flex-column" id="content-container">
      <form class="border rounded-5 p-5 w-25 shadow-basic" @submit.prevent="handleRegister(formRegister)">
        <div class="mb-3">
          <label class="form-label">Email address</label>
          <input type="email" class="form-control border border-secondary" v-model="formRegister.email">
        </div>
        <div class="mb-5">
          <label class="form-label">Password</label>
          <input type="password" class="form-control border border-secondary" v-model="formRegister.password">
        </div>
        <button type="submit" class="buttons w-100 rounded-bottom-4 text-white fw-bold">Register</button>
      </form>
  </div>
</template>

<script>
    import { mapActions } from 'pinia'
    import { useLoginStore } from '../stores/login'

    export default {
        data() {
            return {
                formRegister: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            ...mapActions(useLoginStore, ['handleRegister'])
        }
    }
</script>

<style scoped>
  #content-container  {
    width: 100vw;
    height: 93vh;
  }

.buttons {
    background-color: var(--third-color);
    border: 1px solid black;
    height: 4vh;
    transition: 0.3s;
}
.buttons:hover {
    opacity: 0.8;
}

</style>