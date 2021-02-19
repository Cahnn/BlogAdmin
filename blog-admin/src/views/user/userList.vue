<template>
    <div class="userlist">
        <div class="userlist-bar">
            <el-table
                    :data="userList.filter(data => !search || data.username.toLowerCase().includes(search.toLowerCase()))"
                    style="width: 100%"
                    :border="true">
                <el-table-column
                        fixed
                        label="ID"
                        prop="num"
                        width="120">
                </el-table-column>
                <el-table-column
                        label="用户名"
                        prop="username"
                        width="120"
                        align="center">
                </el-table-column>
                <el-table-column
                        label="邮箱"
                        prop="email"
                        width="180"
                        align="center">
                </el-table-column>
                <el-table-column
                        label="状态"
                        width="120"
                        align="center">
                    <template slot-scope="scope" v-if="scope.row">
                        <div v-if="scope.row.status === 1" size="mini">
                            <el-tag type="success">正常</el-tag>
                        </div>
                        <div v-if="scope.row.status === 0" size="mini">
                            <el-tag type="danger">已删除</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                        label="签名"
                        prop="sign"
                        width="200">
                    <template slot-scope="scope" v-if="scope.row">
                        <div v-if="scope.row.sign" size="mini">
                            <span v-text="scope.row.sign"></span>
                        </div>
                        <div v-else size="mini">
                            <span>这个人很懒，什么也没留下</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                        label="注册日期"
                        prop="date"
                        width="130"
                        align="center">
                </el-table-column>
                <el-table-column
                        align="center"
                        fixed="right"
                        width="200">
                    <template slot="header">
                        <el-input
                                v-model="search"
                                size="mini"
                                placeholder="输入关键字搜索"/>
                    </template>
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                @click="resetpassword(scope.$index, scope.row)">Reset</el-button>
                        <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)"
                                v-if="scope.row.status!==0">Delete</el-button>
                        <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)"
                                v-if="scope.row.status===0" disabled>Delete</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <el-pagination
                background
                layout="prev, pager, next"
                :total="pageNavigation.totalCount"
                :page-size="pageNavigation.pageSize"
                :current-page="pageNavigation.currentPage"
                >
        </el-pagination>
    </div>
</template>

<script>

    export default {
        name:"userlist",
        data(){
            return{
                search:'',
                userList:[
                    {
                        "id": 1,
                        "num": 1903019911,
                        "username": "张三",
                        "email": "zhangsan@qq.com",
                        "sign": "我是张三，请叫我阿三",
                        "status": 1,
                        "date": "2018-03-04"
                    },
                    {
                        "id": 2,
                        "num": 1903019912,
                        "username": "李四",
                        "email": "lisi33333@qq.com",
                        "sign": "学海无涯",
                        "status": 1,
                        "date": "2018-04-04"
                    },
                    {
                        "id": 3,
                        "num": 1903019913,
                        "username": "王五",
                        "email": "wangwu555@qq.com",
                        "sign": null,
                        "status": 1,
                        "date": "2018-10-09"
                    },
                    {
                        "id": 4,
                        "num": 1903019914,
                        "username": "牛柳",
                        "email": "niuliu666@qq.com",
                        "sign": "宇宙超级无敌美少女",
                        "status": 1,
                        "date": "2016-07-13"
                    },
                    {
                        "id": 5,
                        "num": 1903019915,
                        "username": "周期",
                        "email": "zhouqi777@qq.com",
                        "sign": "hey，boy",
                        "status": 1,
                        "date": "2020-11-24"
                    }
                ],
                pageNavigation: {
                    currentPage: 1,
                    totalCount: 0,
                    // pageCount: 1,
                    pageSize: 5
                }
            }
        },
        created() {
            // fetch('http://localhost:20000/userList')
            //     .then(res =>{
            //         return res.json()
            //     })
            //     .catch(err => {
            //         console.log(err)
            //     })
            //     .then(data => {
            //         this.userList = data
            //         console.log(data,"我成功了吗")
            //     })
        },
        methods:{
            resetpassword(){},

            handleDelete(index, row) {
                // this.deleteTargetId = item.ID
                console.log(index, row);
                this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    row.status = 0
                    this.$message({
                        type: 'success',
                        message: '删除成功!',
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
                // console.log(row)
            },
            // handleUserListResult(){
            //     this.userList = data.userList
            //     // this.pageNavigation.currentPage =
            // }
        }
    }
</script>

<style scoped>

</style>
