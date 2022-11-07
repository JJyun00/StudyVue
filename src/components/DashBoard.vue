
<!-- 메인화면 -->

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

<!-- 코드리뷰피드백
    
props : 파라미터 받을 그릇 선언
ex) :param="params"		//:'그릇'="'넘길데이터'"

watch에서 걸림. 바뀐 데이터로 실행
watch에 건 이유: 계속 수정할 수 있기 때문

v-model

$emit('실행시킬이벤트', 넘길값)  : $emit()은 내가 원하는 특정 이벤트 실행 시킬 때  

사이클 create 에서 init해서 그 안에서 가공해주는 게 ..
computed는 애초에 값을 바꾸지 못함

 -->
