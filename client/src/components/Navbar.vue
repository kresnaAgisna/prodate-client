<template>
<nav class="navbar bg-dark shadow-basic" style="height: 7vh;">
    <div class="container">
      <div class="d-flex align-items-center clickable gap-3 justify-content-between">
        <img src="../assets/logo.png" alt="Logo" width="40" height="50" class="d-inline-block align-text-top">
        <a class="navbar-brand text-white fw-bold fs-4">
          Prodate
        </a>
      </div>
      <div class="d-flex gap-3">
        <router-link to="/login" class="d-flex justify-content-center align-items-center rounded-pill text-white text-decoration-none fw-bold lh-1 clickable buttons">
          Login
        </router-link>
        <router-link to="/register" class="d-flex justify-content-center align-items-center rounded-pill text-white text-decoration-none fw-bold lh-1 clickable buttons">
          Register
        </router-link>
      </div>
  </div>
</nav>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.buttons {
    background-color: var(--third-color); 
    width: 5vw; 
    height: 4vh;
    transition: 0.3s;
}
.buttons:hover {
    opacity: 0.8;
}

</style>
