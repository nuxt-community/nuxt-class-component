import Component from 'vue-class-component';
import { State, Getter, Action, Mutation, namespace } from 'vuex-class';
export { Component as default, State, Getter, Action, Mutation, namespace };

declare module 'vue/types/options' {
  // Declare augmentation for Options
  interface ComponentOptions<
    V extends Vue,
    Data=DefaultData<V>,
    Methods=DefaultMethods<V>,
    Computed=DefaultComputed,
    PropsDef=PropsDefinition<DefaultProps>,
    Props=DefaultProps> {
    middleware?: string | string[];
  }
}
