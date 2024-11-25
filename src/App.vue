<template>
  <navigation-bar></navigation-bar>
  <router-view></router-view>
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
