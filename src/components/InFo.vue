<template>
    <div>
        <div>
            <p>ID : {{id}}</p>
            <p>이름 : {{name}}</p>
            <p>나이 : {{age}}</p>
            <p>전화번호 : {{phone}}</p>
            <p>이메일 : {{email }}</p>
            <p>주소 : {{adress }}</p>
        </div>
        <hr/>
        <div><button @click="simple"> 간략히 </button></div>
    </div>
</template>

<script>
    export default {
        name:'InFo',
        computed:{
            id(){ return this.$route.params.id },
            name(){ return this.$route.params.name },
            age(){ return this.$route.params.age },
            phone(){ return this.$route.params.phone },
            email(){ return this.$route.params.email },
            adress(){ return this.$route.params.adress },
        },
        data() {
            return{
            }
        },
        methods: {
            simple() {
                this.$router.push({
                    name:'LogView',
                    params: {
                    id: this.id, 
                    name: this.name,
                    age: this.age,
                    phone: this.phone,
                    email: this.email,
                    adress: this.adress,
                    }
                })
                .catch(()=>{})
                
            }
        }
    }
    
</script>

<style>
</style>
