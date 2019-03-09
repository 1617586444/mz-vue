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
            <span class="grade">观众评分：
              <span style="color: #ffb232;">{{item.grade}}分</span>
            </span>
          </div>
          <div class="nowPlayingFilm info-col">
            <span
              class="grade"
            >主演：{{ item.actors ? item.actors.map(item => item.name).join(' ') : '暂无主演' }}</span>
          </div>
          <div class="info-col">
            <span class="label">{{ item.nation }} | {{ item.runtime}}分钟</span>
          </div>
        </div>
        <div class="gp">
          <span>购票</span>
        </div>
      </router-link>
      <p class="film-data" v-if="pageNum >= pages">已经没有更多电影啦~</p>
      <center v-else @click="loadMore" style="line-height:30px; height:30px;">点击加载更多</center>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      // 影片信息数据
      FilmListRight: [],
      pageNum: 1,
      total: 0,
      pageSize: 10,
      cityId: this.$store.state.curCityId

    };
  },

  computed: {
    pages () { // 一共多少页
      return Math.ceil(this.total / this.pageSize);
    }
  },
  created () {
    this.getFilmData()
  },
  // 调用
  methods: {
    getFilmData () {
      axios
        .get(
          'https://m.maizuo.com/gateway',
          {
            params: {
              cityId: this.cityId || 440300,
              pageNum: this.pageNum,
              pageSize: this.pageSize,
              type: 1,
              K: 4843540
            },
            headers: {
              'X-Client-Info':
                '{"a":"3000","ch":"1002","v":"1.0.0","e":"1550840606101571681584854"}',
              'X-Host': 'mall.film-ticket.film.list'
            }
          }
        )
        .then(res => {
          var data = res.data;
          // console.log(data.data.films[1]);
          if (data.status === 0) {
            // 成功拿到数据
            // this.FilmListRight = data.data.films;
            // 追加 方法一
            // this.FilmListRight.push(...data.data.films)
            // 方法二
            this.FilmListRight = this.FilmListRight.concat(data.data.films)
            this.total = data.data.total; // 总条数
          } else {
            alert('网络有误，请稍后重试');
          }
        });
    },

    loadMore () {
      this.pageNum++;
      this.getFilmData()
    }

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
