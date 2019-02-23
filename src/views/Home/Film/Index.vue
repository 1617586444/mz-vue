<template>
  <div>
    <div class="addr" @click="$router.push('/city')">{{curCityName}}<i class="iconfont icon-xjt" style="font-size:10px;margin-left:5px;"></i></div>
    <MzBanner></MzBanner>
    <MzTabs></MzTabs>
    <!--主体内容区-->
    <div class="goodsList">
      <ul>
        <router-link
          tag="li"
          to="/detail/100"
          class="filmInfo"
          v-for="item in FilmList"
          :key="item._id"
        >
          <div class="filmImg">
            <img :src="item.poster">
          </div>
          <div class="filmInfo-list">
            <h3>
              <span class="name" v-text="item.filmName">死侍2：我爱我家</span>
              <span class="item">2D</span>
            </h3>
            <div class="info-col">
              <span>观众评分:</span>
              <span class="grade" style="color: #ffb232;" v-text="item.grade">7.4</span>
            </div>
            <div class="nowPlayingFilm info-col">
              <span class="grade">导演：{{ item.category }}</span>
            </div>
            <div class="info-col">
              <span class="label">{{ item.nation }} | 119分钟</span>
            </div>
          </div>
          <div class="gp">
            <span>购票</span>
          </div>
        </router-link>
      <p class="film-data">暂无更多数据~</p>
      </ul>
    </div>
  </div>
</template>

<script>
import MzBanner from '@/components/MzBanner/Index';
import MzTabs from '@/components/MzTabs/Index';
import axios from 'axios';

export default {
  // 局部注册组件
  components: {
    MzBanner,
    MzTabs
  },
  data () {
    return {
      // 影片信息数据
      FilmList: []
    };
  },
  computed: {
    curCityName () {
      return this.$store.state.curCityName;
    }
  },
  // 调用
  created () {
    axios.get('http://localhost:3000/film/search', {
      params: {
        pageSize: 10
      }
    }).then(res => {
      var data = res.data;
      if (data.code === 0) {
        // 成功拿到数据
        this.FilmList = data.data;
      } else {
        alert(data.msg);
      }
    });
  }
};
</script>

<style lang="less">
.addr {
    position: absolute;
    top: 18px;
    left: 7px;
    color: #fff;
    z-index: 10;
    font-size: 13px;
    background: rgba(0,0,0,.2);
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    padding: 0 5px;
}
.swiper-container {
  height: 210px;
  img {
    width: 100%;
    height: 100%;
  }
  .swiper-pagination-bullet {
    opacity: 0.8;
  }
}
.film-list{
  .city-fixed{
    position: absolute;
      top: 18px;
      left: 7px;
      color: #fff;
      z-index: 10;
      font-size: 13px;
      background: rgba(0,0,0,.2);
      height: 30px;
      line-height: 30px;
      border-radius: 15px;
      text-align: center;
      padding: 0 5px;
  }
}

/* 影院列表信息 */
.goodsList {
  overflow: hidden;
  ul {
    width: 100%;
    margin-bottom: 50px;
    float: right;
    .film-data{
      text-align: center;
      font-size:12px;
      line-height:20px;
      color: #ccc;
      border-bottom: none;
    }
    .filmInfo {
      width: 100%;
      height: 124px;
      padding: 15px;
      box-sizing: border-box;
      border-bottom: 1px solid #ccc;
    }
  }
}
.filmImg {
  width: 66px;
  height: 99px;
  border-radius: 5px;
  overflow: hidden;
  float: left;
  img {
    width: 66px;
    height: 99px;
  }
}
.filmInfo-list {
  width: 218px;
  height: 100%;
  float: left;
  margin-left: 10px;
  padding-top: 8px;
  .nowPlayingFilm {
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    .grade {
      display: inline-block;
      width: 100%;
    }
  }
}
.name {
  color: #191a1b;
}
.item {
  font-size: 9px;
  color: #fff;
  background-color: #d2d6dc;
  height: 14px;
  line-height: 14px;
  padding: 2px 2px;
  border-radius: 2px;
  margin: 0 5px 5px 5px;
}
.info-col {
  height: 22px;
  color: #797d82;
  font-size: 15px;
  line-height: 20px;
}
.gp {
  width: 50px;
  height: 100%;
  float: right;
  line-height: 100%;
  span {
    display: block;
    border-radius: 5px;
    width: 50px;
    height: 25px;
    border: 1px solid #ff5200;
    color: #ff5200;
    line-height: 25px;
    text-align: center;
    font-size: 16px;
    margin: 28px auto;
  }
}
</style>
