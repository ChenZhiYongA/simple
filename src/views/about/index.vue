/*
* Copyright(C),sira
* Author: sira  j2922592097@gmail.com
* Date: 2022-02-01 17:34:49
* Version: 0.0.0.1
* Description: About Me Page
*/
<template>
  <div>
    <wired-card elevation="3" v-if="$i18n.locale=='en'">
      <h4>About Me</h4>
      <p>Hi,Guys, I'm Chen, You Can Call Me Sira too,I'm a Chinese,This's my first attempt at open source project. Maybe
        he is not very good, or maybe he can be better, but I hope to improve this project with you, maybe we have not
        met, but we can know each other through code</p>
      <p>I now live in Changsha China,and have started a university internship,This made my time to fully develop open
        source very short,So I had to stretch the This project open source plan </p>
      <p>I'm trying to make the open source world a better place</p>
      <p>If You Have Good Idea, You can do with me </p>
      <p>This My Google email
        <wired-link href="#">j2922592097@gmail.com</wired-link>
      </p>
    </wired-card>
    <wired-card elevation="3" v-if="$i18n.locale=='cn'">
      <h4>关于我</h4>
      <p>你们好，我是陈，现居湖南长沙，这是我的第一个开源项目，也许这个项目并不很完善，也不是很好，或许说也可以更好，但是我希望可以与你一起完善这个项目。</p>
      <p>我现在处于一个大学实习状态，由于工作时间的安排，我并没有很多的时间完善这个项目，也许你提交了issues但我并不能及时的回复你，所以我更需要你们的帮助。</p>
      <p>我在尝试让开源世界变得更加美好。</p>
      <p>如果你有更好的想法或IDEA我想我们可以一起探讨探讨，或者一起开发，我们可以以码会友。</p>
      <p>联系我：
        <wired-link href="#">2922592097@qq.com</wired-link>
      </p>
    </wired-card>
    <h3># {{$t('thank')}}</h3>
    <table>
      <thead>
      <tr>
        <th>#</th>
        <th v-for="(item,index) in $t('aboutTable')" :key="index">{{item}}</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>1</td>
        <td>Font Style</td>
        <td>Google Fonts</td>
        <td>Kimberly Geswein</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Style Library</td>
        <td>wired-elements</td>
        <td>-</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Style Library</td>
        <td>papercssCSS</td>
        <td>-</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Js Library</td>
        <td>Vue</td>
        <td>Evan You</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Mock Library</td>
        <td>Mock Data</td>
        <td>-</td>
      </tr>
      <tr>
        <td>6</td>
        <td>i18n Library</td>
        <td>vue-i18n</td>
        <td>-</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>
