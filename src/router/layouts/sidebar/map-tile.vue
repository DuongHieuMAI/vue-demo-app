<script>
export default {
  data: () => ({
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
    showSidebarContent: function(itemName) {},
  },
}
</script>

<template>
  <div>
    <v-layout row wrap style="top: 0; right: 500px;">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Single-line item</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-layout>
  </div>
</template>

<style lang="scss" module>
@import '@design';

// .map_tiles_wrapper {
// top: 200px;
// }
</style>
