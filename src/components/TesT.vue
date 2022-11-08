
<!-- 정보 출력 -->

<template>
    <div>
        <div>
            <button @click="fn_simple"> 간략히 </button>
            <button @click="fn_more"> 더보기 </button>
        </div>
        <SimPle :test1="pData1" :test2="pData2"></SimPle>
        <MoRe v-show="moreInfo" @event="test"></MoRe>
    </div>
</template>

<script>
import SimPle from './SimPle.vue'
import MoRe from './MoRe.vue'

export default {

    name:'TesT',
    data(){
        return{
            orgData: {},
            pData1: '홍길동',
            pData2: 24,
            moreInfo: false
        }
    },
    created() {
        console.log('created')
        this.orgData = this.$router.params
    },
    components:{
        SimPle,
        MoRe
    },
    methods: {
        fn_more() {
            this.moreInfo = true
        },
        fn_simple() {
            this.pData1 = this.orgData.name
            this.pData2 = Number(this.orgData.age)
            console.log('simple fnc')
        },
        test(pData) {
            this.fn_resetData(pData)
        }


        // change() {
        //     this.$router.push({
        //         name:'InFo',
        //         params: {
        //             id: this.id, 
        //             name: this.name,
        //             age: this.age,
        //             phone: this.phone,
        //             email: this.email,
        //             adress: this.adress,
        //             }
        // type = String, Number, Object, List ...
        // String 'hello'
        // Number 0 1 2 3 4
        // Object {0,1,2,3,4} / {'a':1, 'b':2, 'c':3} 
        // List []
        //     })
        //     .catch(()=>{})
        // }
    }
}
</script>

<style>
</style>