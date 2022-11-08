<template>
    <div>
        <!-- <headerPage v-show="false" :param="params"></headerPage> -->
        <h1>about Page</h1>
        <div>
          <span @click="fn_chagneTab('1')">Tab1</span> | 
          <span @click="fn_chagneTab('2')">Tab2</span>
        </div>
        <custPage :param="params" v-show="isShowTab"></custPage>
        <custDetail :param="params" v-show="!isShowTab" @saveInfo="fn_updateInfo"></custDetail>
    </div>
</template>

<script>
    import custPage from './custPage.vue'
    import custDetail from './custDetail.vue'
    // import headerPage from './headerPage.vue'

    export default {
        components: {
            custPage,
            custDetail,
            // headerPage
        },
        data() {
            return {
                isShowTab: true,
                params: {}
            }
        },
        created() {
            this.fn_init()
        },
        methods: {
            fn_init() {
              if(this.$route.params.id === '' || this.$route.params.id === undefined) {
                alert('로그인을 해주세요.')
                this.$router.push({name: 'home'})
              }
              this.params.custId   = this.$route.params.id
              this.params.custNm   = this.$route.params.name
              this.params.phoneNum = this.$route.params.phoneNum
              this.params.email = this.$route.params.email
              this.params.addr  = this.$route.params.address
            },
            fn_chagneTab(tabIdx) {
              if(tabIdx === '1') {
                this.isShowTab = true
              } else {
                this.isShowTab = false
              }
            },
            fn_updateInfo(pData) {
              console.log(pData)
              this.params = pData
            }
        }
    }
</script>

<style>
</style>