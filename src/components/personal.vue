<template>
      <div class="personal">
          <div class="avaimg">
              <img :src="avatarurl" alt="" class="avaimg">
          </div>
           <div class="nickname">名称{{nickname}}</div>
           <div class="city">城市{{city}}</div>
           <div class="gender">{{gender}}</div>
           <div class="level">等级{{level}}</div>
           <div>已听歌曲{{listenSongs}}</div>
      </div>
</template>

<script>

import {mapGetters} from 'vuex'
import axios from 'axios'
export default {
    data(){
        return {
            nickname   : " ",
            avatarurl :  " ",
            city : " ",
            gender : '',
            level :0,
            listenSongs : 0
        }
    },
    methods:{
        //params是添加到url的请求字符串中的，用于get请求。 
        //而data是添加到请求体（body）中的， 用于post请求。
        //高德地图api 接口看得我眼花 好多
         getlocaltion(){
            axios({
                method:'get',
                url : 'https://restapi.amap.com/v3/config/district',
                params :{
                    key : '90e72716b8b6e0138f1d9a11c35453f5',
                    keywords : this.getUserflie.city,
                    subdistrict : 0
                }
            }).then(res=>{
                console.log("district",res.data)
                this.city = res.data.districts[0].name
            })
        },

        get_file(){
            this.nickname = this.getUserflie.nickname
            this.avatarurl= this.getUserflie.avatarurl
            this.level    = this.getUserflie.level
            this.listenSongs=this.getUserflie.listenSongs 
            if(this.getUserflie.gender === 1){
                this.gender = "boy"
            }else{
                this.gender = "girl"
            }

        },

        check(){
            console.log("111222",this.getUserflie)
            console.log("??????",this.gettry)
            
            //let res = JSON.parse(window.localStorage.getItem('userfile'))
            //console.log(res)
        }
    },
    computed:{
         //'SET_USER_FILE'(state,product){}
         // [types.SET_USER_FILE](state,userfile){
        ...mapGetters([
            'getUserflie',
            'gettry'
            ])
    },
    mounted(){
        this.get_file(),
        this.getlocaltion()
    }
}
</script>

<style lang="scss" scoped>
    .personal{
        .avaimg{
            width : 50px;
            height : 50px;
        }
    }
</style>>
