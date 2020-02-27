<script>
// import { LTileLayer, LControlLayers } from 'vue2-leaflet'

export default {
  // components: {
  // LTileLayer,
  // LControlLayers,
  // },
  data: () => ({
    selectedTile: 0,
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
      {
        name: 'OpenCycleMap',
        visible: false,
        url: 'https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png',
        attribution:
          '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        apikey: 'null',
      },
    ],
  }),
  watch: {
    selectedTile: function() {
      return this.$root.$emit(
        'change_map_tile',
        this.tileProviders[this.selectedTile]
      )
    },
  },
  methods: {},
}
</script>

<template>
  <v-row justify="center">
    <v-card style="background-color: black; opacity: 0.9">
      <div style="margin-bottom: 10px; text-align: center;">
        <span style="font-size: 15px; color: white; ">
          <strong>Map tile</strong>
        </span>
      </div>
      <v-divider dark></v-divider>
      <v-radio-group v-model="selectedTile">
        <v-radio
          v-for="(tileProvider, index) in tileProviders"
          :key="index"
          :label="`${tileProvider.name}`"
          :value="index"
          color="white"
          class="whiteText"
        ></v-radio>
      </v-radio-group>
      <!-- LControlLayer use direct parent, not realParent so we must use event bus for now -->
      <!-- <LControlLayers position="bottomright"></LControlLayers>
    <LTileLayer
      v-for="tileProvider in tileProviders"
      :key="tileProvider.name"
      :name="tileProvider.name"
      :visible="tileProvider.visible"
      :url="tileProvider.url"
      :attribution="tileProvider.attribution"
      layer-type="base"
    >
    </LTileLayer> -->
    </v-card>
  </v-row>
</template>

<style scoped>
.whiteText /deep/ label {
  color: white;
}
</style>
