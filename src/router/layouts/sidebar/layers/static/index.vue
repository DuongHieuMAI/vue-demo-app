<script>
// import { LTileLayer, LControlLayers } from 'vue2-leaflet'

export default {
  // components: {
  // LTileLayer,
  // LControlLayers,
  // },
  data: () => ({}),
  watch: {},
  methods: {},
}
</script>

<template>
  <v-row justify="center">
    <v-card style="background-color: black; opacity: 0.9">
      <div style="margin-bottom: 10px; text-align: center;">
        <span style="font-size: 15px; color: white; ">
          <strong>Static Layers</strong>
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
