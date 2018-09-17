class element {
  constructor(tag) {
    this.tag = tag
    this.children = []
  }

  append(child) {
    this.children.push(child)
  }

  setAttribute(k, v) {
    this[k] = v
  }
}

if ( typeof document === 'undefined' ) {
  document = {
    getElementById: () => new element(),
    createElement: (tag) => new element(tag)
  }

  alert = (msg) => { throw new Error(msg) }

}

// ==================================
// ^^^ ABOVE ONLY FOR LOCAL RUN   ^^^
// ==================================

const setProps = (elem, props) => Object.keys(props).forEach(k => elem.setAttribute(k, props[k]))


const div = elem => {
  var d = document.createElement('div')
  d.style.padding = '4px'
  d.append(elem)
  return d
}

const toLabel = ( label ) => {
  var text = document.createElement('label')
  text.style.backgroundColor = label
  text.style.color = 'white'
  text.style.padding = '4px'
  text.style.borderRadius = '2px'

  text.innerText = label
  return text
}

class Slider {
  constructor({ onchange, ...props }) {
    this.elem = document.createElement('input')
    this.elem.setAttribute('type', 'range')
    this.elem.addEventListener('change', onchange)
    setProps(this.elem, props)
  }

  get sliderValue() { return this.elem.value }

  get name() { return this.name }

  get element() { return this.elem }

}

class ColorBox {
  constructor() {
    this.elem = document.createElement('div')

    this.colors = {red: 0, green: 255, blue: 0}

    Object.keys(this.colors).map(c => {
      this.elem.append(div(toLabel(c)))
      var slider = new Slider({
        color: c,
        min: 0,
        max: 255,
        value: this.colors[c],
        onchange: ({srcElement}) => this.setBackground(srcElement.getAttribute('color'), srcElement.value)
      })
      this.elem.append(div(slider.element))
    })

    this.elem.style.padding = '8px'
    this.setBackground()
  }

  setBackground(color, value) {
    this.colors[color] = value
    let {red, green, blue} = this.colors
    this.elem.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
  }

  get element() {
    return this.elem
  }
}


document.getElementById('content').append(new ColorBox().element)

console.log('done')
