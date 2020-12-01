<template>
  <div id="app">
    <Header :counter="cartItemCount" />
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from '@/layouts/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
  computed: {
    ...mapGetters([
      'cart',
    ]),
    cartItemCount() {
      return this.cart.length;
    },
  },
};
</script>

<style>

</style>
