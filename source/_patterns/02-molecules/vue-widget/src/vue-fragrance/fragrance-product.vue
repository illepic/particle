<template>
  <div class="fragrance-full text-center">
    <div>
      <img
        :src="`${imgBase}${product.img.combiner}`"
        :alt="product.names.short"
      >
    </div>
    <p class="text-uppercase bold"><strong>{{ product.names.long }}</strong></p>
    <p class="text-capitalize">{{ product.cat }}</p>
    <p>
      <span
        v-for="(cost, size) in product.skus"
        :key="product.id + size"
        class="fragrance__size-price"
      >
        {{ cost }} {{ size }}
      </span>
    </p>
    <button class="btn btn-primary text-uppercase">Shop now</button>
  </div>
</template>
<script>
import { fallbackFrag } from './parse';

export default {
  name: 'FragranceProduct',
  props: {
    product: {
      type: Object,
      default() {
        return fallbackFrag;
      },
    },
  },
  data() {
    return {
      imgBase: 'https://www.jomalone.com',
    };
  },
};
</script>
<style lang="scss">
.fragrance__size-price + .fragrance__size-price:before {
  content: '/ ';
}
</style>
