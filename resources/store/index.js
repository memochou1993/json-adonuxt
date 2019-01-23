import Vue from 'vue';
import Vuex from 'vuex';
import editor from '@/store/modules/editor';

Vue.use(Vuex);

export default () => {
  return new Vuex.Store({
    modules: {
      editor,
    },
  });
};
