<template>
<!--  В template только 1 корневой элемент-->
<div class="column is-one-quarter">
  <div class="card">
    <div class="card__image">
<!--  v-bind связывает данные с содержимым атрибута-->
      <img v-bind:src="image">
    </div>
    <h3 class="card__title is-size-4"> {{ title }}</h3>
    <p class="card__price">{{ price }}</p>
    <p class="category__p">Бестселлер</p>
    <p class="card__rating">{{rating}} /5</p>
    <button class="card__button is-danger button is-pulled-right"> Заказать </button>
  </div>
</div>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
      image: 'https://cdn1.ozone.ru/s3/multimedia-t/wc1200/6014496977.jpg',
      title: 'Название товара',
      price: 1000,
      discount: true,
      newPrice: 900,
      rating: 4,
    };
  },
};

</script>

<style scoped>
.card__image{
  height: 200px;
  width: auto;
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
  color: #c8554f;
  font-weight: bold;
  font-size: 22px;
}
</style>
