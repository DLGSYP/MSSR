<template>
<div class="page">
    <login/>
    <!-- <banner/> -->
</div>
</template>

<script>
import Banner from "../components/banner"
import Vueqr from "../components/qr"
import Login from "../components/login"
export default {
    name:'page',
    data(){
        return{

        }
    },
    components:{
        Banner,
        Vueqr,
        Login
    }
}
</script>

<style>

</style>