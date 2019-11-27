async function getComponent() {
  const el = document.createElement('div')

  const { default: _ } = await import(/* webpackChunkName: 'lodash' */ 'lodash')
  el.innerHTML = _.join(['Hello', 'webpack'], ' ')

  return el
}

getComponent().then(component => { document.body.appendChild(component) })