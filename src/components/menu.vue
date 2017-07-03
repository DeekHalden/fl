<template lang="pug">
  .menu
    router-link(:to="link.href" v-for="(link, index) in links", :key="index", :title='link.text').menu__item {{ link.text }}
</template>
<script>
  export default {
    name: 'aside-menu',
    data () {
      return {
        links: [
          {
            href: '/home',
            text: 'home',
            title: 'New'
          },
          {
            href: '/favorite',
            text: 'favorite',
            icon: 'favorite'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus">
.menu
  width 100px
  float left
  &__item
    transition .2s ease all
    line-height 70px
    text-align center
    display block
    border-radius 7px 
    margin 0px 0 5px
    height 70px
    box-shadow 10px 5px 20px rgba(0,0,0,.4)
    &:hover
      box-shadow 5px 5px 10px rgba(0,0,0,.4)
    button
      display block
      height 100%
    // .fa-icon
  .router-link-exact-active
    color #313233
    // &:hover
    //   color red 
@media(max-width 480px) 
  .fa-icon
    font-size 1em

</style>
