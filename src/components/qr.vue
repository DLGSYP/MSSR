<template>
  <div>
    <vue-qr :text="appSrc" :margin="0" :size="191" :logo-src="logoSrc" />
  </div>
</template>

<script>
import VueQr from "vue-qr";
export default {
  name: "vueqr",
  data() {
    return {
      logoSrc: "",
      appSrc: "",
      status : '',
    };
  },
  components: {
    VueQr,
  },
  methods: {
    async get_login_key() {
        
        let res = await this.$api.getQrCode();
        let code = res.data.unikey;
        console.log("qrcode", code);
        return code;
    
      
    },

    async get_login_pic() {
      try {
        let res1 = await this.$api.getQrCode();
        let res = await this.$api.getQrPic(res1);
        let data = res.data.qrurl;
        this.appSrc = data;
        console.log(data);
        return data;
      } catch (e) {
        console.log(e);
      }
    },

    //无语了，就是获取不到状态
    async get_qr_status() {
      let res = await this.$api.getQrCode();
      let data = res.data.unikey
      console.log(res.data.unikey)
      if (res) {
          setInterval(() => {
            console.log(data)
          let sta = this.$api.getQrSta(data);
          console.log(sta);
          let status = sta.message;
          //console.log(status);
        }, 10000);
        // if(sta){

        // }
      }
    },
  },
  mounted() {
    this.get_login_pic();
    //this.get_qr_status();
  },
};
</script>

<style>
</style>