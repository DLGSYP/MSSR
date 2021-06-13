<template>
      <div class="personal">
           
      </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){

    },
    methods:{
        check(){
            console.log()
        }
    },
    computed:{
         //'SET_USER_FILE'(state,product){}
         // [types.SET_USER_FILE](state,userfile){
        ...mapGetters(['getUserflie'])
    }
}
</script>

<style lang="scss" scoped>

</style>>
