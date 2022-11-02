<template>
    <div>
        <div>
            <!-- <h1>{{ $route.params.name}}</h1> -->
            <p>ID : {{$route.params.id}}</p>
            <p>이름 : {{$route.params.name}}</p>
            <p>나이 : {{$route.params.age}}</p>
            <p>전화번호 : {{$route.params.phone}}</p>
            <p v-if="more">이메일 : {{ $route.params.email }}</p>
            <p v-if="more">주소 : {{ $route.params.adress }}</p>
        </div>
        <!-- <div><button v-if="!more" @click="moreinfo">더보기</button></div>
        <div><button v-if="simple" @click="info">간략히</button></div> -->
        <div><button @click="moreinfo">더보기</button></div>
    </div>
</template>

<script>

export default {
    name:'LogView',

    data() {
        return{
            more: false,
            simple: false
        }
    },
    methods: {
        moreinfo(){
            // this.more = true
            // this.simple = true
            this.$router.push('/InFo').catch(()=>{})
        },
        info() {
            this.simple = false
            this.more = false
        }
    }
}
    
</script>

<style>
</style>