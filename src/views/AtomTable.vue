<template>
  <v-container>
    <v-data-table
      hide-default-footer
      :search="search"
      :headers="headers"
      :items="atoms"
      disable-pagination
      mobile-breakpoint="0"
      fixed-header
      height="calc(100vh - 5.5rem)"
      class="elevation-1"
      @click:row="goToDetail"
    ></v-data-table>
  </v-container>
</template>

<script>
export default {
  name: "AtomTable",
  data: () => ({
    search: "",
    selected: [],
    headers: [
      {
        text: "No",
        value: "number",
        width: "70px",
        sortable: true
      },
      {
        text: "Atom",
        sortable: true,
        value: "name",
        width: "140px"
      },
      {
        text: "Category",
        value: "category",
        width: "200px"
      },
      {
        text: "Atomic Mass",
        value: "atomic_mass",
        width: "180px"
      },
      {
        text: "Inventor",
        value: "discovered_by",
        width: "200px"
      },
      {
        text: "Phase",
        value: "phase",
        width: "100px"
      },
      {
        text: "Electron Configuration",
        value: "simple_electron_configuration",
        width: "250px"
      }
    ]
  }),
  computed: {
    atoms() {
      return this.$store.state.atoms.elements;
    }
  },
  methods: {
    goToDetail(event) {
      this.$router.push({
        path: "detail/" + event.name.toLowerCase()
      });
      console.log(event.name.toLowerCase());
    }
  }
};
</script>

<style scoped>
tbody tr {
  cursor: pointer;
}
</style>
