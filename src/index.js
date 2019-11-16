import _ from 'lodash'

function component() {
  const el = document.createElement('div')
  el.innerHTML = ['Hello', 'webpack'].join(' ')
  return el
}

document.body.appendChild(component())