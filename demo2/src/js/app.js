import _ from 'lodash'
import print from './print.js'
import '../css/style.css'
import '../css/iconfont.css'
import demoImg from '../img/demo.jpg'
(function(){
  const html = document.createElement('div')
  let str = ''
  _.each([100,2,3,4], function(item) {
    str += '粒子' + item + '<br/>'
  })
  html.innerHTML = str
  document.body.appendChild(html)
  let img = new Image()
  img.src = demoImg
  img.onclick = function() {
    print('点击图片')
  }
  img.setAttribute('id', 'demoImg')
  document.body.appendChild(img)
  const imgDiv = document.createElement('div')
  imgDiv.classList.add('demoImg')
  document.body.insertBefore(imgDiv, img)
})()

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    print('me');
  })
}