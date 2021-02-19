<template>
    <div class="article-post-box">
<!--        标题-->
        <div class="article-title-part">
            <el-input
                    v-model="arti.title"
                    placeholder="文章标题(2-30个字符)"
                    maxlenght="30"
                    minlenght="2"
                    show-word-limit
            ></el-input>
        </div>
<!--        内容编辑部分-->
        <div class="article-post-part">
            <mavon-editor v-model="arti.content" />
        </div>
        <div class="article-post-setting">
            <el-form ref="form" :model="arti" label-width="80px">
                <el-form-item label="摘要" required>
                    <el-input
                            type="textarea"
                            :rows="3"
                            placeholder="请输入内容"
                            v-model="arti.major">
                    </el-input>
                </el-form-item>
            </el-form>
        </div>
<!--        发布按钮-->
        <div class="article-post-action-bar" clearfix>
            <div class="action-btn-container">
                <el-button size="small" type="primary" @click="commitArticle">发表文章</el-button>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name:'article-post-box',
        data(){
            return{
                arti:{},
                apiModel:'arti',
            }

        },
        methods:{
            commitArticle(){
              // 检查标题、内容、摘要、不能为空
                if(this.arti.title == ''){
                    this.$message.error('文章标题不能为空')
                    return;
                }else if(this.arti.content == ''){
                    this.$message.error('文章内容不能为空')
                    return;
                }else if(this.arti.summary == ''){
                    this.$message.error('文章摘要不能为空')
                    return;
                }else if (this.arti._id){
                    this.$http.post(`/api/${this.apiModel}/update`,this.arti).then(res => {
                        console.log('bar:', res)
                        this.$router.push({path:this.apiModel})
                        this.arti={}
                    })
                }else{
                    this.$http.post('/api/'+this.apiModel+'/add',this.arti).then(res =>{
                        console.log('bar:',res)
                        this.$router.push({path:this.apiModel})
                        this.arti = {}
                    })
                }
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
        }
    }
</script>

<style>
    .el-input{
        margin: 10px 0 0 10px;
        width: 90%;
    }
    .article-title-part input{
        border: none;
        font-size: 18px;
    }
    .article-post-part{
        width: 100%;
        margin-top: 10px;
    }
    .article-post-part .markdown-body{
        height: 500px;
    }
    .article-post-part .v-note-op{
        position: sticky;
        top: 0;
    }
    .article-post-setting{
        margin-bottom: 100px;
    }
    .article-post-setting .el-form-item:first-child{
        margin-top: 15px;
    }
    .article-post-setting .el-textarea__inner{
        width: 400px;
    }
    .action-btn-container{
        float: right;
        padding: 10px;
    }
    .el-tag{
        margin-left: 10px;

    }
    .input-new-tag{
        width: 150px;
    }
    .button-new-tag{
        margin-left: 10px;
    }
    .article-post-action-bar{
        width: 80%;
        position: fixed;
        bottom: 0;
        z-index: 1000;
        margin-left: -9%;
        background-color: white;
        border-top: 1px solid #B3C0D1;
    }
</style>
