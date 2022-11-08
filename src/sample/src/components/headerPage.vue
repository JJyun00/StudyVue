<template>
    <div>
        <!-- <a href="/home">href Test</a> -->
        <div class="menu">
            <img alt="Vue logo" src="../assets/logo.png">
            <ul>
                <li><a @click="fn_move('1')">home</a></li>
                <li><a @click="fn_move('2')">about</a></li>
                <li><a @click="fn_move('3')">info</a></li>
                <li><a @click="fn_move('4')">HelloWorld</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default{
        props: {
            param: {
                type: Object
            }
        },
        data(){
            return {
                pData: {},
                test: '123'
            }
        },
        watch: {
          param(pData) {
            this.pData = pData
            console.log('pData', pData)
          }
        },
        created() {
            // this.pData = this.param
            console.log('header', this.pData)
        },
        mounted() {
            // this.pData = this.param
        },
        methods: {
            fn_move(index) {
                if (index === '1') this.$router.push({name:'home', params: this.pData}).catch(()=>{})
                if (index === '2') this.$router.push({name:'about'}).catch(()=>{})
                if (index === '3') this.$router.push({name:'info'}).catch(()=>{})
                if (index === '4') this.$router.push({name:'hello'}).catch(()=>{})
            }
        }
    }
</script>

<style>
.menu ul {
    justify-content: space-around;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
}
.menu li {
    padding-right: 5px;
}
.menu a {
    text-decoration: none;
    font-size: 1.5em;
}
img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50px;
    height: 50px;
}
</style>