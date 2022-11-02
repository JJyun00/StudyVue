<template>
    <div>
        <div>
            <button @click="user">ID 정보 확인</button>
        </div>
    </div>
</template>

<script>

    export default {
        name:'DashBoard',
        data() {
            return{
            }
        },
        methods: {
            user() {
                this.$router.push('/UserLog').catch(()=>{})
            },
        }
    }
</script>

<style>
</style>