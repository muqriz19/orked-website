<template>
  <nav class="navbar web-header" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="toggleNav"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="isActive ? 'is-active' : ''"
    >
      <div class="navbar-start">
        <router-link
          :to="route.path"
          v-for="route of allRoutePages"
          :key="route.name"
          class="navbar-item"
          >{{ route.name }}
        </router-link>

        <a class="navbar-item" @click="openModalMember">Become a Member</a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { toggleModal } from "@/shared/utils";
import { defineComponent, onMounted, ref, watch, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";
import { allRoutes } from "../shared/routes";

export default defineComponent({
  name: "NavbarPanel",
  setup() {
    const route = useRoute();
    const allRoutePages = ref(allRoutes);
    let isActive = ref(false);

    onMounted(() => {
      const path = route.path;
      setActive(path);
    });

    watch(route, () => {
      const currentPath = route.path;
      setActive(currentPath);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", () => {
        return;
      });
    });

    function setActive(path: string) {
      allRoutePages.value.forEach((route) => {
        if (path === route.path) {
          route.isActive = true;
        } else {
          route.isActive = false;
        }
      });
    }

    function toggleNav() {
      isActive.value = !isActive.value;
    }

    function openModalMember() {
      toggleModal("becomeMemberModal", true);
    }

    return {
      allRoutePages,
      isActive,
      toggleNav,
      openModalMember,
    };
  },
});
</script>

<style lang="less" scoped>
.navbar {
  position: fixed;
  z-index: 30;
  width: 100%;
}

.navbar-menu.is-active {
  display: block;
  z-index: 99999;
  position: sticky;
  width: 100%;
}

a.navbar-item.is-active,
.is-exact-active {
  background-color: #363636 !important;
  color: #fff;
}

a.navbar-item:hover {
  background-color: #363636;
  color: #fff;
  opacity: 0.4;
}
</style>
