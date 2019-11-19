import _ from 'lodash'
import printMe from './print'

function component() {
  // Create a div element
  const el = document.createElement('div')
  const btn = document.createElement('button')

  // Add styling and some text
  el.innerHTML = ['Hello', 'webpack'].join(' ')
  btn.innerHTML = 'Click me and check the console!'
  btn.onclick = printMe

  el.appendChild(btn)

  // Return the element
  return el
}

document.body.appendChild(component())