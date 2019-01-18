import _ from 'lodash'
import './css/style.css'
import './css/iconfont.css'
import demoImg from './img/demo.jpg'
(function(){
  var html = document.createElement('div')
  var str = ''
  _.each([100,2,3,4], function(item) {
    str += '粒子' + item + '<br/>'
  })
  html.innerHTML = str
  document.body.appendChild(html)
  document.getElementById('demoImg').src = demoImg
})()