import Vue from 'vue'
import Vuex from 'vuex'
import Atoms from "@/assets/atoms.json"

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    state: {
        atoms: Atoms
    }
})