<template>
    <div>
        <h1>Menu Page</h1>
        <div>
            id : <input v-model="inputId" placeholder="ID를 입력하세요"/><br/>
            password: <input type="password" v-model="inputPwd" placeholder="패스워드를 입력하세요"/>
        </div>
        <button @click="fn_Login">로그인</button>
    </div>
</template>

<script>

export default {
    props: {
        param: {
            type: Object
        }
    },
    data() {
        return {
            inputId: "admin",
            inputPwd: "admin",
            title: "",
            params: {},
            test: "test222"
        };
    },
    created() {
        this.title = this.$route.params.title;
        console.log('home', this.param)
    },
    methods: {
        fn_Login() {
            let validation = this.fn_checkInfo()
            if(!validation) {
                alert('로그인 정보를 다시 확인하세요.')
                return 
            }
            let param = {
                id: this.inputId,
                name: "홍길동",
                phoneNum: "010-1234-5678",
                email: "hong@vue.com",
                address: "서울시 서초동 어느 빌딩 32층"
            };
            this.$router.push({ name: "about", params: param });
        },
        fn_checkInfo() {
            let rtnValue = false

            if (this.inputId === 'admin' && this.inputPwd === 'admin') {
                rtnValue = true
            }

            return rtnValue
        }
    }
}
</script>

<style>
</style>