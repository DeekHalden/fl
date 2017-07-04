<template lang="pug">
  div(v-cloak).clearfix
    aside-menu
    div(v-if="favorites" v-for="(favorite, index) in favorites")
      item(:item="favorite", index="index")
</template>

<script>
  import AsideMenu from '@/components/menu'
  import Item from '@/components/item'
  import { eventbus } from '@/eventbus/eventbus'
  export default {
    name: 'favorite',
    components: { AsideMenu, Item },
    data () {
      return {
        favorites: []
      }
    },
    mounted () {
      eventbus.$on('remove favorite', (data) => {
        this.favorites.splice(data, 1)
      })
    }
  }
</script>

<style lang="stylus">
    
</style>
