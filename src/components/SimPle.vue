
<!-- 간략 정보 -->

<template>
    <div>
        <p>ID : {{id}}</p>
        <p>이름 : {{name}}</p>
        <p>나이 : {{age}}</p>
        <p>전화번호 : {{phone}}</p>
        <button @click="fn_test">test</button>
    </div>
</template>
ㅇㅅㅇ?
<script>
export default {
    name:'SimPle',
    computed:{
        id(){ return this.$route.params.id },
        name(){ return this.$route.params.name },
        age(){ return this.$route.params.age },
        phone(){ return this.$route.params.phone }
    },
    props:{
        param:{
            type: Object
        },
        // test1: 이름
        test1: {
            type: String
        },
        // test2: 나이
        test2: {
            type: Number
        }
    },
    created() {
        console.log('SIMPLE')
    },
    watch: {
        test1(changeData) {
            console.log(changeData)
        }
    },
    methods: {
        change() {
            this.$router.push({
                name:'InFo',
                params: {
                    id: this.id, 
                    name: this.name,
                    age: this.age,
                    phone: this.phone
                    }
            })
            .catch(()=>{})
        },
        fn_test() {
            console.log('test1', this.test1)
            console.log('test2', this.test2)
        }
    }
}
</script>

<style>
</style>