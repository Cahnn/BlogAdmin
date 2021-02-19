<template>
    <div class="info">
        <el-form label-width="80px" style="margin-top: 15px">
            <el-form-item label="用户ID" required>
                <el-input v-model="info.ID"></el-input>
            </el-form-item>
            <el-form-item label="用户名" required>
                <el-input v-model="info.name"></el-input>
            </el-form-item>
            <el-form-item label="邮箱地址" required>
                <el-input v-model="info.email"></el-input>
                <el-button
                        type="primary"
                        size="medium"
                        @click="changeEmail()"
                        style="margin-left: 30px"
                >修改邮箱</el-button>
            </el-form-item>
            <el-form-item label="签名" required>
                <el-input v-model="info.sign"></el-input>
            </el-form-item>
            <el-button
                    type="primary"
                    size="medium"
                    @click="changeInfo()"
                    style="margin-left: 80px"
            >修改帐户信息</el-button>
        </el-form>
    </div>
</template>

<script>
    export default {
        name:"info",
        data(){
            return{
                info:{
                    ID:'190001',
                    name:'嘿，凤梨',
                    email:'17818343976@qq.com',
                    sign:'打得死的小强'
                }
            }
        },
        methods:{
            changeEmail(){

            },
            changeInfo(){

            }
        }
    }
</script>

<style scoped>
    .el-input{
        width: 300px;
    }
</style>
