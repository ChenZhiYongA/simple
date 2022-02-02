/*
* Copyright(C),sira
* Author: sira  j2922592097@gmail.com
* Date: 2022-02-02 11:38:43
* Version: 0.0.0.1
* Description: details page
*/
<template>
  <div>
    <strong class="fontStyle"># {{details.title}}</strong>
    <wired-divider></wired-divider>
    <div class="row">
      <div class="sm-6 md-8 lg-10 col">
        <wired-card elevation="3">
          <p>
            <img src="https://unsplash.it/200" class="float-left">
            {{details.content}}
            <img src="https://unsplash.it/100" class="float-right">
            Aenean mauris tellus......
          </p>
          Sira：dear all
          {{details.date}}
          {{details.address}}
        </wired-card>
      </div>
      <div class="sm-6 md-4 lg-2 col">
        <wired-card class="stickyTop" elevation="3">
          <ul>
            <li><a href="#">title</a></li>
            <li><a href="#">content</a></li>
            <li><a href="#">content</a></li>
            <li><a href="#">content</a></li>
            <li><a href="#">content</a></li>
            <li><a href="#">content</a></li>
          </ul>
        </wired-card>
      </div>
    </div>

  </div>
</template>

<script>
import {articleInfo} from "../../../apis/article";

export default {
  name: "index",
  data() {
    return {
      details:{}
    }
  },
  created() {
    this.getArticleInfo()
  },
  methods: {
    getArticleInfo() {
      /**
       * @file: index.vue
       * @method getArticleInfo
       * params:
       * return:
       * @description: here Get Article Details'info
       * @author: linnaishierhuachuan
       * @date: 2022/2/2
       */
      articleInfo().then(res => {
        this.details = res.data
      })
    }
  }
}
</script>

<style scoped>
.fontStyle {
  font-size: 60px;
}
.stickyTop{
  position: -webkit-sticky;
  position: sticky;
  top: 100px;
  width: 100%;
}
</style>
