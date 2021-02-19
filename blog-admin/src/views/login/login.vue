<template>
    <div class="login">
<!--后台登录入口，只有登录，没有注册，也没有找回密码-->
<!--        只有门户一个用户入口，如果是管理员则直接跳转到管理中心，或首页/重定向的页面-->
<!--        如果是门户的登录，则有登录、注册、找回密码等功能-->

<!--        顶部-->
        <div class="login-box-top">
            <div class="title">
                博客后台系统  |  登录
            </div>
        </div>
<!--        登录页中部-->
        <div class="login-box-center">
<!--            gutter是指栅格间间隔-->
            <el-row :gutter="20" style="width:288px;margin: 0 auto">
                <el-col :span="24">
                    <el-form label-position="center" label-width="100px">
                        <el-form-item label="帐号" required>
                            <el-input v-model="user.userName" placeholder="用户名/邮箱"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" required>
                            <el-input v-model="user.password" placeholder="请输入密码"></el-input>
                        </el-form-item>
<!--                        <el-form-item label="人类验证码" required>-->
<!--                            <el-input v-model="loginInfo.verifyCode" placeholder="请输入右侧验证码"></el-input>-->
<!--                        </el-form-item>-->
                        <el-form-item>
                            <el-button type="primary" @click="gologin()" size="small">登 录</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>

        </div>
<!--        登录页底部-->
        <div class="login-box-bottom"></div>
    </div>
</template>

<script>
    export default {
        name:"login",
        data() {
            return {
                user: {
                    userName: '',
                    password: ''
                }
                // loginInfo:{
                //     verifyCode:'',
                //     captcha_key:'',
                //     from: ''
                // }
            };
        },
        methods:{
            gologin(){

            }
        }
    }
</script>

<style scoped>
    .login-box-top{
        height: 44px;
        width: 100%;
        background-color: #B3C0D1;
    }
    .title{
        width: 980px;
        line-height: 44px;
        color: rgb(84,92,100);
        margin: 0 auto;
        }
    .login-box-center{
        width: 50%;
        background-color: #B3C0D1;
        margin: 30px auto;
        box-shadow: 0 1px 8px grey;
        border-radius: 5px;
    }
    .el-col{
        /*width: 50%;*/
        margin: 20px auto;
    }
</style>
