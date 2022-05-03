<template>
  <div class="otherProductsPageContainer">
    <div class="headerContainer">
      <p class="headerText">Other Products</p>
    </div>
    <div class="center-item">
      <div class="otherProductsContainer gridBoxContainer-2">
        <div
          class="otherproduct gridBox"
          v-for="other in otherProducts"
          :key="other.id"
        >
          <img
            :src="require('@/assets/images/' + other.image.folder + '/0.jpg')"
            :alt="other.name"
            :title="other.name"
            class="otherImage"
          />

          <div class="otherDetails">
            <p class="otherName textHeader">{{ other.name.toUpperCase() }}</p>
            <p class="otherDescription">{{ other.description }}</p>
          </div>
        </div>

        <!-- <router-link
          v-for="other in otherProducts"
          :key="other.id"
          :to="'/fragrances/' + other.id"
        >
          <div class="otherproduct gridBox">
            <img
              :src="require('@/assets/images/' + other.image.folder + '/0.jpg')"
              :alt="other.name"
              :title="other.name"
              class="otherImage"
            />

            <div class="otherDetails">
              <p class="otherName textHeader">{{ other.name.toUpperCase() }}</p>
              <p class="otherDescription">{{ other.description }}</p>
            </div>
          </div>
        </router-link> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { allOtherProducts } from "../shared/otherproducts";

export default defineComponent({
  setup() {
    const otherProducts = ref(allOtherProducts);

    return {
      otherProducts,
    };
  },
});
</script>

<style lang="less" scoped>
.otherProductsPageContainer {
  .otherProductsContainer {
    a {
      color: unset;
    }

    .otherproduct {
      .otherImage {
        height: 350px;
        width: 350px;
      }
    }

    .gridBox {
      max-width: 350px;
    }
  }
}

@media screen and (max-width: 500px) {
  .gridBoxContainer-2 {
    grid-template-columns: 1fr;
  }
}
</style>
