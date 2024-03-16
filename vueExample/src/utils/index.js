import pinyinObj from '@/json/pinyin.js'
import ABCArr from '@/json/ABC.js'

//拼音匹配 单个汉字转换拼音大写
function pingyingConvert(input) {
  let result = ''
  for (let key in pinyinObj) {
    let pinyin = key
    let hanzi = pinyinObj[key]
    if (hanzi.indexOf(input) > -1) {
      result = pinyin.substring(0, 1)
    }
  }
  return result.toUpperCase() // 小写转大写
}

/**
 * @desc 格式化数据列表
 * @param newList 数组
 * @param key 字符串
 */
export function formatOrderList(newList = [], key = 'name') {
  let allArr = []
  for (let item of newList) {
    let letter = item[key].substring(0, 1)
    item.PYFlag = pingyingConvert(letter)
    item.name = item[key]
  }
  for (let index in ABCArr) {
    const tempObj = {
      title: '',
      items: [],
    }
    tempObj.title = ABCArr[index]

    for (let key in newList) {
      if (newList[key].PYFlag === ABCArr[index]) {
        tempObj.items.push(newList[key])
      }
    }
    if (tempObj.items.length > 0) {
      allArr.push(tempObj)
    }
  }
  return allArr
}
