<template>
  <div class="columns">
  <div class="column is-full">
    <div class="card">
      <div :style="{backgroundImage: `url(${info[0].image})`}" class="card__image"> </div>
        <h3 class="card__title is-size-5"> {{ info[0].title | formatTitle }}</h3>
      <p class="card__price" v-if="info[0].discount">
        <span class="has-text-danger"> {{ info[0].new_price | formatPrice}} </span>
        <del> {{ info[0].price | formatPrice}} </del>
      </p>
      <p class="card__price" v-else>
        {{ info[0].price | formatPrice}}
      </p>
      <p class="category__p">Бестселлер</p>
      <StarRating
        increment="0.1"
        read-only = "true"
        star-size = 20
        :rating ="info[0].rating"
      />
      <p class="card_description">{{info[0].description}}</p>
      <button class="card__button is-danger button is-pulled-right"> Заказать </button>
    </div>
  </div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating';

export default {
  name: 'Product',
  components: {
    StarRating,
  },
  data() {
    return {
      info: '',
    };
  },
  // created - хук компонента, который вызовется
  // при его созданиии и получит асинхронно данные
  // при созданиии Product автоматически вызовется функция
  // created, получит и отфильтрует данные по id товара
  // создаем Product, получаем данные и рисуем их по опредленному id
  async created() {
    // переменная, которая дождется результата запроса json файла
    const response = await fetch('/json/fixtures.json');
    // переводим данные из json в обычный объект js - два массива [] товаров
    // массивы - книги и видеокарты
    this.info = await response.json();
    // склеиваем эти массивы и фильтруем их по id
    this.info = [...this.info.video, ...this.info.books].filter((data) => data.id
      === Number(this.$route.params.id));
  },
  filters: {
    formatTitle(title) {
      if (title.length > 26) {
        return `${title.slice(0, 28)}...`;
      }
      return title;
    },
    formatPrice(price) {
      if (price > 999) {
        const arrayPrice = String(price).split('').reverse();
        for (let i = 0; i < arrayPrice.length; i += 1) {
          if (i % 4 === 0) {
            arrayPrice.splice(i, 0, ' ');
          }
        }
        return `${arrayPrice.reverse().join('')} ₽`;
      }
      return `${price} ₽`;
    },
  },
};

</script>

<style scoped>
.card__image{
  height: 300px;
  background-size:contain;
  background-position: center;
  background-repeat: no-repeat;
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
