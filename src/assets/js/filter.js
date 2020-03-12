import Vue from 'vue'

/**
 * 获取文件名后缀
 */
Vue.filter('fileSuffix', (name) => {
  return (name.substring(name.lastIndexOf('.') + 1)).toLocaleLowerCase()
})

/**
 * 文件大小转换
 */
Vue.filter('bytesToSize', function (bytes) {
  if (bytes === 0) return '0 B'
  let k = 1024
  let sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  let i = Math.floor(Math.log(bytes) / Math.log(k))
  let sz = (bytes / Math.pow(k, i)).toFixed(2)
  return sz + ' ' + sizes[i]
})

/**
 * 给手机身份证加星号
 */
Vue.filter('plusXin', function (str, start, end) {
  if (!str) { return '' }
  let len = str.length - start - end
  let xin = ''
  for (let i = 0; i < len; i++) {
    xin += '*'
  }
  return str.substr(0, start) + xin + str.substr(str.length - end)
})

/**
 * 格式化日期 yyyy-MM-dd hh:mm:ss
 */
Vue.filter('dCreateTime', (value, format) => {
  let D = new Date(value)
  let o = {
    'M+': D.getMonth() + 1,
    'd+': D.getDate(),
    'h+': D.getHours(),
    'm+': D.getMinutes(),
    's+': D.getSeconds()
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (D.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (let k in o) {
      if (new RegExp(`(${k})`).test(format)) {
        format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }
    return format
  }
})
