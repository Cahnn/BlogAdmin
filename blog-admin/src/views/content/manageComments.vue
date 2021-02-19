<template>
<!--    适用于PC端-->
<!--    功能：1、自动轮播；2、点击dot按钮跳转到相应图片并改变颜色；3、点击图片跳转到链接内容；4、鼠标移入停止轮播，移除恢复轮播-->
<!--    缺点：1、不同滑动切换图片；2、没有转到上下页的按钮-->
    <div class="slide" v-on:mouseover="stop()" v-on:mouseout="move()">
        <div class="slideShow">
            <ul>
<!--                过渡效果-->
                <transition-group tag="ul" name="image">
                    <li v-for="(item,index) in imgs" :key="index" v-show="index===mark">
                        <a :href=item.url>
                            <img :src="item.img"  style="width: 500px" height="200px">
                        </a>
                    </li>
                </transition-group>
            </ul>
        </div>
        <div class="bar">
            <span v-for="(item,index) in imgs" :key="index" :class="{'active':index===mark}" @click="change(index)"></span>
        </div>
    </div>
</template>

<script>
    export default {
        name:"slide",
        data(){
            return{
                timer:null,  // 定时器
                mark:0,   // 创建一个变量与当前遍历的index值比对，若相同则显示，否则隐藏；
                imgs:[
                    {
                        img:"https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2077625409,245021064&fm=26&gp=0.jpg",
                        url:'http://www.baidu.com'
                    },
                    {
                        img:"https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3404221704,526751635&fm=26&gp=0.jpg",
                        url:'http://www.sina.com'
                    },
                    {
                        img:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3611260341,4109486815&fm=26&gp=0.jpg",
                        url:'https://www.baidu.com'
                    },
                    {
                        img:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1004682078,2886860504&fm=26&gp=0.jpg",
                        url:'https://www.baidu.com'
                    },
                ]
            }
        },
        methods:{
            autoPlay(){
                this.mark++;
                if (this.mark === this.imgs.length){   // //当遍历到最后一张图片置零
                    this.mark = 0
                }
            },
            // 创建定时器，每个2.5s给变量mark+1
            play(){
                this.timer = setInterval(this.autoPlay,2500)
            },
            //给dot增加切换图片的点击事件。
            change(i){
                this.mark = i
            },
            //移入/移出实现关闭/打开定时器效果
            stop(){
                clearInterval(this.timer)
            },
            move(){
                this.timer = setInterval(this.autoPlay,2500)
            }
        },
        // 实例创建之后挂载
        created() {
            this.play()
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .slide{
        width: 500px;
        height: 200px;
        margin: 50px auto 0 auto;
        overflow: hidden;
        position: relative;
    }
    .slideShow{
        width: 500px;
        height: 200px;
    }
    li{
        position: absolute;
    }
    .bar{
        position: absolute;
        width: 100%;
        bottom: 10px;
        margin: 0 auto;
        z-index: 999;
        text-align: center;
    }
    .bar span{
        width: 7px;
        height: 7px;
        background-color: grey;
        display: inline-block;
        border-radius: 50%;
        margin-right: 5px;
    }
    .active{
        background-color: white !important;
    }
    .image-enter-active{
        transform: translateX(0);
        transition: all 1.5s ease;
    }
    .image-leave-active{
        transform: translateX(-100%);
        transition: all 1.5s ease;
    }
    .image-enter{
        transform: translateX(100%);
    }
    .image-leave{
        transform: translateX(0);
    }
</style>
