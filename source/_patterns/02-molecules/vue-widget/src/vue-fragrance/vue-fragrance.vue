<template>
  <div class="fragrance-combiner">

    <div class="row">
      <h2 class="col text-center mb-5">Step 1. Choose your favorite fragrance</h2>
    </div>

    <div class="spectrum row no-gutters">
      <div
        v-for="category in spectrum"
        :key="category.category"
        class="spectrum-category col text-center text-uppercase"
      >
        <div class="spectrum-category__images d-flex">
          <div
            v-for="fragrance in category.fragrances"
            :key="fragrance.id"
            :style="{backgroundImage: `url(${imgBase}${ fragrance.img.spectrum})`}"
            class="spectrum-category__image h-100"
            :class="{highlighted: fragrance.id === highlightedId, chosen: fragrance.id === chosenId}"
            @mouseover="highlightedId = fragrance.id"
            @click="choose(fragrance.id)"
          />
        </div>

        <div
          class="spectrum-category__category border border-secondary"
          :class="{'highlighted-category': category.category === highlightedCat}"
          @mouseover="highlightedId = category.fragrances[0].id"
        >
          {{ category.category }}
        </div>

        <ul class="spectrum-category__text list-unstyled small">
          <li
            v-for="fragrance in category.fragrances"
            :key="fragrance.id"
            :class="{highlighted: fragrance.id === highlightedId, chosen: fragrance.id === chosenId}"
            @mouseover="highlightedId = fragrance.id"
            @click="choose(fragrance.id)"
          >
            {{ fragrance.names.short }}
          </li>
        </ul>
      </div>
    </div>

    <div class="combiner">
      <h2 class="text-center my-3">Step 2. Choose your combination</h2>
      <div class="row justify-content-center">
        <form>
          <div class="form-row align-items-center">
            <div class="col-auto my-1">Make it</div>
            <div class="col-auto my-1">
              <label
                class="mr-sm-2 sr-only"
                for="inlineFormCustomSelect"
              >Select companion fragrance</label>
              <select
                id="inlineFormCustomSelect"
                v-model="companion"
                class="custom-select mr-2"
              >
                <option
                  selected
                  value="warmer"
                >Warmer</option>
                <option value="fresher">Fresher</option>
              </select>
            </div>
          </div>
        </form>
      </div>
      <div class="row justify-content-center no-gutters mt-3">
        <div class="fragrance-slot col-auto ">
          <fragrance-product
            :product="chosenFrag"
          />
        </div>
        <div class="fragrance-slit col-auto">
          <fragrance-product
            :product="companionFrag"
          />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { fragrances, categories } from './parse';

import FragranceProduct from './fragrance-product.vue';

export default {
  name: 'VueFragranceCombining',
  components: {
    FragranceProduct,
  },
  data() {
    return {
      fragrances,
      categories,
      imgBase: 'https://www.jomalone.com',
      companion: 'warmer',
      highlightedId: null,
      chosenId: null,
    };
  },
  computed: {
    starters() {
      return this.fragrances.filter(({ isStarter }) => isStarter);
    },
    spectrum() {
      return (
        this.categories
          // For each category, generate object with category and frags
          .map(category => ({
            category,
            fragrances: this.starters
              .filter(({ cat: fragCategory }) => category === fragCategory)
              // Sort order of frags within cat
              .sort(({ pizazz: a }, { pizazz: b }) => a - b),
          }))
          // Only show categories which have fragrances
          .filter(category => !!category.fragrances.length)
      );
    },
    highlightedCat() {
      return this.starters.find(({ id }) => id === this.highlightedId).cat;
    },
    chosenFrag() {
      return this.starters.find(({ id }) => id === this.chosenId);
    },
    companionFrag() {
      return this.fragrances.find(
        ({ id }) => this.chosenFrag.companion[this.companion] === id
      );
    },
  },
  created() {
    const first = this.spectrum[0].fragrances[0].id;
    this.highlightedId = first;
    this.chosenId = first;
  },
  methods: {
    choose(id) {
      this.companion = 'warmer';
      this.chosenId = id;
    },
  },
};
</script>

<style lang="scss" scoped>
.spectrum-category__images {
  height: 160px;
}
.spectrum-category__image {
  width: 56px;
  background: center top no-repeat;
  background-size: 100% auto;
}
.spectrum-category__category {
  background-color: theme-color(light);
}
.spectrum-category__image,
.spectrum-category__text,
.spectrum-category__category {
  cursor: pointer;
}

// Combine for image and text since they don't affect each other
.highlighted,
.chosen {
  background-position: center bottom;
  text-decoration: underline;
}
.highlighted-category {
  background-color: theme-color(dark);
  color: theme-color(light);
}
</style>
