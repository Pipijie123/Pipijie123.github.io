<template>
    <div>
        <TypeNav/>
        <list-container/>
        <today-recommend/>
        <rank/>
        <like/>
        <floor v-for="floor in floorList" :key="floor.id" :floor="floor"/>
        <brand/>
    </div>
</template>

<script>
import ListContainer from './ListContainer/index.vue'
import TodayRecommend from './TodayRecommend/index.vue'
import Rank from './Rank/index.vue'
import Like from './Like/index.vue'
import Floor from './Floor/index.vue'
import Brand from './Brand/index.vue'
import { mapState } from 'vuex'
export default {
    name:"Home",
    components:{
        ListContainer,
        TodayRecommend,
        Rank,
        Like,
        Floor,
        Brand
    },
    mounted(){
        this.$store.dispatch("getFloorList")
        this.$store.dispatch("userInfo")
    },
    computed:{
        ...mapState({
            floorList:state=>state.home.floorList
        })
    }
}
</script>

<style>

</style>