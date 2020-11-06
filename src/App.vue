<template>
  <a-button type="primary">Hello World! <smile-outlined /></a-button>
</template>

<script>
import SmileOutlined from '@ant-design/icons-vue/SmileOutlined';

export default {
  name: 'App',
  components: {
    SmileOutlined,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
