<script>
import { LControl } from 'vue2-leaflet'
import MapTile from './maptile/index.vue'
import StaticLayer from './layers/static/index.vue'
import DynamicLayer from './layers/dynamic/index.vue'

export default {
  components: {
    LControl,
    MapTile,
    StaticLayer,
    DynamicLayer,
  },
  data: () => ({
    currentSelection: -1,

    items: [
      {
        icon: 'layers',
        tooltip: 'Static Layer',
        name: 'staticLayer',
      },
      {
        icon: 'layers-outline',
        tooltip: 'Dynamic Layer',
        name: 'dynamicLayer',
      },
      {
        icon: 'map',
        tooltip: 'Map Tile',
        name: 'mapTile',
      },
    ],
  }),
  methods: {
    showSidebarContent: function(item) {
      this.currentSelection === this.items.indexOf(item)
        ? (this.currentSelection = -1)
        : (this.currentSelection = this.items.indexOf(item))
    },
    isSidebarContentVisible: function(name) {
      if (this.currentSelection === -1) {
        return false
      }
      return this.items[this.currentSelection].name === name
    },
  },
}
</script>

<template>
  <div>
    <LControl position="topright" style="top: 60px; right: 0; opacity: 0.8">
      <v-layout row wrap class="pa-0">
        <v-card class="d-flex flex-wrap-reverse">
          <v-btn-toggle class="d-flex flex-column order-2">
            <div v-for="(item, index) in items" :key="index">
              <v-hover>
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      small
                      :color="currentSelection === index ? 'blue' : 'black'"
                      style="height: 40px; opacity: 0.9"
                      v-on="on"
                      @click="showSidebarContent(item)"
                    >
                      <v-icon medium color="white">mdi-{{ item.icon }}</v-icon>
                    </v-btn>
                  </template>
                  <span>{{ item.tooltip }}</span>
                </v-tooltip>
              </v-hover>
              <v-divider light class="mx-4"></v-divider>
            </div>
          </v-btn-toggle>
        </v-card>
      </v-layout>
    </LControl>
    <LControl position="topright" style="top: -72px; right: 52px; opacity: 0.8">
      <v-layout row wrap class="pa-0"> </v-layout>
      <StaticLayer
        v-if="isSidebarContentVisible('staticLayer')"
        class="d-flex pa-2 order-1"
        style="background-color: black; opacity: 0.9"
      />
    </LControl>
    <LControl position="topright" style="top: -42px; right: 52px; opacity: 0.8">
      <v-layout row wrap class="pa-0"> </v-layout>
      <DynamicLayer
        v-if="isSidebarContentVisible('dynamicLayer')"
        class="d-flex pa-2 order-1"
        style="background-color: black; opacity: 0.9"
      />
    </LControl>
    <LControl position="topright" style="top: -12px; right: 52px; opacity: 0.8">
      <v-layout row wrap class="pa-0"> </v-layout>
      <MapTile
        v-if="isSidebarContentVisible('mapTile')"
        class="d-flex pa-2 order-1"
        style="background-color: black; opacity: 0.9"
      />
    </LControl>
  </div>
</template>

<style lang="scss" module>
@import '@design';

// .map_tiles {
//   position: static;
//   right: 500;
// }
</style>
