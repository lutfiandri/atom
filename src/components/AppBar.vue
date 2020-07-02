<template>
  <div>
    <v-app-bar app color="white" elevate-on-scroll :class="!drawer.active && 'px-md-10'">
      <v-app-bar-nav-icon @click="drawer.active = !drawer.active"></v-app-bar-nav-icon>

      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-app-bar>

    <!-- DRAWER -->
    <v-navigation-drawer app v-model="drawer.active">
      <v-list>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="title">Atom</v-list-item-title>
            <v-list-item-subtitle>version 1.0.0</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <router-link :to="list.path" v-for="list in drawer.list" :key="list.id">
          <v-list-item @click="drawer.active = drawer.active">
            <v-list-item-icon>
              <v-icon>{{list.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{list.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "AppBar",
  props: {
    title: String
  },

  data: () => ({
    drawer: {
      active: true,
      list: [
        {
          path: "/",
          title: "Home",
          icon: "mdi-home"
        },
        {
          path: "/table",
          title: "Table",
          icon: "mdi-view-grid"
        },
        {
          path: "/list",
          title: "List",
          icon: "mdi-view-list"
        }
      ]
    }
  })
};
</script>
