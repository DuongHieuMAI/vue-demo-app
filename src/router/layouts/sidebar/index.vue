<script>
import { LControl } from 'vue2-leaflet'
import MapTile from './map-tile.vue'

export default {
  components: {
    LControl,
    MapTile,
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
  },
}
</script>

<template>
  <div>
    <LControl position="topright" style="top: 100px; right: 0;">
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
                      style="height: 40px; opacity: 0.8"
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
          <v-card
            v-if="currentSelection !== -1"
            class="d-flex pa-2 order-1"
            style=" background-color: white;opacity: 0.8"
          >
            abc
          </v-card>
        </v-card>
      </v-layout>
      <!-- </v-container> -->
      <!-- <v-layout row wrap style="top: 200px; right: 100px;">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Single-line item</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-layout> -->
    </LControl>
    <LControl position="topright" style="top: 500px; right: 500;">
      <MapTile />
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
