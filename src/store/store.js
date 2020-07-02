import Vue from 'vue'
import Vuex from 'vuex'
import Atoms from "@/assets/atoms.json"

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        atoms: Atoms,
        appBar: {
            title: "ahsjdbsa"
        }
    }
})