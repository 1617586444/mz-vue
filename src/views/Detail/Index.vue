<template>
  <div class="film">
    <div class="target-img">
      <div class="film-header" @click="$router.push('/film')">
        <i class="iconfont icon-zuojiantou1"></i>
      </div>
      <div class="lazy-img">
        <img :src="detailInfo.poster"
          alt=""
        >
      </div>
    </div>
    <div class="film-detail">
      <div class="col">
        <div class="film-name">
          <span class="name">{{detailInfo.name}}</span>
          <span class="item">2D</span>
        </div>
        <div class="film-grade">
          <span class="grade">{{detailInfo.grade}}</span>
          <span class="grade-text">分</span>
        </div>
      </div>
      <div class="film-category grey-text">{{ detailInfo.category }}</div>
      <div class="film-premiere-time grey-text">2019-02-22上映</div>
      <div class="film-nation-runtime grey-text">{{detailInfo.nation}} | {{detailInfo.runtime}}分钟</div>
      <div
        class="film-synopsis grey-text hidde"
        style="height: 192px;"
      >{{detailInfo.synopsis}}</div>
      <div class="toggle">
        <i class="iconfont icon-xjt"></i>
      </div>
    </div>
    <div class="bar-color"></div>
    <div class="actors">
      <div class="actors-title-bar">
        <span class="actors-title-text">演职人员</span>
      </div>
      <div
        class="row-scroll-wrapper actors-list"
        style="height: 140px; background: rgb(255, 255, 255);"
      >
        <ul class="row-scroll-items-nav">
          <li class="row-scroll-item"
          style="width: 85px; min-width: 85px;"
          v-for="item in detailInfo.actors"
          :key="item.filmId"

          >
            <td>
              <dl
                style="width: 85px; height: 85px; background: rgb(249, 249, 249); opacity: 1; display: block;"
              >
                <img
                  :src="item.avatarAddress"
                >
              </dl>
              <dd>
                <span data-v-5430d976 class="actors-name">{{item.name}}</span>
                <span data-v-5430d976 class="actors-role">{{item.role}}</span>
              </dd>
            </td>
          </li>
        </ul>
      </div>
    </div>
    <div class="bar-color"></div>
    <div class="photos">
      <div class="photos-title-bar">
        <span class="photos-title-text">剧照</span>
        <span class="photos-to-all">全部(7)
          <i class="iconfont icon-youjiantou" style="font-size: 13px;"></i>
        </span>
      </div>
      <div
        class="row-scroll-wrapper photos-list"
        style="height: 115px; background: rgb(255, 255, 255);"
      >
        <ul class="row-scroll-items-nav">
          <li class="row-scroll-item photos-item-wrap" style="width: 150px; min-width: 150px;"
          v-for="(vlue,index) in detailInfo.photos"
          :key="index"
          >
            <img
              :src="vlue"
              style="width: 150px; height: 100px; background: rgb(249, 249, 249);"
            >
          </li>
        </ul>
      </div>
    </div>
    <a
      href="#/film/4533/cinemas"
      class
      style="height: 49px; position: fixed; bottom: 0px; width: 100%;"
    >
      <div class="goSchedule">选座购票</div>
    </a>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    id: String
  },
  data () {
    return {
      // 影片详情信息
      detailInfo: {},
      img: ''
    };
  },
  // 调用
  created () {
    // url 上面带进来的id
    let id = this.id;
    axios
      .get('https://m.maizuo.com/gateway', {
        params: {
          filmId: id,
          K: 4888082
        },
        headers: {
          'X-Client-Info':
                '{"a":"3000","ch":"1002","v":"1.0.0","e":"1550840606101571681584854"}',
          'X-Host': 'mall.film-ticket.film.info'
        }
      })
      .then(res => {
        if (status === '0') {
        // console.log(res.data.data);
          // 成功拿到数据
          this.detailInfo = res.data.data.film;
          // console.log(this.detailInfo);
        } else {
          alert('网络有误，请稍后重试');
        }
      });
  }
};
</script>

<style lang="less">
@import url("./Index.less");
</style>
