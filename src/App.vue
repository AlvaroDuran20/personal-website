<template>
<navigation-bar></navigation-bar>
  <div class="container mt-5">
    <router-view></router-view>
  </div>

  <footer-view></footer-view>
</template>

<script>

  export default {
    data() {
      return {
        message: "Hello World"
      }
    },
    methods: {
      showAlert() {
        alert("Hello World");
      }
    }
  }
</script>

<style>

</style>
