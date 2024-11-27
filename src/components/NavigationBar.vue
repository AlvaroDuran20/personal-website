<template>
  <nav class="navbar navbar-expand-lg border-bottom">
    <div class="container">
      <RouterLink to="/" class="navbar-brand">
        <img width="100" src="../assets/img/logo-no-background.png" alt="Logo">
      </RouterLink>
      <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link" aria-current="page">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/projects" class="nav-link">Projects</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
          </li>
        </ul>
        
        <div class="d-flex align-items-center">
          <a href="https://github.com/AlvaroDuran20" class="me-3" target="_blank">
            <img src="../assets/img/github-logo.svg" alt="GitHub" width="24" height="24">
          </a>
          <a href="https://linkedin.com/in/luisdurantorrejon" class="me-3" target="_blank">
            <img src="../assets/img/linkedin-logo.svg" alt="LinkedIn" width="24" height="24">
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
        data() {
            return {
                brand: "Luis Duran"
            }
        }
    }
</script>

<style scoped>
.nav-link:hover {
  color: #ff851b !important;
}
.nav-link:active {
  color: #ffa64d !important; /* A lighter shade of #ff851b */
}

.nav-link.active,
.router-link-active {
  color: #ffa64d !important; /* Lighter shade of #ff851b */
}

</style>