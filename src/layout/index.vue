/*
 * Copyright(C),sira
 * Author: sira  j2922592097@gmail.com
 * Date: 2022-02-01 20:10:43
 * Version: 0.0.0.1
 * Description: layout Config Page
*/
<template>
  <div>
    <Navbar style="margin-bottom: 80px"></Navbar>
    <Main></Main>
    <br>
    <Footer></Footer>
  </div>
</template>

<script>
import Main from './components/Main';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default {
  components:{Main,Navbar,Footer},
  name: "index"
}
</script>

<style scoped>
.footer{
  position :absolute ;
  bottom: 0;
  left :0;
  right: 0;
}
</style>
