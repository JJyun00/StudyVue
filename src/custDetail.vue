<template>
    <div>
      <!-- <HeaderPage v-show="false" :param="params"></HeaderPage> -->
      <!-- 고객정보 -->
      <div v-if="!isModeEdit">
        <p>Cust Page</p>
        <p>고객 ID: {{params.custId}}</p>
        <p>고객 명: {{params.custNm}}</p>
        <p>휴대번호: {{params.phoneNum}}</p>
        <p>E-mail: {{params.email}}</p>
        <p>주소: {{params.addr}}</p>
        <button @click="fn_editInfo">수정하기</button>
      </div>

      <!-- 고객정보 수정-->
      <div v-else>
        <p>Cust Page</p>
        <p>고객 ID: {{params.custId}}</p>
        <p>고객 명: {{params.custNm}}</p>
        <div>
          <p>
            휴대번호: <input type="text" v-model="editPhoneNum"/>
          </p>
        </div>
        <div>
          <p>
            E-mail: <input v-model="editEmail"/>
          </p>
        </div>
        <div>
          <p>
            주소: <input v-model="editAddr" style="width: 200px;"/>
          </p>
        </div>
        <button @click="fn_saveInfo">저장하기</button>
      </div>
      
    </div>
</template>

<script>
    // import HeaderPage from './headerPage.vue'
    export default {
        props: {
            param: {
                type: Object
            }
        },
        components: {
          // HeaderPage
        },
        data() {
            return {
                params: {},
                isModeEdit: false,
                editPhoneNum: '',
                editEmail: '',
                editAddr: ''
            }
        },
        created() {
          this.fn_init()
        },
        methods: {
          fn_init() {
            this.params = this.param
            this.editPhoneNum = this.params.phoneNum
            this.editEmail = this.params.email
            this.editAddr = this.params.addr
          },
          fn_editInfo() {
            this.isModeEdit = true
          },
          fn_saveInfo() {
            this.params.phoneNum = this.editPhoneNum
            this.params.email = this.editEmail
            this.params.addr = this.editAddr

            let param = { custId: this.param.custId,
                          custNm: this.param.custNm,
                          phoneNum: this.editPhoneNum,
                          email: this.editEmail,
                          addr: this.editAddr
                        }
            this.isModeEdit = false

            this.$emit('saveInfo', param)
          }
        }
    }
</script>

<style>
</style>