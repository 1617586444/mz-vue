// 仓库文件
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import a from './modules/a.js';
import b from './modules/b.js';
import c from './modules/c.js';
Vue.use(Vuex);

// 创建仓库
let store = new Vuex.Store({
  // 选项对象

  // 状态 - 放项目中需要的数据(需要多个组件之间使用的数据)
  state: {
    // 当前定位or切换的城市名称
    curCityName: '',
    // 城市列表数据
    cityData: [],
    nickName: ''
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

    chgNickName (state, payload) {
      state.nickName = payload;
    },

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
  },

  actions: {
    /*
      调用 百度api 获取当前的城市名称
    */
    getCityName ({ commit }) {
      /* eslint-disable */
      var myCity = new BMap.LocalCity();
      myCity.get( (result) => {
        commit('chgCityName', {
          name: result.name
        })
      })
    },
    /*
    获取城市列表数据
    */
    getCityData ({ commit, state, getters}) {
      axios.get('./json/city.json').then(response => {
        let res = response.data;
        if (res.status === 0) {
          // 成功
          // this.cityData = res.data.cities;
          // this.$store.commit('chgCityData', res.data.cities);
          // this.chgCityData(res.data.cities)
          commit('chgCityData', res.data.cities)
        } else {
          // 失败
          alert(res.msg)
        }
        // console.log(res);
      })
    },
  },
  modules: {
    ma: a,
    mb: b,
    mc: c
  }

  // namespaced: true  如果使用了modules 推荐大家都使用命名空间
})

export default store;
