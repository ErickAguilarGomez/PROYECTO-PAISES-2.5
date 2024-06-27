<script>
import Sidebar from "./components/Sidebar.vue";
export default {
  components: {
    Sidebar,
  },
};
</script>

<template>
  <div id="app" class="h-screen flex">
    <Sidebar class="w-1/3 bg-blue-500 p-4 max-h-full"></Sidebar>
    <div class="w-2/3 p-4 flex justify-center flex-wrap">
      <router-view />
    </div>
  </div>
</template>
