import vueCookie from 'vue-cookies'

/**
 * 高亮显示
 */
export function highlight (words, keys) {
  if (keys) {
    return words.replace(new RegExp(keys, 'ig'), (matchedTxt) => '<font style="color:#f90;">' + matchedTxt + '</font>')
  } else {
    return words
  }
}

/**
 * 倒计时初始化
 * @param objName
 */
export function countdownInit (objName) {
  let dateBegin = vueCookie.get(objName + '-expires')
  if (dateBegin) {
    let dateEnd = new Date()
    let dateDiff = dateBegin - dateEnd.getTime()
    let leave1 = dateDiff % (24 * 3600 * 1000)
    let leave2 = leave1 % (3600 * 1000)
    // let minutes = Math.floor(leave2 / (60 * 1000)) 分
    let leave3 = leave2 % (60 * 1000)
    let seconds = Math.round(leave3 / 1000) // 秒
    if (seconds > 0) {
      countdown(objName, seconds)
    } else {
      vueCookie.remove(objName + '-expires')
    }
  }
}
/**
 * 倒计时
 * @param objName 要显示的元素ID
 * @param wait 倒时时间，秒
 */
export function countdown (objName, wait) {
  let _this = document.getElementById(objName)
  let date = new Date()
  date.setTime(date.getTime() + (wait + 1) * 1000)
  if (vueCookie.get(objName + '-expires') === null) {
    vueCookie.set(objName + '-expires', new Date(date).getTime())
  }
  if (_this) {
    if (wait >= 0) {
      vueCookie.set(objName, wait - 1, date)
    } else {
      vueCookie.set(objName, wait - 1, date)
    }
    if (wait <= 0) {
      vueCookie.remove(objName)
      vueCookie.remove(objName + '-expires')
    }
    if (wait === 0) {
      _this.innerHTML = '重获验证码'
      _this.classList.remove('disabled')
      _this.removeAttribute('disabled')
    } else {
      _this.innerHTML = wait + '秒后重新获取'
      _this.classList.add('disabled')
      _this.setAttribute('disabled', true)
      wait--
      setTimeout(function () {
        countdown(objName, wait)
      }, 1000)
    }
  }
}
