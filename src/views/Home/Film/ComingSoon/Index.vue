<template>
  <div class="goodsList">
    <ul>
      <router-link
        tag="li"
        class="filmInfo"
        :to="'/detail/'+item.filmId"
        v-for="item in FilmListRight"
        :key="item.filmId"
      >
        <div class="filmImg">
          <img :src="item.poster">
        </div>
        <div class="filmInfo-list">
          <h3>
            <span class="name" v-text="item.name">死侍2：我爱我家</span>
            <span class="item" v-text="item.filmType.name">2D</span>
          </h3>
          <div class="info-col">
            <span class="grade" style="color: #ffb232;" v-text="item.grade">7.4</span>
          </div>
          <div class="nowPlayingFilm info-col">
            <span class="grade">主演：{{ item.director }}</span>
          </div>
          <div class="info-col">
            <span class="label">上映日期：周二 2月26日</span>
          </div>
        </div>
        <div class="gp">
          <span>预购</span>
        </div>
      </router-link>
      <p class="film-data">暂无更多数据~</p>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      // 影片信息数据
      FilmListRight: []
    };
  },

  // 调用
  created () {
    axios
      .get('https://m.maizuo.com/gateway?cityId=210300&pageNum=1&pageSize=10&type=2&k=1755331', {
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"1550840606101571681584854"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      })
      .then(res => {
        var data = res.data;
        // console.log(data);
        if (data.status === 0) {
          // 成功拿到数据
          this.FilmListRight = data.data.films;
          // console.log(data.data.films);
        } else {
          alert('网络有误，请稍后重试');
        }
      });
  }
};
</script>

<style lang="less">
/* 影院列表信息 */
.goodsList {
  overflow: hidden;
  ul {
    width: 100%;
    margin-bottom: 50px;
    float: right;
    .film-data {
      text-align: center;
      font-size: 12px;
      line-height: 20px;
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
