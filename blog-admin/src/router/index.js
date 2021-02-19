import Vue from 'vue'
import VueRouter from 'vue-router'
import BlogContent from "../views/content/BlogContent";

// 首页
const arti = () => import("../views/home/arti")

// 登录页面
const Login = () => import("../views/login/login")

// 内容部分
const manageArticle = () => import("../views/content/manageArticles")
const manageComment = () => import("../views/content/manageComments")
const manageImage = () => import("../views/content/manageImages")
const postArticle = () => import("../views/content/postArticle")

// 运营
const category = () => import("../views/operation/category")
const loop = () => import("../views/operation/loop")

// 设置
const friendLink = () => import("../views/setting/friend-link")
const websiteInfo = () => import("../views/setting/website-info")

// 用户
const userList = () => import("../views/user/userList")
const resetPassword = () => import("../views/user/resetPasswd")
const eMail = () => import("../views/user/eMail")
const info = () => import("../views/user/info")

// 布局
const rightView = () => import("../components/right-view")
const baseView = () => import("../components/baseView")

Vue.use(VueRouter)

export const routes = [
    {
        path:'',
        component:baseView,
        redirect: '/arti',
        children:[
            {
                path:'/arti',
                hidden: false,
                name:"首页",
                icon:"el-icon-s-home",
                component:arti
            },
            {
                path: '/content',
                hidden:false,    // 控制显示或隐藏（当用户不是管理员时）
                name:"内容",
                meta: { title: '内容', icon: 'example' },
                redirect: 'content',
                icon: 'el-icon-document',
                component:rightView,
                children:[
                    {
                      path: '/postArticle',
                      hidden:false,
                      name:"文章发表",
                      icon:'el-icon-edit-outline',
                      component: postArticle,
                      meta: { title: '文章发表', icon: 'postArticle' }
                    },
                    {
                      path: '/manageArticles',
                      hidden:false,
                        name:"文章管理",
                        icon:'el-icon-document-checked',
                      component: manageArticle
                    },
                    {
                      path: '/manageComments',
                        hidden:false,
                        name:"评论管理",
                        icon:'el-icon-chat-line-square',
                      component: manageComment
                    },
                    {
                      path: '/manageImages',
                        hidden:false,
                        name:"图片管理",
                        icon:'el-icon-picture-outline',
                      component: manageImage
                    }
                ]
            },
            {
                path: '/user',
                hidden:false,
                name:"用户",
                icon:'el-icon-user-solid',
                component:rightView,
                children:[
                  {
                    path: '/userList',
                      hidden:false,
                      name:"用户列表",
                      icon:'el-icon-user',
                    component: userList
                  },
                  {
                    path: '/eMail',
                      hidden:false,
                      name:"邮箱",
                      icon:'el-icon-message',
                    component: eMail
                  },
                  {
                    path: '/info',
                      hidden:false,
                      name:"用户信息",
                      icon:'el-icon-postcard',
                    component: info
                  },
                  {
                    path: '/resetPasswd',
                      hidden:false,
                      name:"密码重置",
                      icon:'el-icon-key',
                    component: resetPassword
                  },
                ]
            },
            {
                path: '/operation',
                hidden:false,
                name:"运营",
                icon:'el-icon-coin',
                component:rightView,
                children:[
                    {
                        path: '/category',
                        hidden:false,
                        name:"分类管理",
                        icon:'el-icon-edit',
                        component: category
                    },
                    {
                        path: '/loop',
                        hidden:false,
                        name:"轮播图管理",
                        icon:'el-icon-video-pause',
                        component: loop
                    }
                ]
            },
            {
                path: '/setting',
                hidden:false,
                name:"设置",
                icon:'el-icon-setting',
                component:rightView,
                children:[
                    {
                      path: '/friend-link',
                        hidden:false,
                        name:"友情链接",
                        icon:'el-icon-link',
                      component: friendLink
                    },
                    {
                      path: '/website-info',
                        hidden:false,
                        name:"网站信息",
                        icon:'el-icon-coordinate',
                      component: websiteInfo
                    }
                ]
            }
        ]
    },
    {
        path: '/login',
        component:Login
    },
    {
        path: '/BlogContent',
        name:"文章详情",
        component:BlogContent
    },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
