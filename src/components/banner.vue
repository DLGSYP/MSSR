<template>
    <div class="banner_page">
        <div class="banner" v-for="item of banners" :key="item.imageUrl">
            <img :src="item.imageUrl" :alt="item.titleColor">11111111
        </div>
    </div>
</template>

<script>
export default {
    name:'banner',
    data(){
        return {
        banners :[],

        }
    },
    computed:{
       // exist : this.banners.length,
    },
    methods:{
        async getbanners (){
            try{
            let res = await this.$api.getbanner()
            this.banners = res.banners
            this.bannerbg = res.banners[0].imageUrl
            console.log(res)
            }catch(e){
                console.log(e)
            }           
        }
    },
    mounted(){
        this.getbanners()
    }
}
</script>

<style lang="scss" scoped>
.banner_page{
    width: 300px;
    height: 200px;
    .banner{
        width: 100px;
        height: 50px;
    }
}
</style>>
