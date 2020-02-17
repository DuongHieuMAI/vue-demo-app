<script>
export default {
  data: () => ({
    links: ['Home', 'About Us', 'Team', 'Services', 'Blog', 'Contact Us'],
  }),
}
</script>

<template>
  <!-- <div style="height:2vh"> -->
  <v-footer app color="primary lighten-1 white--text" padless height="40">
    <v-col class="lighten-2 text-center white--text">
      {{ new Date().getUTCHours() }} : {{ new Date().getUTCMinutes() }} UTC —
      <strong>Powered by Vuetify</strong>
    </v-col>
  </v-footer>
  <!-- </div> -->
</template>

<style lang="scss" module>
@import '@design';
</style>
