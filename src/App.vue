<template>
  <div class="appContainer">
    <div class="header">
      <NavbarPanel></NavbarPanel>
    </div>

    <div class="page" :style="'padding-top:' + pagePadding + 'px'">
      <router-view />
    </div>

    <BecomeMemberModal></BecomeMemberModal>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import NavbarPanel from "./components/NavbarPanel.vue";
import BecomeMemberModal from "./components/BecomeMemberModal.vue";
import { toggleModal } from "./shared/utils";

export default defineComponent({
  components: {
    NavbarPanel,
    BecomeMemberModal,
  },
  setup() {
    let pagePadding = ref(0);

    onMounted(() => {
      toggleModal("becomeMemberModal", true);

      pagePadding.value = getHeaderSpacing();
    });

    function getHeaderSpacing(): number {
      const navbar = document.querySelector(".web-header");

      const navbarHeight = navbar?.clientHeight || 0;

      return navbarHeight;
    }

    return {
      pagePadding,
    };
  },
});
</script>

<style lang="less">
.appContainer {
  .page {
    height: 100vh;
  }
}
</style>
