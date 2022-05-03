<template>
  <div class="singleFragranceContainer">
    <product-box :id="id"></product-box>
  </div>
</template>

<script lang="ts">
import ProductBoxVue from "@/components/ProductBox.vue";
import { defineComponent, onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "ProductItem",
  components: {
    "product-box": ProductBoxVue,
  },
  setup() {
    const route = useRoute();
    const id = ref();

    onBeforeMount(() => {
      id.value = route.params.id;
    });

    return {
      id,
    };
  },
});
</script>

<style lang="less" scoped></style>
