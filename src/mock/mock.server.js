// 引入Mock
import Mock from 'mockjs'
// 引入data.json文件
import data from './data.json'
Mock.mock('/classify', {
  code: 0,
  data: data.classify
})
Mock.mock('/things', {
  code: 0,
  data: data.things
})