const { createElement: h } = require('react')

const width = 512
const widthIcon = 0.75 * width
const padding = 0.125 * width

module.exports = props =>
  h(
    'div',
    {
      style: {
        boxSizing: 'border-box',
        margin: 0,
        padding,
        width,
        height: width,
        backgroundColor: '#f0c',
        backgroundImage: 'linear-gradient(120deg, #0cf, #f0c)'
      }
    },
    h('img', {
      src: 'https://icon.now.sh/style/ffffff',
      style: { width: widthIcon }
    })
  )
