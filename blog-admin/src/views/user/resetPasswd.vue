<template>
    <div class="resetpasswd">
        <el-form style="margin: 15px 0 0 15px" label-position="right" label-width="100px">
            <el-form-item label="手机号/邮箱" required>
                <el-input v-model="user.account"></el-input>
            </el-form-item>
            <el-form-item label="密码" required>
                <el-input v-model="user.passwd"></el-input>
                <el-button type="primary" size="medium" @click="resetpasswd()" style="margin-left: 15px">重置密码</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name:"resetpasswd",
        data(){
            return{
                user:{
                    account:'18300013191',
                    passwd:'qweqweqwe',
                }
            }
        },
        methods:{
            resetpasswd(){

            }
        }
    }
</script>

<style scoped>
    .el-input{
        width: 300px;
    }
</style>
