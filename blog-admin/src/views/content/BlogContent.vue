<template>
    <div class="blog_content">
        <div class="info">
            <h2 class="title">{{arti.title}}</h2>
            <div class="content">{{arti.content}}</div>
        </div>
        <div class="edit">
            <el-button type="primary" class="edit-btn" @click="dialogFormVisible = true">编辑文章</el-button>

            <el-dialog title="新建文章" :visible.sync="dialogFormVisible">
                <el-form :model="arti">
                    <el-form-item label="文章标题">
                        <el-input v-model="arti.title"></el-input>
                    </el-form-item>
                    <el-form-item label="文章内容">
                        <textarea v-model="arti.content" style="width: 100%;height: 150px"></textarea>
                    </el-form-item>
                    <el-form-item label="文章摘要">
                        <el-input v-model="arti.major"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="commitArticle">确认修改</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    export default {
        name:'blog_content',
        data(){
            return{
                apiModel: 'arti',
                arti: {},
                dialogFormVisible: false,
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
                        // this.$router.push({path:this.apiModel})
                        this.arti={}
                    })
                }else{
                    this.$http.post('/api/'+this.apiModel+'/add',this.arti).then(res =>{
                        console.log('bar:',res)
                        // this.$router.push({path:this.apiModel})
                        this.arti = {}
                    })
                }
                this.dialogFormVisible = false
            },
            findOne(){
                this.$http.post('/api/'+this.apiModel+'/find', this.$route.query._id).then(res => {
                    console.log('res:', res)
                    console.log(this.$route.query._id)
                    console.log(res.length)
                    let id = this.$route.query._id
                    let one = Array
                   res.forEach(function (i) {
                        if (i._id === id){
                            console.log(i)
                            one = i
                        }
                   })
                    this.arti = one
                    console.log('arti数据：',this.arti)
                })
            }
        },
        mounted() {
            this.findOne()
        }
    }
</script>

<style scoped>
    .blog_content{
        width: 80%;
        padding: 20px 20px 0 20px;
        margin: 5%;
        background-color: white;
        border-radius: 12px;
    }
    .title{
        margin-left: 25%;
    }
    .content{
        line-height: 30px;
    }
    .edit{
        height: 60px;
        line-height: 60px;
        margin-top: 30px;
    }
    .edit-btn{
        float: right;
        margin-right: 20px;
    }
</style>
