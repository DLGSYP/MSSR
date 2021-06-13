<template>
  <div class="login">
      <div class="qr" v-if="!switch_show">
          <qr/>
      </div>
      <div class="email_cover" v-if="switch_show">
          <el-form label-width="100px" ref="ruleForm" :model="ruleForm" >
          <el-form-item label="电话号码">
              <el-input placeholder="请输入手机号码" v-model="ruleForm.phone"></el-input>
          </el-form-item>
           <el-form-item label="密码">
              <el-input  placeholder="password" v-model="ruleForm.password" show-password></el-input>
          </el-form-item>
          <el-form-item  >
               <el-button @click="login('ruleForm')" @keyup.enter.native="login('ruleForm')">登录</el-button>
          </el-form-item>
      </el-form>
      </div>
      <el-button @click="showchange()">切换登录方式</el-button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import Qr from "./qr.vue"
export default {
    name:"login",
    data(){
        return {
            ruleForm : {
                phone:"",
                password : "",
                },
             switch_show : true 
        }
    },
    computed:{
      
    },
    components:{
        Qr
    },
    methods:{
        showchange(){
             this.switch_show=!this.switch_show
             console.log(this.switch_show)
        },
        login(formname){
            //ele自带的校验
            this.$refs[formname].validate(valid=>{
                if(valid){
                    let data = this.ruleForm
                    this.loginpost(data.phone,data.password)
                }
            })
        },
        loginpost(phone,password){
            this.$api.loginPost(phone,password).then(res=>{
                console.log(res)
                this.getuserdetail(res.profile.userId)
                window.localStorage.setItem("cookie",res.cookie)
                window.localStorage.setItem("token",res.token)
            })
        },
        async getuserdetail(uid){
            let res =  await this.$api.getUserDetail(uid)
            console.log(res)
            let userfile = {}
            //创建日期
            userfile.createTime = res.createTime
            userfile.createDay  = res.createDay
            //名字、性别、图像、城市
            userfile.nickname   = res.profile.nickname
            userfile.avatarurl  = res.profile.avatarUrl
            userfile.city       = res.profile.city
            userfile.gender     = res.profile.gender
            //粉丝数、关注数
            userfile.followeds  = res.profile.followeds
            userfile.follows    = res,profile.follows
            //将数据保存到vuex中
            this.set_userfile(userfile)
            //将数据保存到localstorage中
            window.localStorage.setItem('userfile',JSON.stringify(userfile))
        },
        ...mapMutations({
            set_userfile : 'SET_USER_FILE'
        })
    },
    mounted(){

    }
}
</script>

<style lang="scss" scoped>
   .login{
        width: 300px;
        height: 300px;
        box-shadow: 2px;
        border: 2px solid red;
        .email_cover{

        }
        .qr{

        }
    }
</style>>
   

