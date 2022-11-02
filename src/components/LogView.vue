<template>
    <div>
        <div>
            <p>ID : {{id}}</p>
            <p>이름 : {{name}}</p>
            <p>나이 : {{age}}</p>
            <p>전화번호 : {{phone}}</p>
            <hr/>
            <div><button @click="more"> 더보기 </button></div>
        </div>
    </div>
</template>

<script>

export default {
    path: "/LogView",
    name:'LogView',
    computed:{
        id(){ return this.$route.params.id },
        name(){ return this.$route.params.name },
        age(){ return this.$route.params.age },
        phone(){ return this.$route.params.phone },
        email(){ return this.$route.params.email },
        adress(){ return this.$route.params.adress }
    },
    methods: {
        more() {
            this.$router.push({
                name:'InFo',
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
