import _ from 'lodash'
import './style.css'

function component() {
  const el = document.createElement('div')

  el.innerHTML = ['Hello', 'webpack'].join(' ')
  el.classList.add('hello')

  return el
}

document.body.appendChild(component())