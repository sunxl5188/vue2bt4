<template>
  <div class="hljs">
    <input type="text" name="" v-model="keywords">
    <h1 v-html="highlight(msg,keywords)"></h1>
  </div>
</template>

<script>
import {highlight} from '../assets/js/utils'

export default {
  name: 'Home',
  data () {
    return {
      keywords: '',
      msg: '13122546879',
      idCard: '350424200020204186'
    }
  },
  created () {
  },
  mounted () {
    let self = this
    self.$nextTick(() => {
    })
  },
  methods: {highlight},
  components: {},
  watch: {},
  errorCaptured (err, vm, info) {
    console.log(err)
  }
}
</script>

<style scoped>

</style>
