var triangle = require('a-big-triangle')
var createShader = require('gl-shader')
var glslify = require('glslify')

var gl = require('webgl-context')({
  width: 512,
  height: 512
})

document.body.appendChild(gl.canvas)

var vert = glslify('./vert.glsl')
var frag = glslify('./frag.glsl')

var shader = createShader(gl, vert, frag)
shader.bind()
render()

function render() {
  var width = gl.drawingBufferWidth
  var height = gl.drawingBufferHeight
  gl.viewport(0, 0, width, height)

  shader.bind()
  triangle(gl)
}
