<template>
  <v-container>
    <v-list-item class="mb-2 border-black">
      <v-list-item-avatar size="60" tile class="grey darken-2 white--text text-h5">{{atom.symbol}}</v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline text-h4">{{atom.name}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-card>
      <v-simple-table class="text-body-1">
        <template v-slot:default>
          <tbody>
            <tr>
              <th class="text-left">Category</th>
              <td>{{atom.category}}</td>
            </tr>
            <tr>
              <th class="text-left">Appearance</th>
              <td>{{atom.appearance}}</td>
            </tr>
            <tr>
              <th class="text-left">Phase</th>
              <td>{{atom.phase}}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "AtomList",
  data: () => ({
    //
  }),
  computed: {
    atom() {
      const aa = this.$store.state.atoms.elements.filter(
        a => a.name.toLowerCase() == this.$route.params.name
      );
      return aa[0];
    }
  },
  methods: {
    dummy() {}
  }
};
</script>

<style scoped>
tr th {
  width: 120px;
}
</style>
