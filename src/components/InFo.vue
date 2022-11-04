
<!-- 정보 수정 -->

<template>
    <div>
        <div>
            <p>ID : {{id}} </p>
            <p> 이름 : <input type="text" @input="name=$event.target.value"> </p>
            <p> 나이 : <input type="text" @input="age=$event.target.value"> </p>
            <p> 전화번호 : <input type="text" @input="phone=$event.target.value"> </p>
            <p> 이메일 : <input type="text" @input="email=$event.target.value"> </p>
            <p> 주소 : <input type="text" @input="adress=$event.target.value"> </p>
        </div>
        <hr/>
        <div><button @click="change"> 확인 </button></div>
    </div>
</template>

<script>
    export default {
        name:'InFo',
        computed:{
            id(){ return this.$route.params.id },
        },
        methods: {
            change() {
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
        },
        created() {
            alert("정보를 수정하시겠습니까?")
        },
        beforeDestroy() {
            alert("정보가 수정되었습니다.")
        }
    }
    
</script>

<style>
</style>
