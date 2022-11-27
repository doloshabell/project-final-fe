<template>
  <div :class="currentRouteName !== 'login' ? 'flex flex-row w-full' : ''">
    <!-- Box 1 - Menu -->
    <SideBar :route-name="currentRouteName" />
    <!-- Box 2 - Content -->
    <div :class="currentRouteName !== 'login' ? 'ml-[194px] h-full w-full z-10' : ''">
      <router-view />
    </div>
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";

export default {
  name: "App",
  components: { SideBar },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<style>
* {
  background-color: transparent;
}
</style>
