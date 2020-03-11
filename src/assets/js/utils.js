/**
 * 高亮显示
 */
export function highlight (str, keys) {
  return keys ? str.replace(keys, (word) => '<font color=\'#f90\'>' + word + '</font>') : str
}
