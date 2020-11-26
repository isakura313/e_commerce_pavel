<template>
  <div class="books">
    <h1 class="is-size-2 has-text-centered">Страница о книгах</h1>
    <div class="columns is-multiline card__wrapper">
      <!-- v-for директива повторения в цикле -->
      <Card
        v-for="book in books"
        v-bind:key = "book.id"
        v-bind:id = "book.id"
        v-bind:image = "book.image"
        v-bind:title = "book.title"
        v-bind:price = "book.price"
        v-bind:new_price = "book.new_price"
        v-bind:discount = "book.discount"
        v-bind:rating = "book.rating"
      />
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import products from '../../public/json/fixtures.json';

export default {
  name: 'Books',
  components: {
    Card,
  },
  data() {
    return {
      books: products.books,
    };
  },
};

</script>

<style scoped>
.card__wrapper{
  margin: 1em 6em;
}
</style>
