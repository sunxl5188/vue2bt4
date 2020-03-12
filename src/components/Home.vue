<template>
  <div class="hljs">
    <button type="button" class="btn btn-primary" id="aa" @click="countdown('aa', 30)">获取验证码</button>
  </div>
</template>

<script>
import {countdownInit, countdown} from '../assets/js/utils'

export default {
  name: 'Home',
  data () {
    return {}
  },
  created () {
  },
  mounted () {
    let self = this
    self.$nextTick(() => {
      self.countdownInit('aa')
    })
  },
  methods: {
    countdownInit, countdown
  },
  components: {},
  watch: {},
  errorCaptured (err, vm, info) {
    console.log(err)
  }
}
</script>

<style scoped>

</style>
