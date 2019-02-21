// 这个是一个一级路由

/*
  var arr = [
    {
      name:'鞍山',
      pinyin:'anshan'
    },
    {
      name:'北京',
      pinyin:'beijing'
    }
  ]
  想要的格式：
  var arr2 = [
    {
      py:'A',
      list: [
        {
          name:'鞍山',
        }
      ]
    },
    {
      py:'B',
      list: [
        {
          name:'北京'
        }
      ]
    }
  ]
 */

<template>
  <div class="mz-city">
    <MzHeader :title="'当前城市-'+ curCityName">{{ filterCityData }}</MzHeader>
    <div class="lv-indexlist">
      <ul class="lv-indexlist__content" id="lv-indexlist__content">
        <div class="recommend-city">
          <div class="gprs-city">
            <div class="city-index-title">GPS定位你所在城市</div>
            <ul class="city-index-detail">
              <li class="city-item-detail city-item-detail-gprs">
                <div class="city-item-text">定位失败</div>
              </li>
            </ul>
          </div>
          <div class="hot-city">
            <div class="city-index-title">热门城市</div>
            <ul class="city-index-detail">
              <li class="city-item-detail">
                <div class="city-item-text">上海</div>
              </li>
              <li class="city-item-detail">
                <div class="city-item-text">天津</div>
              </li>
            </ul>
          </div>
        </div>
        <li
          class="lv-indexsection"
          v-for="(item,index) in filterCityData"
          :key="index"
          :id="item.py"
        >
          <p class="lv-indexsection__index">{{ item.py }}</p>
          <ul>
            <li v-for="city in item.list"
            :key="city.cityId"
            @click="changeCity(city)"
            >{{ city.name }}</li>
          </ul>
        </li>
      </ul>
      <div class="lv-indexlist__nav">
        <ul>
          <li v-for="(item,index) in filterLetters" :key="index" @click="Top(item)">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import MzHeader from '../../components/MzHeader/Index';
export default {
  components: {
    MzHeader
  },
  data () {
    return {
      // curCityName: '深圳', 自身数据不要，二十用仓库的数据 curCtityName
      // 获取城市列表
      // cityData: []
    }
  },

  computed: {
    cityData () {
      return this.$store.state.cityData
    },

    filterCityData () {
      return this.$store.getters.filterCityData;
    },

    filterLetters () {
      return this.$store.getters.filterLetters;
    },
    curCityName () {
      return this.$store.state.curCityName;
    }

  },

  methods: {
    /*
      获取城市列表数据
     */
    getCityData () {
      axios.get('./json/city.json').then(response => {
        let res = response.data;
        if (res.status === 0) {
          // 成功
          // this.cityData = res.data.cities;
          this.$store.commit('chgCityData', res.data.cities);
        } else {
          // 失败
          alert(res.msg)
        }
        // console.log(res);
      })
    },
    /*
      右侧字母点击
      @param { string }  py点击的字母
    */
    Top (py) {
    //  得到左侧的到距离顶部的距离
      let el = document.getElementById(py);
      // 得到， el
      // 2. 操作页面滚动条滚动
      document.getElementById('lv-indexlist__content').scrollTop = el.offsetTop
    },
    /*
      切换城市
    */
    changeCity (city) {
      // this.curCityName = city.name;
      // this.$store.state.curCityName = city.name  不能这么用
      // this.$store.commit('chgCityName',city.name)
      this.$store.commit('chgCityName', {
        name: city.name,
        age: 18
      })
    }
  },
  created () {
    this.getCityData()
  }
}
</script>

<style lang="less">
@import url("./city.less");
</style>
