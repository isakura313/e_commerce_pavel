<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
    data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">

      <router-link to="/" class="navbar-item">Главная</router-link>
      <router-link to="/books" class="navbar-item">Книги</router-link>
      <router-link to="/videocards" class="navbar-item">Видеокарты</router-link>
    </div>
    <div class="navbar-end">
          <router-link class="navbar-item button" to="/cart">
            <img src="../assets/logo_e.png" height="28">
            <strong class="counter"> {{counter}}  </strong>
          </router-link>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Header',
  props: {
    counter: Number,
  },
};
</script>

<style scoped>

</style>
