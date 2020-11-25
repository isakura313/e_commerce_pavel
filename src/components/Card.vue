<template>
<!--  В template только 1 корневой элемент-->
<div class="column is-one-quarter">
  <div class="card">
<!--  v-bind связывает данные с содержимым атрибута-->
    <img v-bind:src="image" class="card__image">
    <h3 class="card__title is-size-5"> {{ title | formatTitle }}</h3>
    <p class="card__price" v-if="discount">
     <span class="has-text-danger"> {{ new_price | formatPrice}} </span>
     <del> {{ price | formatPrice}} </del>
    </p>
    <p class="card__price" v-else>
      {{ price | formatPrice}}
    </p>
    <p class="category__p">Бестселлер</p>
    <p class="card__rating">{{rating}} /5</p>
    <button class="card__button is-danger button is-pulled-right"> Заказать </button>
  </div>
</div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    image: String,
    title: String,
    price: Number,
    new_price: Number,
    discount: Boolean,
    rating: Number,
  },
  filters: {
    formatTitle(title) {
      if (title.length > 26) {
        return `${title.slice(0, 28)}...`;
      }
      return title;
    },
    formatPrice(price) {
      return `${price} ₽`;
    },
  },
};

</script>

<style scoped>
.card__image{
  height: 200px;
  /* width: auto; */
}
.card{
  padding: 20px;
  margin-bottom: 3em;
}
.category__p{
  color: gold;
  font-style: italic;
  font-weight: bold;
}
.card__price{
  font-weight: bold;
  font-size: 22px;
}
</style>
