<template>
    <div class="hello">
        <h1>{{msg|starFilter(4,4)}}</h1>
        <h4>{{idCard|starFilter(4,4)}}</h4>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: '13122546879',
      idCard: '350424200020204186'
    }
  },
  mounted () {
  },
  methods: {},
  components: {},
  watch: {},
  errorCaptured (err, vm, info) {
    console.log(err)
  }
}
</script>

<style scoped>

</style>
