<template lang="pug">
  div(v-cloak).clearfix
    aside-menu
    div(v-for='(post, index) in posts', :key="index")
      item(:post='post', :index="index")
</template>

<script>
import AsideMenu from '@/components/menu'
import Item from '@/components/item'
import { getPosts } from '@/services/posts'
import { eventbus } from '@/eventbus/eventbus'
export default {
  name: 'home',
  components: { AsideMenu, Item },
  data () {
    return {
      msg: 'Welcome to Our app',
      posts: [
      ]
    }
  },
  methods: {
    addToFavorites (id) {
    }
  },
  mounted () {
    getPosts()
    setInterval(() => {
      getPosts()
    }, 30000)
    eventbus.$on('send posts', (data) => {
      this.posts = data
    })
    eventbus.$on('remove post', (data) => {
      this.posts.splice(data, 1)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.fade-enter-active, .fade-leave-active 
  transition-property opacity
  transition-duration .25s


.fade-enter, .fade-leave-active 
  opacity 0

.card
  padding 15px 10px
  text-align left
  border-bottom 1px solid #4285f4
  float right
  width calc(100% - 120px)
  &__title
    font-size 18px
    text-decoration underline
  &__description
    margin-top 10px
    font-size: 14px
  &__tags
    margin-top 10px
    display block
  &__tag
    padding 0 5px
    display inline-block
    margin-right 10px
    border 1px solid #4285f4
  &__platform 
    flaot left
    margin-top 15px
    font-size 16px
    color #41B883
    display inline-block
  &__timestamp
    margin-top 15px
    float right
    display inline-block
  &__date
    font-size: 14px
  &__time
    font-weight 600
    font-size: 20px
  &__actions 
    clear both
    display block
    margin 10px auto 0
    max-width: 70%
    float right
  &__action
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
    &--remove
      background-color #b30505
      &:hover
        background-color #710606
</style>
