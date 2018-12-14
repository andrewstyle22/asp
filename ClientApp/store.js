import Vue from 'vue'
import Vuex from 'vuex'
/*
export const store = {
  state: {
    numbersStore: [1, 2, 3]
  },
  addNumber (newNumber) {
    this.state.numbersStore.push(newNumber)
  }
}
*/
Vue.use(Vuex)
/*
State is simply an object that contains the properties that
need to be shared within the application:
*/
const state = {
  numbersStore: [1, 2, 3]
}
/*
Mutations are functions responsible in directly mutating store
state. In Vuex, mutations always have access to state as the
first argument. In addition, Actions may or may not pass in a
payload as the second argument:
*/
const mutations = {
  ADD_NUMBER_VUE_STORE (state, payload) {
    state.numbersStore.push(payload)
  }
}
/*
In Flux architectures, mutation functions are often characterized
in capital letters to distinguish them from other functions and for
tooling/linting purposes. Above we have an ADD_NUMBER mutation that
expects a payload and pushes that payload to the state.numbers array.
*/

/*
Actions exist to call mutations. Actions are also responsible in
performing any or all asynchronous calls prior to committing to mutations.
Actions have access to a context object that provides access to state (with
context.state), to getters (with context.getters), and to the commit function
(with context.commit).

Here’s an example of an action that simply directly commits to a mutation
while passing in the expected payload:
*/
const actions = {
  addNumberVueStore (context, number) {
    context.commit('ADD_NUMBER_VUE_STORE', number)
  }
}
/*
Getters are to a Vuex store what computed properties are to a Vue component.
Getters are primarily used to perform some calculation/manipulation to store
state before having that information accessible to components.

Like mutations, getters have access to state as the first argument. Here’s
a getter called getNumbers that simply returns the state.numbers array:
*/
const getters = {
  getNumbers (state) {
    return state.numbersStore
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
