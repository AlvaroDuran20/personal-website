<template>
    <nav class="navbar navbar-expand-lg">
  <RouterLink to="/" class="navbar-brand" href="#">{{ brand }}</RouterLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <RouterLink to="/" class="nav-link" href="#">Home</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/projects" class="nav-link" href="#">Projects</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/contact" class="nav-link" href="#">Contact</RouterLink>
      </li>
    </ul>
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
  nav {
    padding: 7px;
  }
</style>