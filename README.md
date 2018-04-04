<h1 align="center">Nuxt Class Component</h1>
<p align="center">ES and Tyepscript Class Components Decorators for Nuxt.js extending <a href="https://github.com/vuejs/vue-class-component">vue-class-component</a></p>
<p align="center">
<a href="https://david-dm.org/nuxt-community/nuxt-class-component">
    <img alt="" src="https://david-dm.org/nuxt-community/nuxt-class-component/status.svg?style=flat-square">
</a>
<a href="https://codecov.io/gh/nuxt-community/nuxt-class-component">
    <img alt="" src="https://img.shields.io/codecov/c/github/nuxt-community/nuxt-class-component.svg?style=flat-square">
</a>
<br>
<a href="https://npmjs.com/package/nuxt-class-component">
    <img alt="" src="https://img.shields.io/npm/v/nuxt-class-component/latest.svg?style=flat-square">
</a>
<a href="https://npmjs.com/package/nuxt-class-component">
    <img alt="" src="https://img.shields.io/npm/dt/nuxt-class-component.svg?style=flat-square">
</a>
</p>


## Installation

```bash
npm install --save nuxt-class-component

# or

yarn add nuxt-class-component
```

### Babel Instructions

```bash
npm install --save-dev babel-plugin-transform-decorators-legacy babel-plugin-transform-class-properties

# or

yarn add --dev babel-plugin-transform-decorators-legacy babel-plugin-transform-class-properties
```

Then you can configure Babel plugins on `nuxt.config.js` - Plugin order is important (see [here](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy#note-order-of-plugins-matters)):

```js
module.exports = {
  build: {
    babel: {
      plugins: ['transform-decorators-legacy', 'transform-class-properties']
    }
  }
}

```

### Typescript Instructions

You will need to enable [`experimentalDecorators`] on your Typescript compiler.(http://www.typescriptlang.org/docs/handbook/decorators.html).

- Using Typescript Compiler argument `--experimentalDecorators` like this:
```bash
tsc --experimentalDecorators
```

- Using `tsconfig.json`:
```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    ...
  }
}
```

## Usage

See [vue-class-component](https://github.com/vuejs/vue-class-component), [vuex-class](https://github.com/vuejs/vuex) documentation.

You can also see the [official TypeScript example of Nuxt.js](https://github.com/nuxt/nuxt.js/tree/dev/examples/typescript).

### Example

```js
import Vue from 'vue'
import Component from 'nuxt-class-component'
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class'

const ModuleGetter = namespace('path/to/module', Getter)

@Component({
  props: {
    propMessage: String
  }
})
export class MyComp extends Vue {
  @State('foo') stateFoo
  @State(state => state.bar) stateBar
  @Getter('foo') getterFoo
  @Action('foo') actionFoo
  @Mutation('foo') mutationFoo
  @ModuleGetter('foo') moduleGetterFoo

  // If the argument is omitted, use the property name
  // for each state/getter/action/mutation type
  @State foo
  @Getter bar
  @Action baz
  @Mutation qux

  // initial data
  msg = 123

  // use prop values for initial data
  helloMsg = 'Hello, ' + this.propMessage

  // lifecycle hooks
  created () {
    this.stateFoo // -> store.state.foo
    this.stateBar // -> store.state.bar
    this.getterFoo // -> store.getters.foo
    this.actionFoo({ value: true }) // -> store.dispatch('foo', { value: true })
    this.mutationFoo({ value: true }) // -> store.commit('foo', { value: true })
    this.moduleGetterFoo // -> store.getters['path/to/module/foo']
  }

  mounted () {
    this.greet()
  }

  fetch () {
    // fetch data
  }

  async asyncData () {
    // async fetching data
  }

  // computed
  get computedMsg () {
    return 'computed ' + this.msg
  }

  // method
  greet () {
    alert('greeting: ' + this.msg)
  }
}
```


## License

[MIT License](./LICENSE) - Copyright (c) Nuxt Community

