<template>
  <div class="hello">
    <h1>Vue Study</h1>

    <div><input type="text" v-model="textModel" name="text1" id="text1" placeholder="입력해주세요"></div>
    {{showText}}
    <br><br>
    <span>리스트 체크: {{inputTag2}}</span><br>
    <div>
      <input type="text" v-model="pushValue" name="text1" id="text1">
      <button @click="fn_push(pushValue)">PUSH!</button>
    </div>
    
    <div v-for="item in data1" :key="item.key">
      <p>key: {{item.key}} value: {{item.value}}</p>
    </div>

    <div><button @click="fn_test">POP!</button></div><br>
    
    
    
    <input type="date" v-model="startDate" name="date1" id="date1">
    ~ <input type="date" v-model="endDate" name="date2" id="date2">
    <button @click="fn_post">통신!</button><br><br>
    <div>
      <input type="text" v-model="inputTag" name="text2" id="text2" />
      <input type="date" v-model="inputDate" name="date3" id="date3">
    </div>
    <div>
      <button @click="fn_filter(inputTag)">필터!</button>
      <button @click="fn_filter(inputDate)">달력검색!</button>
    </div>

    <br/>
    <br/>
    <span><p>{{stateMsg}}</p></span>
    <div v-for="item in clonData" :key="item.createDt">
      <div>
        <hr/>
        <p>날짜: {{item.createDt}}</p>
        <p>확진자수: {{item.decideCnt}}</p>
        <p>사망수: {{item.deathCnt}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  watch: {
    textModel(txt) {
      this.showText = txt
    },
    inputTag(txt) {
      this.test = txt
    },
    orgData(data) {
      this.clonData = data
      this.fn_resetData()
      console.log(this.clonData)
    }
  },
  computed: {
    inputTag2() {
      return this.data1.length>0 ? 'O' :'X'
    },
    stateMsg() {
      return this.clonData.length < 1 ? '데이터가 존재하지 않습니다.' : ''
    }
  },
  // 데이터 셋팅
  data() {
    return {
      textModel: '',
      showText: '',
      pushValue: '',
      inputTag: '',
      inputDate: '2022-10-21',
      startDate: '',
      endDate: '',
      data1: [
          {key:1, value:'a'},
          {key:2, value:'b'},
          {key:3, value:'c'},
          {key:4, value:'d'},
      ],
      orgData: [],
      clonData: [],
      isData: false,
      testBoolean: true
    }
  },
  created() {
    this.fn_init()
  },
  methods: {
    fn_init() {
      let today = new Date()
      let month = today.getMonth()+1 < 10 ? '0'+today.getMonth()+1 : today.getMonth()+1
      this.endDate   = today.getFullYear() + '-' + month + '-' + today.getDate()
      this.startDate = today.getFullYear() + '-' + month + '-' + (today.getDate() - 1)
    },
    fn_test() {
      this.data1.pop()
    },
    fn_post() {
      const lv_Vm = this
      if(this.startDate === this.endDate) {
        alert('하루 이상 조회하세요')
        return
      }
      console.log('startDate', this.startDate.split('-').join(''))
      console.log('endDate', this.endDate.split('-').join(''))
      let url = "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=D%2FO%2Bxhp4RTql%2Fgcl1JK12cV%2BaW0CyCHsEAmjP%2F%2BrzTOVlp9OW1v55KtZYWihwA%2BkvoNw5Yl4Az46V8cu7t99fg%3D%3D"
      let params = {
        pageNo: 1,
        numOfRows: 10,
        startCreateDt: this.startDate,
        endCreateDt: this.endDate
      }
      let urlParam = '&pageNo='+params.pageNo+'&numOfRows='+params.numOfRows+'&startCreateDt='+params.startCreateDt+'&endCreateDt='+params.endCreateDt

      axios.get(url+urlParam).then((result)=> {
        console.log('result', result)
        lv_Vm.orgData = result.data.response.body.items.item
        if(lv_Vm.orgData > 0) {
          lv_Vm.isData = true
        } else {
          lv_Vm.orgData = [lv_Vm.orgData]
          lv_Vm.isData = false
        }
        console.log('orgData', lv_Vm.orgData)
      })
    },
    fn_resetData(){
      let item = {}
      let Data = this.clonData
      if(this.orgData[0].length > 0) Data = this.orgData[0]
      
      for(let i=0; i<Data.length; i++) {
        item = Data[i]

        item.createDt = Data[i].createDt.substr(0,10)
        item.decideCnt = Data[i].decideCnt.toLocaleString('ko-KR')
        item.deathCnt = Data[i].deathCnt.toLocaleString('ko-KR')
      }
      this.orgData = Data
      this.clonData = Data
    },
    fn_filter(keyword) {

      this.clonData = this.orgData.filter((item)=>
        item.createDt.indexOf(keyword) > -1
      )

      if(this.clonData.length < 1) {
        alert('데이터가 존재하지 않습니다.')
      }
    },
    fn_push(value) {
      if(value === '') {
        alert('입력값이 없습니다.')
        return
      }
      let idx = this.data1.length + 1
      this.data1.push({key: idx, value: value})
      this.pushValue = ''
    },
    fn_submit() {
      let msg = '데이터 보냅니다.'
      this.$emit('msgSubmit',msg);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
