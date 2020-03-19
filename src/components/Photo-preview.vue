<template>
  <div>
    <div class="row">
      <div class="col">
        <img src="../../static/images/003.jpg" class="img-thumbnail" preview="1" alt="">
      </div>
      <div class="col">
        <img src="../../static/images/004.jpg" class="img-thumbnail" preview="1" alt="">
      </div>
      <div class="col">
        <img src="../../static/images/012.jpg" class="img-thumbnail" preview="1" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'

Vue.use(preview)

export default {
  name: 'Photo-preview',
  data () {
    return {}
  },
  mounted () {
    let self = this
    self.$nextTick(() => {
      self.$preview.on('imageLoadComplete', (e, item) => {
        console.log(e, item)
      })
    })
  }
}
</script>

<style scoped>

</style>
