## 使用步骤

1. 安装 yarn add vuex
2. 创建一个 vuex 的仓库文件 src/store/index.js
3. 编写 仓库文件， 并暴露仓库
4. 在 main.jd 中。 将仓库做一个注入
5. 开撸


#

1. curCityName 写到了 仓库中
2. 组件中用了 curCityName 的需要删除掉， 而要换成仓库的 curCityName


# 如何从仓库中取出数据在组件中使用

1. computed:
computed : {
  curCityName () {
    return this.$store.state.curCityName;
  }
}

# 需要修改数据的时候要修改仓库的数据 如何修改仓库的数据？

并且也只能通过  仓库的  mutation 去修改


  mutations: {
    // key:value
    /*
      修改 curCityName
    */
    chgCityName (state) {
      state.curCityName = '白沙'
    }
  }

  组件中： (需要提交 chgCityName 这个 mutation)

   this.$store.commit('chgCityName')


#

this.$store.state.xxx 用起来不方便 vuex 提供有 mapState() 这个辅助函数供我们去调用

this.$store.getters.xxx----- vuex 提供 mapGetters()

this.$store.commit('xxx') --- vue mapMutations()

## 辅助函数的使用


1. 哪里要用哪里就先要引入,



## mapSate

1. 返回的是一个对象

  Vuex.mapState([
    'cityData',             =>
    'curCityName'
  ]),

      {
        cityData () {
          return this.$store.state.cityData
        },
        curCityName () {
          return this.$store.state.curCityName
        },
      }

-------

Vuex.mapState({
  cityData: (state) => state.cityData
  curCityName: 'curCityName'          =>
})
  {
    cityData () {
      return this.$store.state.cityDate
    },

    curCityName () {
      return this.$store.state.curCityName
    }
  }
