# glsl-shader-basic

[![unstable](http://badges.github.io/stability-badges/dist/unstable.svg)](http://github.com/badges/stability-badges)

This is a bare-bones shader for use with [glslify](https://github.com/stackgl/glslify) that can help get WebGL apps up and running quickly.

It passes position through to `gl_Position` and renders black for `gl_FragColor`. Works well with [a-big-triangle](https://www.npmjs.com/package/a-big-triangle) for quick demos.

## Example

```js
var glslify = require('glslify')
var createShader = require('gl-shader')
var triangle = require('a-big-triangle')

var vert = glslify('glsl-shader-basic/vert.glsl')
var frag = glslify('glsl-shader-basic/frag.glsl')

var shader = createShader(gl, vert, frag)

function render() {
  shader.bind()
  triangle(gl)
}
```

## Install

```sh
npm install glsl-shader-basic --save
```

## Usage

[![NPM](https://nodei.co/npm/glsl-shader-basic.png)](https://www.npmjs.com/package/glsl-shader-basic)

#### `glsl-shader-basic/vert.glsl`

The vertex shader, just passes position through.

#### `glsl-shader-basic/frag.glsl`

The fragment shader, returns opaque black pixels.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/glsl-shader-basic/blob/master/LICENSE.md) for details.
