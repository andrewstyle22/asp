<template>
  <div>
    <h2>{{ storeState.numbersStore }}</h2>
    <h2>Utilizando Vuex.Store {{ getNumbers }}</h2>
  </div>
</template>

<script>
import { store } from '../store.js'

export default {
  name: 'NumberDisplay',
    /*
  NumberDisplay doesn’t really care about what type of methods exist
  in the store or in NumberSubmit, and is only concerned with getting
  information from the store. So we’ll say Component A is a store
  getter of sorts.
  An action commits to a mutation. The mutation mutates state which
  then affects the view/components. View/components retrieve store
  data with getters. We’re starting to get very close to the Flux-like
  architecture of managing state.
  */
  computed: {
    getNumbers () {
      return this.$store.getters.getNumbers
    }
  },
  data () {
    return {
      storeState: store.state
    }
  }
}
</script>
