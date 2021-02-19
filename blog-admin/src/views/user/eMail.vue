<template>
    <div class="email">
        <el-form label-width="100px" class="demo-ruleForm">
            <el-form-item label="邮箱" prop="name" required>
                <el-input v-model="email"></el-input>
                <el-button type="primary" @click="getCode()" size="medium">获取验证码</el-button>
            </el-form-item>
            <el-form-item label="验证码" prop="name" required>
                <el-input v-model="code" placeholder="请输入验证码"></el-input>
            </el-form-item>  <br>
            <el-form-item>
                <el-button type="primary" @click="changeEmail()" size="medium">修改邮箱</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>

<script>
    export default {
        name:"email",
        data(){
          return{
              email:'1781843976@qq.com',
              code:''
          }
        },
        methods:{
            getCode(){},
            changeEmail(){}
        }
    }
</script>

<style scoped>
    .el-form-item{
        margin-top: 20px;
    }
    .el-input{
        width: 250px;
    }
    .el-button{
        margin-left: 30px;
    }
</style>
