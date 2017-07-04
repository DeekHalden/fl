<template lang="pug">
  div(key="index").card
    h2.card__title {{ post.title }}
    p.card__description {{ post.description.slice(0,150).concat('...') }}
    div.card__tags
      span.card__tag(v-for="tag in post.tags") {{ tag }}
    div.card__platform 
      a(:href="post.platform" target="_blank") {{ post.platform }}
    div.card__timestamp
      span.card__date {{ post.createdAt | moment(" MM.DD ") }} |
      span.card__time {{ post.createdAt | moment(" HH:mm ")}}
    div.card__actions
      button.card__action.card__action--favore(@click='addToFavorites(post._id)') &#9733;
      button.card__action.card__action--remove(@click='remove(post._id, index)') удалить

</template>

<script>
import { deletePost } from '@/services/posts'
export default {
  data () {
    return {
    }
  },
  props: ['post', 'index'],
  methods: {
    addToFavorites (id) {
    },
    remove (id, index) {
      deletePost(id, index)
    }
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
