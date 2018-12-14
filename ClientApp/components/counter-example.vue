<template>
  <div>
    <parent-component/>
    <h1>Counter</h1>
    <p>This is a simple example of a Vue.js component & Vuex</p>
    <p>
      Current count (Vuex): <strong>{{ currentCount }}</strong>
    </p>
    <p>
      Auto count: <strong>{{ autoCount }}</strong>
    </p>
    <button type="button" class="btn btn-primary" @click="incrementCounter()">Increment</button>
    <button type="button" class="btn btn-secondary" @click="resetCounter()">Reset</button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ParentComponent from './ParentComponent'

export default {
  components: {
    ParentComponent
  },
  data () {
    return {
      autoCount: 0
    }
  },
  created () {
    setInterval(() => {
      this.autoCount += 1
    }, 1000)
  },
  computed: {
    ...mapState({
      currentCount: state => state.counter
    })
  },
  methods: {
    ...mapActions(['setCounter']),

    incrementCounter () {
      var counter = this.currentCount + 1
      this.setCounter({counter: counter})
    },
    resetCounter () {
      this.setCounter({counter: 0})
      this.autoCount = 0
    }
  }
}
</script>

<style>
</style>
