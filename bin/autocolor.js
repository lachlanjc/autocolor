#!/usr/bin/env node

const argv = require('yargs').argv
const { includes, split, forEach, kebabCase, trimEnd } = require('lodash')
const namer = require('color-namer')
const clipboardy = require('clipboardy')

let colors, css = ''
const input = argv._

if (includes(input[0], ',')) {
  colors = split(input[0], ',')
} else {
  colors = input
}

const colorName = color => kebabCase(namer(color).pantone[0].name)

forEach(colors, value => {
  // Bash doesn't allow the first argument to start with #
  if (!includes(value, '#') && includes([3, 6], value.length)) {
    value = `#${value}`
  }

  const name = colorName(value)
  const style = `.${name} { color: ${value}; }
.bg-${name} { background-color: ${value}; }
.b--${name} { border-color: ${value}; }
`

  css += style + '\n'
})

css = trimEnd(css)

clipboardy.writeSync(css)
console.log(css)
