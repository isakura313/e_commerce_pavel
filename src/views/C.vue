<template>
  <div class="Cart">
    {{cart}}
  </div>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Cart',
  components: {
  },
  computed: {
    ...mapGetters([
      'cart',
    ]),
  },
};
</script>
