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
    <MzHeader title="当前城市-">{{ filterCityData }}</MzHeader>
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
            <li v-for="city in item.list" :key="city.cityId">{{ city.name }}</li>
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
      // 获取城市列表
      cityData: []
    }
  },

  computed: {
    /*
      处理后的城市数据
    */
    filterCityData () {
      let hash = {};
      let i = 0;
      let res = [];

      this.cityData.forEach(item => {
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
    /*
      右侧显示的字母的数据
    */
    filterLetters () {
      return this.filterCityData.map(item => {
        return item.py;
      })
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
          // res.data.cities
          this.cityData = res.data.cities;
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
    // console.log(document.getElementById(py));
      let el = document.getElementById(py);
      // 得到， el
      // console.log(el.offsetTop);
      // 2. 操作页面滚动条滚动
      document.getElementById('lv-indexlist__content').scrollTop = el.offsetTop
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
