<template>
    <div class="manage-article">
        <el-table
                :data="arti"
                border
                style="width: 100%">
            <el-table-column
                    fixed
                    prop="_id"
                    label="ID"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="created"
                    label="日期"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="title"
                    label="标题"
                    width="200">
            </el-table-column>
            <el-table-column
                    prop="major"
                    label="摘要"
                    width="400">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="150">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.$index, scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button type="text" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name:"manage-article",
        data() {
            return {
                arti:[],
                apiModel:'arti'
            }
        },
        methods: {
            handleClick(index, item) {
                // console.log(row);
                this.$router.push({ path: '/BlogContent', query: {_id:item._id} })
            },
            findArti(){
                this.$http.post('/api/'+this.apiModel+'/find', this.arti).then(res => {
                    console.log('res:', res)
                    this.arti = res
                })
            },
            handleDelete(index, item) {
                this.$http.post('/api/'+this.apiModel+'/delete', item).then(res => {
                    console.log('res:', res)
                    this.findArti()
                })
            },
            handleEdit(index, item) {
                this.$router.push({ path: '/postArticle', query: {_id:item._id} })
            },
        },
        mounted() {
            this.findArti()
        }
    }
</script>

<style scoped>

</style>
