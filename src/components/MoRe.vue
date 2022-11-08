
<!-- 상세 정보 -->

<template>
    <div>
        <p>이메일 : {{email }}</p>
        <p>주소 : {{adress }}</p>
        <hr/>
        <button @click="change"> 수정 </button>
    </div>
</template>

<script>
export default {
    name:'MoRe',
    props:{
        param:{
            type:Text
        }
    },
    data() {
        return{
            email: '',
            adress: ''
        }
    },
    created() {
        console.log('created')
        this.fn_init()
    },
    methods: {
        fn_init() {
            if(this.$route.params.id !== '' && this.$route.params.id !== undefined){
                this.email = this.$route.params.email
                this.adress = this.$route.params.adress
            }
        },
        change() {
            let param = {'email': this.email,'adress': this.adress}
            this.$emit('event', param)
            // this.$router.push({
            //     name:'InFo',
            //     params: {
            //         // id: this.id, 
            //         // name: this.name,
            //         // age: this.age,
            //         // phone: this.phone,
            //         email: this.email,
            //         adress: this.adress,
            //         }
            // })
            // .catch(()=>{})
        }
    }
}
</script>

<style>
</style>