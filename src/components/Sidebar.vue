
<script>
export default {
  name: 'Sidebar',
};
</script>


<template>
  <aside class="bg-blue-900 h-full p-4 text-white">
    <nav>
      <ul class="space-y-4">
        <li class="hover:bg-blue-700 p-2 rounded">
          <router-link to="/" class="block">Home</router-link>
        </li>
        <li class="hover:bg-blue-700 p-2 rounded">
          <router-link to="/about" class="block">About</router-link>
        </li>
        <li class="hover:bg-blue-700 p-2 rounded">
          <router-link to="/details" class="block">Details</router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>
