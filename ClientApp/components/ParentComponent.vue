<template>
  <div>
    <ChildComponent 
    :numbersChild="numbersParent"
    @number-added="addNumber($event)" />
    
    <h2>{{ numbersParent }}</h2>
    <child-component-store/>
    <input v-model="numberInputVueStore" type="number" />
    <button @click="addNumberVueStore(numberInputVueStore)">
     Add new number
    </button>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent'
import ChildComponentStore from './ChildComponentStore'
import { EventBus } from '../event-bus.js'

export default {
  name: 'ParentComponent',
  data () {
    return {
      numbersParent: [1, 2, 3]
    }
  },
  components: {
    ChildComponent,
    ChildComponentStore
  },
  created () {
    EventBus.$on('number-added', number => {
      this.numbersParent.push(number)
    })
  },
  methods: {
    addNumber (event) {
      this.numbersParent.push(event)
    },
    addNumberVueStore (numberInput) {
      this.$store.dispatch('addNumberVueStore', Number(numberInput))
    }
  }
}
</script>
