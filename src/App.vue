<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import ticketHeader from './component/Header.vue'
import ticketFooter from './component/Footer.vue'
export default {

  name: 'App',
  data () {
    return {

    }
  },
  methods: {

  },
  components: {
 ticketHeader:ticketHeader,
 ticketFooter:ticketFooter
  }

}
</script>






<style>

html,body,
#app{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden !important;
}

.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
