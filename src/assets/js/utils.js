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
