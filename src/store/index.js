// 仓库文件
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 创建仓库
let store = new Vuex.Store({
  // 选项对象

  // 状态 - 放项目中需要的数据(需要多个组件之间使用的数据)
  state: {
    // 当前定位or切换的城市名称
    curCityName: '深圳',
    // 城市列表数据
    cityData: []
  },

  getters: {
    /*
      对 state 中的 cityData 做二次处理 并返回数据
    */
    filterCityData (state) {
      let hash = {};
      let i = 0;
      let res = [];

      state.cityData.forEach(item => {
        // 1. 得到当前城市的数字母
        let firstLetter = item.pinyin.substr(0, 1).toUpperCase();
        // 判断当前城市 首字母是循环过程中第一次出现的还是多次出现。
        if (hash[firstLetter]) {
          // 存在
          let index = hash[firstLetter] - 1;
          res[index].list.push(item)
        } else {
          // 不存在
          hash[firstLetter] = ++i;
          let obj = {};
          obj.py = firstLetter;
          obj.list = [item];
          res.push(obj)
        }
        // 存在
      })
      let temp = res.sort((a, b) => {
        return a.py.charCodeAt() - b.py.charCodeAt();
      })
      return temp;
    },

    filterLetters (state, getters) {
      return getters.filterCityData.map(item => {
        return item.py;
      })
    }
  },

  mutations: {
    // key:value
    /*
      修改 curCityName
      payload 提交的载荷(参数)
    */
    chgCityName (state, payload) {
      state.curCityName = payload.name;
    },

    /*
      修改cityData
       payload 提交的载荷(参数)
    */
    chgCityData (state, payload) {
      state.cityData = payload
    }
  }
})

export default store;
