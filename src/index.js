import './style.css'
// import {a} from './a.js'
import html_top from 'raw-loader!./view/top.html'
import html_bottom from 'raw-loader!./view/bottom.html'
// js添加头部和底部
document.body.insertAdjacentHTML('afterBegin',html_top)
document.body.insertAdjacentHTML('beforeend',html_bottom)

