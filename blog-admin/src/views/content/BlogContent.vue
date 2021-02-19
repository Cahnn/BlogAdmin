<template>
    <div class="blog_content">
        <div class="info" v-for="(item,index) in arti" :key="index">
            <div class="">{{item}}</div>
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
            }
        },
        methods:{
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
                })
            }
        },
        mounted() {
            this.findOne()
        }
    }
</script>

<style scoped>

</style>
