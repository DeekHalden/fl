<template lang="pug">
  #app.container.clearfix
    .header(v-if='loggedIn')
      p.header__username {{ credentials.username }}
        button(@click="logout()") Выйти
    router-view
</template>

<script>
import LoadingComponent from '@/components/loading'
import { eventbus } from '@/eventbus/eventbus'
import { doLogout, getToken } from '@/services/auth'
// import axios from 'axios'
export default {
  name: 'app',
  components: { LoadingComponent },
  data () {
    return {
      loggedIn: false,
      credentials: {
        username: undefined,
        token: undefined
      }
    }
  },
  methods: {
    loadUserCredentials () {
      this.credentials.token = getToken() || ''
      if (this.credentials.token.length > 0) {
          // thisuseCredentials(this.credentials)
        this.loggedIn = true
      }
    },
    logout () {
      doLogout()
      this.loggedIn = false
      this.$router.push({path: '/'})
    }
  },
  created () {
    this.loadUserCredentials()
    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    this.credentials.username = localStorage.getItem('username')
    eventbus.$on('login successful', (data) => {
      this.credentials.username = data
      this.loggedIn = true
      this.$router.push('/home')
    })
    // }
  }
}
</script>

<style lang="stylus">

* 
  margin 0 
  padding 0
  box-sizing border-box
h1 
  margin-top 0
#app 
  min-height 100vh
  position relative
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
.header 
  padding-top 20px
  text-align right
  &__username
    font-size: 16px
    font-weight 600
  button
    cursor pointer
    padding 0 15px
    margin-left 10px
    color #fff
    min-width 30px
    height 30px
    line-height 30px
    border none
    font-size: 20px
    transition .5s ease all
    border-radius 4px
    text-transform uppercase
    background-color #4CAF50
    margin-left 20px
    &:hover
      background-color #3e8441
  
.clearfix:before,.clearfix:after 
  content " "
  display table
  width 0
  height 0
  visibility hidden
.clearfix:after 
  clear both
.container 
    width 100%
    transition .1s linear all
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding-right: 15px;
    padding-left: 15px;
    &--no-padding
        padding 0 !important
    &--fullscreen
      line-height 100vh
      height 100vh
@media (min-width: 576px)
    .container 
        width: 540px;
        padding-right: 15px;
        padding-left: 15px;

@media (min-width: 768px)

    .container 
        width: 720px;
        padding-right: 15px;
        padding-left: 15px;
@media (min-width: 992px)

    .container 
        width: 960px;
        padding-right: 15px;
        padding-left: 15px;

@media (min-width: 1200px)
    .container 
        width: 1140px;
        padding 0 93px
@media (min-width: 1426px)
    .container 
        width 1366px


</style>
