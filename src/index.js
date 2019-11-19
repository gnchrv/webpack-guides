import _ from 'lodash'
import './style.css'
import Logo from './webpack-logo.svg'

// Data import
import xmlData from './data.xml'
import csvData from './google-trends.csv'

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

// Perform some operations over datasets
const queryHighs = csvData
  .filter(q => q[1] >= 60)
  .map(q => [new Date(q[0] + ':00'), q[1]])

// Print data
console.log(xmlData)
console.log(queryHighs)