import _ from 'lodash'
import './style.css'
import Logo from './webpack-logo.svg'

function component() {
  // Create a div element
  const el = document.createElement('div')

  // Add styling and some text
  el.innerHTML = ['Hello', 'webpack'].join(' ')
  el.classList.add('hello')

  // Load the image and add it to the created element
  const img = new Image()
  img.src = Logo
  img.style.height = '1em';
  el.appendChild(img)

  return el
}

document.body.appendChild(component())