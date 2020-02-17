<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main/index.vue'
import Map from '@components/maps/leaflet/index.vue'
// import Map from '@components/common/_base-map.vue'
import Sidebar from '@layouts/sidebar/index.vue'

import { LTileLayer, LControlLayers } from 'vue2-leaflet'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    Layout,
    Map,
    Sidebar,
    LTileLayer,
    LControlLayers,
  },
  data() {
    return {
      tileProviders: [
        {
          name: 'OpenStreetMap',
          visible: true,
          attribution:
            '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        },
        {
          name: 'OpenTopoMap',
          visible: false,
          url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
          attribution:
            'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
        },
      ],
    }
  },
}
</script>

<template>
  <Layout>
    <Map style="width:100%; height:90vh">
      <Sidebar />
      <LControlLayers position="bottomleft"></LControlLayers>
      <LTileLayer
        v-for="tileProvider in tileProviders"
        :key="tileProvider.name"
        :name="tileProvider.name"
        :visible="tileProvider.visible"
        :url="tileProvider.url"
        :attribution="tileProvider.attribution"
        layer-type="base"
      />
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
