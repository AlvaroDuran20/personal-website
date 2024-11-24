<template>
  <navigation-bar></navigation-bar>
  <h1>{{ message }}</h1>
  <button @click="showAlert" class="btn btn-primary">press me</button>
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
