<template>
  <div>
    <!-- 달력날짜선택 -->
    <div>
      Start Date   <input type="date" max="2022-10-26" @input="startnum = $event.target.value"/><br/>
      End Date   <input type="date" min="" max="2022-10-26" @input="endnum = $event.target.value"/>
    </div>
    <!------------------>

    <br/><button type="button" @click="searchall">보기</button>
    <div v-if='view === true'>
      <h2>전체 결과 수 : {{ totalCount }}</h2>
      <p>--------------------------------------------------------------------</p>
      <!-- 날짜검색 -->
      <div>
        <input type="date" :min="startnum" :max="endnum" @input="searchdate = $event.target.value"/>
        <button type="button" @click="search">검색</button>
        <p v-show="!showEmpty">{{ empty }}</p>
        
        <div v-show="!showAll">
          <p class="searchC">2 기준일 : {{ state_Dt }}</p>
          <p class="searchC">2 확진자 수 : {{ decide_Cnt }}</p>
          <p class="searchC">2 사망자 수 : {{ death_Cnt }}</p>
          <p>=======================================</p>
        </div>
      </div> 
      
      <!-- filter -->
      <!-- <div>
        <input type="date" @input="searchdate = $event.target.value">
        <button type="button" @click="search">검색</button>
        <p>{{filterText | searchFilter}}</p>
      </div> -->

      <div v-for="item in array" :key="item.stateDt" v-show="showAll">
        <!-- <p v-show="showEmpty">{{ empty }}</p> -->
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

filters:{
  searchFilter: function(){

  }
},

data() {
  return {
    view: true,
    totalCount: '',
    array:'',
    searchArray:'',
    showAll:true,
    empty:'is Empty!!',
    showEmpty:true,
    // 날짜검색
    state_Dt:'',
    decide_Cnt:'',
    death_Cnt:'',
    startnum:'',
    endnum:'',
    searchC:''
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
      lv_Vm.view = true
      console.log(result)
    })

    .catch((error) => {
      console.log(error)
    })
  },

  search() {
    const a = this
    a.searchArray = [...a.array]
    for(let i=0; i<a.array.length; i++){
      if(a.searchdate.split('-').join('') === a.searchArray[i].stateDt.toString()){
        a.showAll = true
        a.showEmpty = false
        a.state_Dt = a.searchArray[i].stateDt
        a.decide_Cnt = a.searchArray[i].decideCnt
        a.death_Cnt = a.searchArray[i].deathCnt
      }
      else {
        a.showAll = false
        a.showEmpty = true
      }
    }


  }
}
}
</script>

<style scoped>
.searchC { 
  color: red;
}
