<template>
<nav class="navbar bg-dark shadow-basic" style="height: 7vh;">
    <div class="container">
      <div class="d-flex align-items-center clickable gap-3 justify-content-between">
        <img src="../assets/logo.png" alt="Logo" width="40" height="50" class="d-inline-block align-text-top">
        <a class="navbar-brand text-white fw-bold fs-4">
          Prodate
        </a>
      </div>
      <div class="d-flex justify-content-center align-items-center rounded-pill text-white fw-bold lh-1 clickable buttons">
        Login
      </div>
  </div>
</nav>
</template>

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
