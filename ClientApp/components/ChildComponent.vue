<template>
  <div>
    <h2>{{ numbersChild }}</h2>
    <input v-model="number" type="number" />
    <!--<button @click="$emit('number-added', Number(number))">-->
    <button @click="addNumberSubmit">
     Add new number
    </button>
    <input v-model="numberInput" type="number" />
    <button @click="addNumberStore(numberInput)">
     Add new number
    </button>
  </div>
</template>

<script>
import { EventBus } from '../event-bus.js'
import { store } from '../store.js'

export default {
  name: 'ChildComponent',
  props: {
    numbersChild: Array
  },
  data () {
    return {
      number: 0,
      numberInput: 0
    }
  },
  methods: {
    addNumberSubmit () {
      EventBus.$emit('number-added', Number(this.number))
    },
    addNumberStore (numberInput) {
      store.addNumber(Number(numberInput))
    }
  }
}
</script>