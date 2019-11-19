import _ from 'lodash'

function component() {
  // Create a div element
  const el = document.createElement('div')

  // Add styling and some text
  el.innerHTML = ['Hello', 'webpack'].join(' ')

  // Return the element
  return el
}

document.body.appendChild(component())