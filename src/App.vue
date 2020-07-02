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
/* @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
* {
  font-family: "Roboto", sans-serif;
} */

a {
  text-decoration: none;
}

.router-link-exact-active {
  background: red;
}

/* COLOR */
.diatomic-nonmetal {
  background: #00897b;
}

.noble-gas {
  background: #039be5;
}

.alkali-metal {
  background: #a1887f;
}

.alkaline-earth-metal {
  background: #00b8d4;
}

.metalloid {
  background: #d32f2f;
}

.polyatomic-nonmetal {
  background: #ffb300;
}

.post-transition-metal {
  background: #43a047;
}

.transition-metal {
  background: #f4511e;
}

.lanthanide {
  background: #1b5e20;
}

.actinide {
  background: #f57f17;
}

.unknown {
  background: #757575;
}
</style>