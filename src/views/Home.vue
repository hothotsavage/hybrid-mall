<template>
  <div class="home">
    <p class="test">测试 fontsize</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
// 引用px2rem函数
@import "@css/style.scss";
  .test {
    font-size: px2rem(16);
  }
</style>
