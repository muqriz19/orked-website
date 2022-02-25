<template>
  <div class="pageHeaderContainer">
    <h2>{{ pageHeaderTitle }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();

    let pageHeaderTitle = ref("");

    onMounted(() => {
      router.afterEach((to, from) => {
        console.log("to", to);
        console.log("from", from);

        pageHeaderTitle.value = String(
          to.name?.toString() as string
        ).toUpperCase();
      });
    });

    return {
      pageHeaderTitle,
    };
  },
});
</script>

<style lang="less" scoped>
.pageHeaderContainer {
  padding: 10px;
  background-color: @secondary-color;

  h2 {
    font-size: 2em;
    letter-spacing: 2px;
    color: @text-color;
  }
}
</style>
