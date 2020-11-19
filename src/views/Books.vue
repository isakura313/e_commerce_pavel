<template>
  <div class="books">
    <h1 class="is-size-2 has-text-centered">Страница о книгах</h1>
    <div class="columns is-multiline card__wrapper">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  name: 'Books',
  components: {
    Card,
  },
};

</script>

<style scoped>
.card__wrapper{
  margin: 1em 6em;
}
</style>
