<template>
  <div class="appContainer">
    <div class="header">
      <NavbarPanel></NavbarPanel>
    </div>

    <div class="page">
      <router-view />
    </div>

    <BecomeMemberModal></BecomeMemberModal>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import NavbarPanel from "./components/NavbarPanel.vue";
import BecomeMemberModal from "./components/BecomeMemberModal.vue";
import { toggleModal } from "./shared/ui";

export default defineComponent({
  components: {
    NavbarPanel,
    BecomeMemberModal,
  },
  setup() {
    onMounted(() => {
      toggleModal("becomeMemberModal", true);
    });
    return {};
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
