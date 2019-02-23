// 仓库的a 模块

export default {
  namespaced: true,
  state: {
    name: 'A模块'
  },

  getters: {

  },

  mutations: {
    chgName (state, payload) {
      state.name = payload.name;
    }
  },

  actions: {

  }
}
