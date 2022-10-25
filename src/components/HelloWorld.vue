<template>
  <div>
    <!-- <input @input="startnum = $event.target.value" placeholder="StartNum"><br>
    <input @input="endnum = $event.target.value" placeholder="EndNum"><br> -->

    <!-- 달력날짜선택 -->
    <div>
    <div>
        Start Date   <input type="date" @input="startnum = $event.target.value"/><br/>
        End Date   <input type="date" @input="endnum = $event.target.value"/>
    </div>
    </div>
    <!------------------>

    <br/><button type="button" @click="searchall">보기</button>
    <div v-if='view === true'>
      <h2>전체 결과 수 : {{ totalCount }}</h2>
      <p>--------------------------------------------------------------------</p>

      <div v-for="item in array" :key="item.SEQ">
        <!-- <p>test{{array}}</p> -->
        <p>기준일 : {{ item.stateDt }}</p>
        <p>확진자 수 : {{ item.decideCnt }}</p>
        <p>사망자 수 : {{ item.deathCnt }}</p>
        <p>=======================================</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
name: 'HelloWorld',

data() {
  return {
    view: true,
    totalCount: '',
    array:'',
    // state_dt:'',
    // decide_cnt:'',
    // death_cnt:''
  }
},

methods: {
  searchall() {
    let url = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?'
    let key = 'serviceKey=D%2FO%2Bxhp4RTql%2Fgcl1JK12cV%2BaW0CyCHsEAmjP%2F%2BrzTOVlp9OW1v55KtZYWihwA%2BkvoNw5Yl4Az46V8cu7t99fg%3D%3D'
    let param = '&pageNo=1&numOfRows=10'
    let start = '&startCreateDt='+ this.startnum
    let end = '&endCreateDt=' + this.endnum

    const lv_Vm = this
    axios.get(url + key + param + start + end)
    .then((result) => {
      console.log(result.data)

      if(result.data.response.body.items.length < 1) {
        lv_Vm.fn_isEmpty()
      }
      lv_Vm.totalCount = result.data.response.body.totalCount
      lv_Vm.array= result.data.response.body.items.item
      // lv_Vm.state_dt = result.data.response.body.items.item.stateDt
      // lv_Vm.decide_cnt = result.data.response.body.items.item.decideCnt
      // lv_Vm.death_cnt = result.data.response.body.items.item.deathCnt
      lv_Vm.view = true
      console.log(result)
    })
    .catch((error) => {
      console.log(error)
    })
  },

  fn_isEmpty() {
    console.log('isEmpty!!')
  }
}
}
</script>
