<template>
    <div>
        <div>
            <input type="text" @input="id=$event.target.value" placeholder="ID"/>
            <input type="text" @input="pw=$event.target.value" placeholder="Password"/>
        </div>
        <div><button @click="login">Login</button></div>
        <br/>
        <div style="color:red"> {{ fail }} </div>
    </div>
</template>

<script>

    export default {
        name:'UserLog',
        data() {
            return{
                list:[
                    {id:'1', pw:'1111', name:'일일', age:'11', phone:'01011111111', email:'1111@gmail.com', adress:'서울특별시 11구 11동 11'},
                    {id:'2', pw:'2222', name:'이이', age:'22', phone:'01022222222', email:'2222@gmail.com', adress:'서울특별시 22구 22동 22'},
                    {id:'3', pw:'3333', name:'삼삼', age:'33', phone:'01033333333', email:'3333@gmail.com', adress:'서울특별시 33구 33동 33'},
                    {id:'4', pw:'4444', name:'사사', age:'44', phone:'01044444444', email:'4444@gmail.com', adress:'서울특별시 44구 44동 44'}
                ],
                fail:'',
                id:'', pw:''
            }
        },
        methods: {
            login() {
                for(let i=0; i<this.list.length; i++){
                    if(this.id === this.list[i].id){    //id확인
                        if(this.pw === this.list[i].pw){   //pw확인
                            this.$router.push({
                                name:'LogView',
                                params: {
                                    id:this.list[i].id, 
                                    name:this.list[i].name, 
                                    age:this.list[i].age, 
                                    phone:this.list[i].phone,
                                    email:this.list[i].email,
                                    adress:this.list[i].adress
                                    }
                                })
                                .catch(()=>{})
                            // this.$router.push('/LogView').catch(()=>{})
                        }
                    }
                    else {
                        this.fail = 'ID 또는 Password를 다시 확인하세요.'
                    }
                }
            }
        }
    }
</script>

<style>
</style>