<template>
  <v-app>
    <app-bar :title="$route.name"></app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar";

export default {
  name: "App",
  components: {
    "app-bar": AppBar
  },
  data: () => ({
    // atoms: Atoms.elements
  })
};
</script>

<style>
a {
  text-decoration: none;
}

.router-link-exact-active {
  background: red;
}
</style>