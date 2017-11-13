# Nuxt Class Component

[![npm](https://img.shields.io/npm/v/nuxt-class-component/latest.svg?style=flat-square)](https://npmjs.com/package/nuxt-class-component)
[![Dependencies](https://david-dm.org/nuxt-community/nuxt-class-component/status.svg?style=flat-square)](https://david-dm.org/nuxt-community/nuxt-class-component)

> ES / TypeScript decorator for class-style Nuxt/Vue components, extends [vue-class-component](https://github.com/vuejs/vue-class-component)


## Installation

```bash
npm install --save nuxt-class-component

# or

yarn add nuxt-class-component
```

If use `babel`, install babel plugin:

```bash
npm install --save-dev babel-plugin-syntax-flow babel-plugin-transform-flow-strip-types

# or

yarn add babel-plugin-syntax-flow babel-plugin-transform-flow-strip-types
```

Config babel plugins, `nuxt.config.js`:

```js
module.exports = {
  build: {
    babel: {
      plugins: ['transform-decorators-legacy', 'transform-class-properties']
    }
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

[MIT License](./LICENSE)

Copyright (c) - John Lindquist / Nuxt Community
