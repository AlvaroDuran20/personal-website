<template>
<nav class="navbar navbar-expand-lg border-bottom">
  <div class="container">
    <RouterLink to="/" class="navbar-brand" href="#"><img width="80" src="../assets/img/logo-no-background.png"></RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link" aria-current="page" href="#">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/projects" class="nav-link" href="#">Projects</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/contact" class="nav-link" href="#">Contact</RouterLink>
        </li>
      </ul>
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
</style>