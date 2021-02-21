<template>
  <div class="home">
    <div class="articles">
<!--      快捷方式：发表文章 -->
      <div class="menu">
        <el-button type="primary" @click="dialogFormVisible = true" class="post">发表文章</el-button>

        <el-dialog title="新建文章" :visible.sync="dialogFormVisible">
          <el-form :model="mess">
            <el-form-item label="文章标题">
              <el-input v-model="mess.title"></el-input>
            </el-form-item>
            <el-form-item label="文章内容">
              <textarea v-model="mess.content" style="width: 100%;height: 150px"></textarea>
            </el-form-item>
            <el-form-item label="文章摘要">
              <el-input v-model="mess.major"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="commitArticle">发表文章</el-button>
          </div>
        </el-dialog>
      </div>
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
        arti:[],
        mess:{},
        dialogFormVisible: false,
      }
    },
    methods:{
      commitArticle(){
        // 检查标题、内容、摘要、不能为空
        if(this.mess.title == ''){
          this.$message.error('文章标题不能为空')
          return;
        }else if(this.mess.content == ''){
          this.$message.error('文章内容不能为空')
          return;
        }else if(this.mess.summary == ''){
          this.$message.error('文章摘要不能为空')
          return;
        }else if (this.mess._id){
          this.$http.post(`/api/${this.apiModel}/update`,this.mess).then(res => {
            console.log('bar:', res)
            this.mess={}
          })
        }else{
          this.$http.post('/api/'+this.apiModel+'/add',this.mess).then(res =>{
            console.log('bar:',res)
            this.mess = {}
          })
        }
        this.dialogFormVisible = false
      },
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
      if (this.$route.query._id){
        this.$http.post('/api/'+this.apiModel+'/get',{_id:this.$route.query._id}).then(res => {
          if (res&&res.length>0){
            this.arti = res[0]
          }
        })
      }
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
  .menu{
    width: 100%;
    height: 60px;
    border-bottom: 3px #B3C0D1 solid;
    text-align: right;
    line-height: 60px;
  }
  .post{
    margin-right: 20px;
  }
</style>
