// 这是 c 仓库模块 不使用命名空间模块

export default {
  state: {
    name: 'c模块'
  },

  getters: {

  },

  mutations: {
    updateName (state) {
      state.name = '王五'
    }
  }
}
