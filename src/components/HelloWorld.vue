<template>
  <div class="hello">
    <div v-if="this.screenChk === true">
      <screen></screen>
    </div>
    <div v-if="this.screenChk === false">
    
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
    </div>
  </div>
</template>

<script>
import screen from './screen.vue'

export default {
  name: 'HelloWorld',
  components: { screen },
  props: {
    msg: String
  },
  data () {
    return {
      cookieChk: "",
      screenChk: false
    }
  },
  mounted () {
    this.screenFnc() // 초기 렌더링될때 실행되는 함수입니다.
  },
  methods: {
    /** 쿠키가 있으면 영상을 안보여주고 쿠키가 없을시에 보여줍니다.
     *  이 홈페이지가 첫 실행이 되면 영상을보여주고 
     *  동시에 하루짜리 쿠키하나를 생성합니다.
     *  쿠키가 존재하는한 영상은 로드되지 않습니다(일반적으로 있는 다시보지않기 활용)
     *  하루뒤에 다시 홈페이지를 로드하면 영상이 보입니다. 
     *  하지만 인터넷 어플에 개발자모드에서 쿠키를 지우면 영상이 보입니다.
     * */
    screenFnc() {
      this.cookieChk = this.$cookie.get("screen_chk") // 영상에 대한 쿠키를 가져옵니다.(첫실행시에는 없어서 아마 undefined 나올듯)
      
      if(this.cookieChk) { 
        this.screenChk = false  // 쿠키가 있으면 영상을 보여주지않습니다.
      } else {
        this.screenChk = true // 쿠키가 없으면 영상을 보여줍니다.
        this.$cookie.set("screen_chk", true, 1) // 영상을 보여줌과 동시에 하루짜리 쿠키를 하나 생성
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
