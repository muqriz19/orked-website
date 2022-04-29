<template>
  <div class="singleFragranceContainer">
    <div class="singleFragranceBox">
      <div class="top-section">
        <h2>{{ currentFragrance.name }}</h2>
      </div>

      <div class="image-section">
        <img :src="currentFragrance.path.image" alt="" srcset="" />
      </div>

      <div class="meta-section"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { perfumes } from "@/shared/orked";
import { defineComponent, onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "ProductItem",
  setup() {
    let currentFragrance = ref({});
    const route = useRoute();

    onBeforeMount(() => {
      const id = route.params.id;

      currentFragrance.value = returnPerfume(id);
      console.log(currentFragrance);
    });

    function returnPerfume(id: any) {
      const allPerfumes = perfumes;
      let thePerfume: any;

      for (let p = 0; p < allPerfumes.length; p++) {
        if (allPerfumes[p].id === id) {
          thePerfume = allPerfumes[p];
          break;
        }
      }

      return thePerfume;
    }

    return {
      currentFragrance,
    };
  },
});
</script>

<style lang="less" scoped></style>
