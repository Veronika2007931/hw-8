import arr from './info.js'
import items from '../template/list.handlebars'

const gallery = document.querySelector('.js-menu')
const markup = items(arr)
gallery.innerHTML = markup









