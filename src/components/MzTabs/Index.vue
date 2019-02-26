<template>
  <div class="tabs-bar-wrapper">
    <div class="tabs-bar">
      <ul class="tabs-nav">
        <li style="width: 50%;" :class="{'active': filmType === 'nowPlaying'}" @click="go('nowPlaying')">
          <span>正在热映</span>
        </li>
        <li style="width: 50%;" :class="{'active': filmType === 'ComingSoon'}" @click="go('ComingSoon')">
          <span>即将上映</span>
        </li>
        <div class="tab-ink-bar-wrapper"
          :style="[
            {width: '50%'},
            {transform: filmType === 'nowPlaying' ? 'translate3d(0%, 0px, 0px)' : 'translate3d(100%, 0px, 0px)' }
          ]">
          <span class="tab-ink-bar" style="width: 56px;"></span>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  computed: {
    ...mapState([
      'filmType'
    ])
  },

  methods: {
    ...mapMutations([
      'chgFilmType'
    ]),

    go (name) {
      this.chgFilmType(name);
      this.$router.replace('/films/' + name);
    }
  }
}
</script>

<style lang="less">
@import url('./index.less');
</style>
