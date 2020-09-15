<template>
  <div>
    <navbarHome/>
    <h1>home</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import navbarHome from "../components/navbar-home.vue";

export default {
  name: 'Home',
  components: {
    navbarHome
  }
}
</script>
