<template>
  <div class="home">
    <div class="articles">
      <div class="article" v-for="(item,index) in arti" :key="index">
        <div class="title">{{item.title}}</div>
        <div class="content">
          {{item.content}}
        </div>
        <div class="more"><div><router-link :to="`/BlogContent?_id=${item._id}`">阅读更多>></router-link></div></div>
<!--        <div class="more"><div @click="handleClick(item._id)">阅读更多>></div></div>-->

      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name:'home',
    data(){
      return{
        apiModel: 'arti',
        arti:[]
      }
    },
    methods:{
      handleClick(item) {
        // console.log(row);
        this.$router.push({ path: '/BlogContent', query: {_id:item._id} })
      },
      findArti(){
        this.$http.post('/api/'+this.apiModel+'/find', this.arti).then(res => {
          console.log('res:', res)
          this.arti = res
        })
      }
    },
    mounted() {
      this.findArti()
    }
  }
</script>

<style>
  .article{
    height: 180px;
    width: 80%;
    margin: 20px 40px;
    background-color: #B3C0D1;
    border-radius: 10px;
    padding: 10px;
    position: relative;
  }
  .title{
    height: 40px;
    font-size: 22px;
    font-weight: 600;
  }
  .content{
    width: 100%;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .more{
    height: 30px;
    position: absolute;
    bottom: 22px;
    right: 12px;
  }
  .more div{
    float: right;
    margin: 10px 10px 10px 0;
  }
  a{
    text-decoration: none;
    color: #545C64;
  }
</style>
