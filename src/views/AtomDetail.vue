<template>
  <v-container>
    <v-list-item class="mb-2 border-black">
      <v-list-item-avatar
        size="60"
        tile
        class="white--text text-h5"
        :class="atom.category_dashed"
      >{{ atom.symbol }}</v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline text-h4">
          {{
          atom.name
          }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-card>
      <v-simple-table class="text-body-1">
        <template v-slot:default>
          <tbody>
            <tr v-for="a in atom.properties" :key="a.id">
              <th class="text-left py-3">{{ a.title }}</th>
              <td class="py-3">{{ capFirst(a.value) }}</td>
            </tr>
            <tr v-for="a in atom.arrayProperties" :key="a.id">
              <th class="text-left py-3">{{a.title}}</th>
              <td class="py-3" v-if="a.value.length != 0">
                <v-responsive
                  v-for="v in a.value"
                  :key="v.id"
                  class="text-center yellow lighten-2 rounded-pill d-inline-flex align-center justify-center mr-3 my-1 py-1 px-4"
                >{{ v }}</v-responsive>
              </td>
              <td v-else>
                <v-responsive
                  class="text-center yellow lighten-2 rounded-pill d-inline-flex align-center justify-center mr-3 my-1 py-1 px-4"
                >-</v-responsive>
              </td>
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
    atom: {
      name: null,
      symbol: null,
      category_dashed: null,
      properties: null,
      arrayProperties: null,
      source: null
    }
  }),
  methods: {
    capFirst(word) {
      if (word != null) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return "-";
      }
    }
  },
  created() {
    // console.log("ok");
    const atom = this.$store.state.atoms.elements.filter(
      a => a.name.toLowerCase() == this.$route.params.name
    )[0];
    console.log(atom);
    const properties = [
      { title: "Category", value: atom.category },
      { title: "Appearance", value: atom.appearance },
      { title: "Phase", value: atom.phase },
      { title: "Summary", value: atom.summary },
      { title: "Boil", value: atom.boil + " K" },
      { title: "Melt", value: atom.melt + " K" },
      { title: "Density", value: atom.density + " g/L" },
      { title: "Inventor", value: atom.discovered_by },
      { title: "Period", value: atom.ypos + "" },
      { title: "Electron Configuration", value: atom.electron_configuration }
    ];
    const arrayProperties = [
      { title: "Shells", value: atom.shells },
      { title: "Ionization Energies", value: atom.ionization_energies }
    ];
    this.atom.name = atom.name;
    this.atom.symbol = atom.symbol;
    this.atom.category_dashed = atom.category_dashed;
    this.atom.properties = properties;
    this.atom.arrayProperties = arrayProperties;

    // change appbar title
    // this.$store.state.appBar.title = this.atom.name;
  }
};
</script>

<style scoped>
tr th {
  width: 120px;
}
</style>
