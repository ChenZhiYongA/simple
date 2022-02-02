<template>
  <div>
    <div class="row">
      <div class="sm-6 md-4 lg-4 col" v-for="(item,index) in articleArr" :key="index">
        <wired-card cardelevation="5">
          <strong class="fontSize">{{item.Name}}</strong>
          <p>{{item.content | omitContent}}</p>
          <button @click="toDetails(item.id)">{{ $t('Details') }}</button>
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
      /**
       * @file: index.vue
       * @method omitContent
       * params:
       * return:
       * @description:  split 1-100‘s string
       * @author: linnaishierhuachuan
       * @date: 2022/2/2
       */
      return e.slice(1, 100)+'……'
    }
  },
  methods: {
    toDetails(id){
      /**
       * @file: index.vue
       * @method toDetails
       * params:
       * return:
       * @description: link to Details of article
       * @author: linnaishierhuachuan
       * @date: 2022/2/2
       */
      this.$router.push({path:'/details',query:{id:id}})
    },
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
