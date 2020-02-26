import Vue from 'vue'

Vue.filter('starFilter', function (str, start, end) {
  if (!str) { return '' }
  return str.substr(0, start) + '****' + str.substr(str.length - end)
})
