<template>
    <div>
        <p>Cust Page</p>
        <p>고객 ID: {{params.custId}}</p>
        <p>고객 명: {{params.custNm}}</p>
        <p>휴대번호: {{params.phoneNum}}</p>
        <div v-show="false">{{test}}</div>
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
                test: '',
                params: {}
            }
        },
        watch: {
          param(pData) {
            this.fn_setData(pData)
          }
        },
        created() {
            this.params = this.param
        },
        methods: {
            fn_setData(pData) {
                console.log('header', pData.phoneNum)
                this.params.phoneNum = pData.phoneNum
                this.test = pData.phoneNum
            }
        }
    }
</script>

<style>
</style>