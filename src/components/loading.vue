<template lang="pug">
  svg(width='50px', height='50px', xmlns="http://www.w3.org/2000/svg",
      viewBox="0 0 100 100", preserveAspectRatio="xMidYMid",
      class="loading", style="margin: auto; display: inline-block;")
    rect(x="0" y="0" width="100" height="100" fill="none" class="bk")
    circle(cx="50" cy="50" r="40", :stroke="background", fill="none" stroke-width="10" stroke-linecap="round")
    circle(cx="50" cy="50" r="40", :stroke="foreground", fill="none" stroke-width="6" stroke-linecap="round")
      animate(attributeName="stroke-dashoffset" dur="2s" repeatCount="indefinite" from="0" to="502")
      animate(attributeName="stroke-dasharray" dur="2s" repeatCount="indefinite" values="150.6 100.4;1 250;150.6 100.4")
</template>

<script>

export default {
  props: {
    color: {
      type: Array,
      default () { return [0, 0, 0, 1] }
    }
  },

  computed: {
    background () {
      return `rgba(${this.toAlpha(this.color, 0.059).join(',')})`
    },
    foreground () {
      return `rgba(${this.toAlpha(this.color, 1).join(',')})`
    }
  },

  methods: {
    toAlpha (color, alpha = 1) {
      alpha = parseFloat(color.length === 4 ? color[color.length - 1] : 1) * alpha

      return color.slice(0, 3).concat([alpha])
    }
  }
}

</script>
<style lang="stylus">

  
</style>
