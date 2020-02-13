<script>
import NavBar from '@router/layouts/nav/index.vue'
// import Map from '@components/common/_base-map.vue'
// import Map from '@components/maps/leaflet/index.vue'
import Footer from '@router/layouts/footer/index.vue'

export default {
  components: { NavBar, Footer },
}
</script>

<template>
  <div :class="$style.container">
    <NavBar />
    <!-- <Map></Map> -->
    <slot />
    <Footer />
  </div>
</template>

<style lang="scss" module>
@import '@design';

.container {
  padding: 0 0 0 0;
  // min-width: $size-content-width-min;
  // max-width: $size-content-width-max;
  margin: 0 0 0 0;
}
</style>
