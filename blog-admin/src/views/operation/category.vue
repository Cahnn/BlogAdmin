<template>
    <div class="category-box">
        <div class="category-list">
            <el-table
                    :data="categories.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                    style="width: 100%"
                    :border="true">
                <el-table-column
                        fixed
                        label="ID"
                        prop="num"
                        width="100">
                </el-table-column>
                <el-table-column
                        label="分类名称"
                        prop="name"
                        width="120"
                        align="center">
                </el-table-column>
                <el-table-column
                        label="状态"
                        width="120"
                        align="center">
                    <template slot-scope="scope" v-if="scope.row">
                        <div v-if="scope.row.status === 1" size="mini"><el-tag type="success">正常</el-tag></div>
                        <div v-if="scope.row.status === 0" size="mini"><el-tag type="danger">已删除</el-tag></div>
                    </template>
                </el-table-column>
                <el-table-column
                        label="描述"
                        prop="desc"
                        width="200">
                </el-table-column>
                <el-table-column
                        label="创建日期"
                        prop="date"
                        width="130"
                        align="center">
                </el-table-column>
                <el-table-column
                        label="更新日期"
                        prop="update"
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
                                @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
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
        <div class="select">
            <el-button class="add" type="success" round size="mini" @click="showAddCategory()">添加分类</el-button>
        </div>
        <div class="dioaog-category">
            <el-dialog
                    :title=editTitle
                    :visible.sync="editorDialogShow"
                    width="200"
                    >
<!--                :before-close="handleClose"-->
                <div>
                    <el-form label-width="80px" :model="categoryDialog">
                        <el-form-item label="分类名称">
                            <el-input v-model="categoryDialog.name"></el-input>
                        </el-form-item>
                        <el-form-item label="分类描述">
                            <el-input
                                    type="textarea"
                                    :rows="2"
                                    resize="none"
                                    maxlength="50"
                                    placeholder="请输入内容"
                                    v-model="categoryDialog.textarea">
                            </el-input>
                        </el-form-item>
<!--                        <el-form-item label="活动形式">-->
<!--                            <el-input v-model="formLabelAlign.type"></el-input>-->
<!--                        </el-form-item>-->
                    </el-form>
                </div>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="editorDialogShow = false" size="mini">取 消</el-button>
                    <el-button type="primary" size="mini" @click="addCategory">{{editCommitText}}</el-button>
                </span>
            </el-dialog>
        </div>
    </div>
</template>

<script scoped>

    // import ajax from "axios"
    export default {
        name:"category-box",
        data() {
            return {
                categories: [
                    {
                        "id": 1,
                        "date": "2016-05-02",
                        "num": "10131",
                        "name": "人工智能",
                        "desc":"是研究、开发用于模拟、延伸和扩展人的智能的理论、方法、技术及应用系统的一门学科",
                        "update":"2017-12-13",
                        "status": 1
                    },
                    {
                        "id": 2,
                        "date": "2016-11-02",
                        "num": "10132",
                        "name": "后端开发",
                        "desc":"‘服务器端’开发",
                        "update":"2017-11-15",
                        "status": 1
                    },
                    {
                        "id": 3,
                        "date": "2016-12-02",
                        "num": "10133",
                        "name": "云计算",
                        "desc":"短时间内完成对数以万计数据的处理、从而达到强大的网络服务",
                        "update":"2017-09-23",
                        "status": 1
                    },
                    {
                        "id": 4,
                        "date": "2019-05-02",
                        "num": "10134",
                        "name": "运维",
                        "desc":"对网络、服务器、服务的生命周期各个阶段的运营和维护",
                        "update":"2020-01-13",
                        "status": 1
                    }
                ],
                search: '',
                deleteTargetId:'',
                editTitleShow: true,
                editTitle:"编辑分类",
                editorDialogShow:false,
                editCommitText:"添加",
                categoryDialog: {
                    name: '',
                    region: '',
                    type: '',
                    textarea: ''
                },

            }
        },
        created() {
            // $.ajax({
            //     type:"GET",
            //     url:"http://localhost:20000/categories",
            //     dataType:"json",
            //     success:function (data) {
            //         console.log(data,"请求成功")
            //     },
            //     error:function (err) {
            //         console.log(err,"请求失败")
            //     }
            // })
            // fetch('http://localhost:20000/categories')
            //     .then(res =>{
            //         return res.json()
            //     })
            //     .catch(err => {
            //         console.log(err)
            //     })
            //     .then(data => {
            //         this.categories = data
            //         console.log(data,"我成功了吗")
            // })
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                // this.deleteTargetId = item.ID
                // console.log(index, row);
                this.$confirm('此操作将永久删除该分类, 是否继续?', '提示', {
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
            // 点击添加分类显示dialog
            showAddCategory(){
                this.editTitle = "添加分类"
                this.editCommitText = "添 加"
                this.editorDialogShow = true
            },
            addCategory(){
                // 提交数据、提示结果、刷新列表
                if (this.categories.name === "") {
                    this.showWarning('分类名称不可以为空')
                    return;
                }
                if (this.categories.desc === "") {
                    this.showWarning('分类描述不可以为空')
                    return;
                }
                this.editorDialogShow = false
            },
            showWarning(msg){
                this.$message({
                    message:msg,
                    type:"warning",
                    center:true
                })
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>
    .add{
        margin-top: 20px;
        margin-left: 20px;
    }
</style>
