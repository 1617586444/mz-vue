// 这个是一个一级路由

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
                <div class="city-item-text">{{ curCityName ? curCityName : '定位失败' }}</div>
              </li>
            </ul>
          </div>
          <div class="hot-city">
            <div class="city-index-title">热门城市</div>
            <ul class="city-index-detail">
              <li
                class="city-item-detail"
                v-for="(city,index) in idHotCity"
                :key="index"
              >
                <div class="city-item-text">{{ city }}</div>
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
            <li
              v-for="city in item.list"
              :key="city.cityId"
              @click="changeCity(city,city.cityId)"
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
import MzHeader from '@/components/MzHeader/Index';
// PS:  mapGetters   mapState 用在 computed 属性里面
// mapMutations   mapActions 放在methods 里面
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

// Vuex.mapState()
// Vuex.mapMutations()
// Vuex.mapGetters()
// Vuex.mapActions()

export default {
  components: {
    MzHeader
  },
  data () {
    return {
      idHotCity: ['北京', '上海', '深圳', '广州']
    };
  },
  computed: {
    ...mapState(['cityData', 'curCityName']),
    ...mapState('ma', {
      maName: state => state.name
    }),
    ...mapState('mb', {
      mbName: state => state.name
    }),
    ...mapGetters(['filterCityData', 'filterLetters']),

    mcName () {
      return this.$store.state.mc.name;
    }
  },
  methods: {
    // 给组件加一个方法，方法其实就是 mutaion
    ...mapMutations(['chgCityName', 'chgCityData']),
    ...mapMutations('ma', ['chgName']),
    ...mapActions(['getCityData']),
    /*
      右侧字母点击
      @param { string }  py点击的字母
    */
    Top (py) {
      //  得到左侧的到距离顶部的距离
      let el = document.getElementById(py);
      // 得到， el
      // 2. 操作页面滚动条滚动
      document.getElementById('lv-indexlist__content').scrollTop = el.offsetTop;
    },
    /*
      切换城市
    */
    changeCity (city, id) {
      // this.curCityName = city.name;
      // this.$store.state.curCityName = city.name  不能这么用
      // this.$store.commit('chgCityName',city.name) 直接传参
      // this.$store.commit('chgCityName', {  // 对象传参
      //   name: city.name,
      //   age: 18
      // });
      // console.log(id);
      this.chgCityName({
        name: city.name,
        id: id,
        age: 15
      });
      // 传参完成跳转到页面
      this.$router.push('/film');
    }
  },
  created () {
    // this.getCityData()
    // 调用仓库中的 actions
    // this.$store.dispatch('getCityData')
    this.getCityData();
  }
};
</script>

<style lang="less">
@import url("./city.less");
</style>
