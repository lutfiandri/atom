<template>
  <v-container>
    <div class="atom-grid white--text">
      <router-link
        :to="'/detail/' + atom.name.toLowerCase()"
        v-for="atom in atoms"
        :key="atom.id"
        :style="{ gridColumnStart: atom.xpos + 1, gridRowStart: atom.ypos + 1 }"
        :class="atom.category_dashed"
        class="atom-tile pt-1 pb-2 px-2"
      >
        <div class="text-caption text-center">{{atom.number}}</div>
        <div class="text-body-1 font-weight-medium text-center mt-n1">{{atom.symbol}}</div>
      </router-link>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data: () => ({}),
  computed: {
    atoms() {
      return this.$store.state.atoms.elements;
    }
  },
  methods: {}
};
</script>

<style scoped>
.atom-grid {
  display: grid;
  grid-gap: 2px;
  grid-template-columns: 0 repeat(18, 1fr);
  grid-template-rows: 0 repeat(10, auto);
  overflow-x: auto;
}

.atom-tile * {
  margin: 0;
  padding: 0;
  line-height: unset;
  color: white;
}
</style>