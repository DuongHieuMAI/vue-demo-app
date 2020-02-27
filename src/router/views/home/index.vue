<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main/index.vue'
import Map from '@components/maps/leaflet/index.vue'
// import Map from '@components/common/_base-map.vue'
import Sidebar from '@layouts/sidebar/index.vue'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    Layout,
    Map,
    Sidebar,
  },
  data() {
    return {
      tileProviders: [],
    }
  },
}
</script>

<template>
  <Layout>
    <Map style="width:100%; height:90vh">
      <Sidebar />
    </Map>
  </Layout>
</template>

<style lang="scss" module>
@import '@design';

// #map-wrapper {
//   position: relative;
//   width: 100%;
//   height: 100%;
// }

// #map {
//   width: 100%;
//   height: 90vh;
// }
</style>
