import * as math from './utils/mathUtil.js'
import './app.css'
import nyancat from './nyancat.jpg'

console.log(math.sum(2, 3))

document.addEventListener('DOMContentLoaded', () => {
  const imageEl = document.createElement('img')
  imageEl.src = nyancat
  document.body.append(imageEl)
})
