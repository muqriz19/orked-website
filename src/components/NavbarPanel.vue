<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="#">
        <!-- <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        /> -->
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <!-- <a class="navbar-item"> Home </a>
         -->
        <router-link
          :to="route.path"
          v-for="route of allRoutePages"
          :key="route.name"
          class="navbar-item"
          :class="route.isActive ? 'is-active' : ''"
          >{{ route.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { allRoutes } from "../shared/routes";

export default defineComponent({
  name: "NavbarPanel",
  setup() {
    const route = useRoute();
    const allRoutePages = ref(allRoutes);

    onMounted(() => {
      const path = route.path;
      setActive(path);
    });

    watch(route, () => {
      const currentPath = route.path;
      setActive(currentPath);
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

    return {
      allRoutePages,
    };
  },
});
</script>

<style scoped></style>
