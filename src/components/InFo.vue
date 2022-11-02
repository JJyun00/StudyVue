<template>
    <div>
        <div>
            <p>ID : {{$route.params.id}}</p>
            <p>이름 : {{$route.params.name}}</p>
            <p>나이 : {{$route.params.age}}</p>
            <p>전화번호 : {{$route.params.phone}}</p>
            <p>이메일 : {{ $route.params.email }}</p>
            <p>주소 : {{ $route.params.adress }}</p>
        </div>
        <div><button @click="simple"> 간략히 </button></div>
    </div>
</template>

<script>
    export default {
        name:'InFo',
        data() {
            return{
            }
        },
        props: {
            name:{type:String, default:''},
            age :{type:Number, default:0}
        },
        methods: {
            simple() {
                // this.$router.push({name:'LogView'}).catch(()=>{})
                
            }
        }
    }
    
</script>

<style>
</style>