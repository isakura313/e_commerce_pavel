<template>
  <div class="video">
    <h1 class="is-size-2 has-text-centered">Страница о видеокартах </h1>
    <div class="columns is-multiline card__wrapper">
      <!-- v-for директива повторения в цикле -->
      <Card
        v-for="videocard in videocards"
        v-bind:key = "videocard.id"
        v-bind:image = "videocard.image"
        v-bind:title = "videocard.title"
        v-bind:price = "videocard.price"
        v-bind:new_price = "videocard.new_price"
        v-bind:discount = "videocard.discount"
        v-bind:rating = "videocard.rating"
      />
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import products from '../../public/json/fixtures.json';

export default {
  name: 'Video',
  components: {
    Card,
  },
  data() {
    return {
      videocards: products.video,
    };
  },
};

</script>

<style scoped>
.card__wrapper{
  margin: 1em 6em;
}
</style>
