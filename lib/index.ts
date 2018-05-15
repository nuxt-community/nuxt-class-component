import Component, { mixins } from 'vue-class-component'
import { State, Getter, Action, Mutation, namespace } from 'vuex-class'

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'asyncData',
  'fetch',
  'head',
  'middleware',
  'layout',
  'transition',
  'scrollToTop',
  'validate'
])

export { Component as default, mixins, State, Getter, Action, Mutation, namespace }
