<template>
  <div>
    <h3>从另一个元素复制文本</h3>
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Username" id="foo"
             value="https://github.com/zenorocha/clipboard.js.git">
      <div class="input-group-prepend">
        <button class="btn btn-outline-secondary copy-btn" type="button" data-clipboard-target="#foo">复制</button>
      </div>
    </div>
    <h3>从另一个元素剪切文本</h3>
    <div class="form-group">
      <label for="content">内容</label>
      <textarea class="form-control" name="content" id="content" rows="5">海南统筹推进自贸港建设，全省20家重点外贸企业和多家出口企业全部实现复工复产。

助力复工复产，各地出台一系列新政策。黑龙江设立总规模100亿元的中小企业稳企稳岗基金，为中小企业补充金融能量。安徽明确今年2-6月份对中小微企业免征养老、失业、工伤保险单位缴费，2-4月对大型企业减半征收等措施。广西安排10亿元资金对企业给予贴息支持。

为解决企业招工难，各地也在努力。湖南长沙派出65支招工小分队，到贫困地区帮企业招工，不到一个月，小分队就向长沙各企业输送包括贫困户在内的12800多名劳务人员。</textarea>
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-primary copy-btn" data-clipboard-target="#content"
              data-clipboard-action="cut">剪切复制
      </button>
    </div>
  </div>
</template>

<script>
import ClipboardJs from 'clipboard'

export default {
  name: 'Clipboard',
  data () {
    return {}
  },
  mounted () {
    let self = this
    self.$nextTick(() => {
      let clipboard = new ClipboardJs('.copy-btn')
      clipboard.on('success', function (e) {
        console.info('Action:', e.action)
        console.info('Text:', e.text)
        console.info('Trigger:', e.trigger)
        e.clearSelection()
      })
      clipboard.on('error', function (e) {
        console.error('Action:', e.action)
        console.error('Trigger:', e.trigger)
      })
    })
  }
}
</script>

<style scoped>

</style>
