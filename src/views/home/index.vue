<template>
  <div>
    <div class="row">
      <div class="sm-6 md-4 lg-4 col" v-for="(item,index) in articleArr" :key="index">
        <wired-card cardelevation="5">
          <strong class="fontSize">{{item.Name}}</strong>
          <p>{{item.content | omitContent}}</p>
          <button>{{ $t('Details') }}</button>
          <span class="timeStyle">{{$t('time')}}：{{item.date}}</span>
        </wired-card>
      </div>
    </div>
    <div style="text-align: center;">
      <wired-button>{{$t('readmore')}}</wired-button>
    </div>
  </div>
</template>

<script>
import {article} from "../../apis/article";

export default {
  name: "index",
  data(){
    return{
      articleArr:[]
    }
  },
  created() {
    this.getArticle()
  },
  filters:{
    omitContent(e){
      return e.slice(1, 100)+'……'
    }
  },
  methods: {
    getArticle() {
      /**
       * @file: index.vue
       * @method getArtiicle
       * params:
       * return:
       * @description: get article List
       * @author: linnaishierhuachuan
       * @date: 2022/2/1
       */
      article().then(res=>{
        console.log(res)
        this.articleArr = res.data
      })
    }
  }
}
</script>

<style scoped>
.fontSize {
  font-size: 30px;
}
.timeStyle{
  font-size: 15px;
  float: right;
  line-height: 70px;
}
</style>
