
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
1. userlog 컴포넌트에서 ID 정보 확인 버튼은 눌러도 액션을 취하는 게 없음 -> 사용자 입장에서 쓸 데 없는 버튼
2. 간략정보, 상세정보를 컴포넌트로 나누지 않은 점 아쉽
3. logview 컴포넌트에서 v-show 사용에 함수를 2개나 사용하여 자원 낭비 발생  -? 
4. userlog 컴포넌트에서 for문이 아닌 filter 사용해보기
5. 라이프사이클 활용이 아쉽 -> 
6. 수정할 때 입력받은 값이 없으면 수정하지 못하게 막아야 함
7. 상세보기 페이지에서 수정가능하게 ->
    
알아야 할 것: 컴포넌트 간 데이터 전달, 부모/자식 간 데이터 전달
꼭** Util.js : 스크립트 짤 때 가져와서 쓰는 함수. <script>안에서 사용.
  => 많이 쌓일 수록 내 자원^ 사용할 때 router.js처럼 불러오고, 컴포넌트에서 사용할 수 있도록 호출?

<공통>
props : 파라미터 받을 그릇 선언
ex) :param="params"		//:'그릇'="'넘길데이터'"

watch에서 걸림. 바뀐 데이터로 실행
watch에 건 이유: 계속 수정할 수 있기 때문

v-model

$emit('실행시킬이벤트', 넘길값)  : $emit()은 내가 원하는 특정 이벤트 실행 시킬 때  

사이클 created 에서 init해서 그 안에서 가공해주는 게 ..
computed는 애초에 값을 바꾸지 못함

 -->
