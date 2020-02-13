<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main/index.vue'
import Map from '@components/maps/leaflet/index.vue'
// import Map from '@components/common/_base-map.vue'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, Map },
}
</script>

<template>
  <Layout>
    <!-- <div> -->
    <Map></Map>
    <!-- <img
        src="@assets/images/logo.png"
        alt="Logo"
        style="width:50px;height:60px;"
      /> -->
    <!-- </div> -->
  </Layout>
</template>
