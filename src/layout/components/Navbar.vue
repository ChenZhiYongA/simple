/*
 * Copyright(C),sira
 * Author: sira  j2922592097@gmail.com
 * Date: 2022-02-01 20:10:05
 * Version: 0.0.0.1
 * Description: Navbar Config Page
*/
<template>
  <div>
    <nav class="border fixed split-nav">
      <div class="nav-brand">
        <router-link to="/">
          <h3><a href="#">{{ $t('title') }}</a></h3>
        </router-link>
      </div>
      <div class="collapsible">
        <input id="collapsible1" type="checkbox" name="collapsible1">
        <label for="collapsible1">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </label>
        <div class="collapsible-body">
          <ul class="inline">
<!--            <wired-combo id="combo" selected="cn" ref="locale">-->
<!--              <wired-item :key="index" :value="item.value">-->
<!--                {{ item.title }}-->
<!--              </wired-item>-->
<!--            </wired-combo>-->
            <li>
              <select v-model="$i18n.locale">
                <option :key="index" :value="item.value" v-for="(item,index) in $t('lang')">{{item.flag}}{{item.title}}</option>
              </select>
            </li>
            <router-link to="/about">
              <li><a href="#">{{$t('navTab')}}</a></li>
            </router-link>
            <li><a href="https://github.com/ChenZhiYongA/simple/">Github</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data(){
    return{
      mane:'11'
    }
  },
  watch:{
    '$refs.locale.value'(e){
      console.log(e)
    }
  },
  methods: {
    changeLang() {
      console.log()
    },
    // $i18n.locale
  }
}
</script>

<style scoped>

</style>
