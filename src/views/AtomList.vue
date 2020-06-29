<template>
  <v-container>
    <v-row>
      <v-col v-for="atom in atoms" :key="atom.id" cols="12" :sm="6" :lg="4">
        <v-card class="pa-2" @click="dummy">
          <router-link :to="'/detail/' + atom.name.toLowerCase()">
            <v-list-item>
              <v-list-item-avatar tile size="60" color="grey darken-2 white--text">{{atom.symbol}}</v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1">{{atom.name}}</v-list-item-title>
                <v-list-item-subtitle>{{atom.category}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </router-link>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AtomList",
  data: () => ({
    //
  }),
  computed: {
    atoms() {
      return this.$store.state.atoms.elements;
    }
  },
  methods: {
    dummy() {}
  }
};
</script>

<style>
.v-card:hover {
  background: #f6f6f6;
  transition: background 100ms;
}
</style>