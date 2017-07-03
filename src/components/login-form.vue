<template lang='pug'>
    form.form(name="login")
      .form__control
        label.form__label
        input(type='text', id='name', name='name', placeholder='name' @keyup.enter="login(form)" v-model='form.username').form__input
      .form__control
        label.form__label
        input(type='password', id='pasword', name='pasword', placeholder='pasword' @keyup.enter="login(form)" v-model='form.password').form__input
</template>
<script>
  import { doLogin } from '@/services/auth'
  export default {
    data () {
      return {
        form: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      login (form) {
        doLogin(form, this.$router)
      }
    }
  }
</script>

<style lang="stylus">
.form
  position: absolute
  top 50%
  left 50%
  width 300px
  transform translateY(-50%) translateX(-50%)
  vertical-align middle
  .form__control
    width 100%
    height 40px
    margin-bottom 10px
    input
      padding-left 5px
      width: 100%
      height 100%
      border 2px solid #000
      &:focus
        outline none


</style>
