<template>
  <div>
      <vue-qr :text="appSrc"
        :margin="0"
        :size = "191"
        :logo-src = "logoSrc"      
      />
  </div>
</template>

<script>
import VueQr from 'vue-qr'
export default {
    name : "vueqr",
    data(){
        return{
            logoSrc:"",
            appSrc :""
        }
    },
    components:{
        VueQr
    },
    methods:{
        async get_login_key(){
            try{
                let res = await this.$api.getQrCode();
                let code = res.data.unikey
                console.log(code)
                return code
            }catch(e){
                console.log(e)
            }
            
        },

        async get_login_pic(){
            let pic_code = this.get_login_key()
            console.log(pic_code)
            try{
                let res = await this.$api.getQrPic(pic_code);               
                let data = res.data.qrurl
                this.appSrc = data
                console.log(data)
                return data
            }catch(e){
                console.log(e)
            }
        },

         async get_qr_status(){
             let pic_code = this.get_login_key()
             try{
                 let sta = await this.$api.getQrSta(pic_code);
                 console.log(sta)
                 let status = sta.message
                 console.log(status)
                 return data
             }catch(e){
                 console.log(e)
             }
         }

    },
     mounted(){
        this.get_login_pic()
        this.get_qr_status()
    }
}
</script>

<style>

</style>