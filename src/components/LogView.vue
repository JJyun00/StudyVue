
<!-- 정보 출력 -->

<template>
    <div>
        <div>
            <button @click="simple"> 간략히 </button>
            <button @click="more"> 더보기 </button>
        </div>
        <p>ID : {{id}}</p>
        <p>이름 : {{name}}</p>
        <p>나이 : {{age}}</p>
        <p>전화번호 : {{phone}}</p>
        <p v-show="moreInfo">이메일 : {{email }}</p>
        <p v-show="moreInfo">주소 : {{adress }}</p>
        <hr/>
        <button @click="change"> 수정 </button>
    </div>
</template>

<script>
export default {
    name:'LogView',
    data(){
        return{
            moreInfo:false
        }
    },

    // ------ 라이프사이클 사용하여 (특히 created 와 mounted) 만들어 보기 ----
    // ex. 아이디 저장 버튼 클릭하면 아이디 저장된다던가
    //  computed 안의 내용처럼 쓰면 길고 가독성 떨어짐.
    //  따라서 사이클 안에서 ex) this.id=id 처럼 간결하게
    // cf. 모든 컴포넌트에 라이프사이클 작성하여 사용 가능. 필요한 함수만 써도 됨.
    // beforeRouteEnter() {
    //     console.log('beforeRouteEnter')
    // },
    // beforeCreate(){
    //     console.log('beforeCreate')
    // },
    // created() {
    //     console.log('created')
    // },
    // beforeMount(){
    //     console.log('beforeMount')
    // },
    // mounted() {
    //     console.log('mounted')
    // },
    // beforeRouteLeave() {
    //     console.log('beforeRouteLeave')
    // },
    // ----------------------------

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
            this.moreInfo=true
        },
        simple() {
            this.moreInfo=false
        },
        change() {
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
