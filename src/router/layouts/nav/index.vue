<script>
import { authComputed } from '@state/helpers'
import NavBarRoutes from '@components/common/nav-bar-routes.vue'

export default {
  components: { NavBarRoutes },
  data() {
    return {
      drawer: false,
      persistentNavRoutes: [
        {
          name: 'home',
          title: 'Home',
        },
      ],
      loggedInNavRoutes: [
        // {
        //   name: 'profile',
        //   title: () => 'Logged in as ' + this.currentUser.name,
        // },
        {
          name: 'logout',
          title: 'Log out',
        },
      ],
      loggedOutNavRoutes: [
        {
          name: 'login',
          title: 'Log in',
        },
      ],
    }
  },
  computed: {
    ...authComputed,
  },
}
</script>

<template>
  <v-card class="mx-auto overflow-hidden">
    <v-app-bar dense color="black" opacity="0.6">
      <!-- <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template> -->

      <v-app-bar-nav-icon
        :class="$style.container"
        color="white"
        @click="drawer = !drawer"
      >
      </v-app-bar-nav-icon>

      <!-- <BaseInputText /> -->

      <!-- <v-toolbar-title>Todo App</v-toolbar-title> -->

      <v-spacer></v-spacer>

      <v-toolbar-title :class="$style.container">
        <v-app-bar-nav-icon>
          <v-icon color="white" large> mdi-account</v-icon>
        </v-app-bar-nav-icon>
        <NavBarRoutes v-if="loggedIn" :routes="loggedInNavRoutes" />
        <NavBarRoutes v-else :routes="loggedOutNavRoutes" />
      </v-toolbar-title>

      <!-- <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>Tab 1</v-tab>
          <v-tab>Tab 2</v-tab>
          <v-tab>Tab 3</v-tab>
        </v-tabs>
      </template> -->
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app :width="150">
      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title :class="$style.container">
              <NavBarRoutes :routes="persistentNavRoutes" />
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-information</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About us</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<style lang="scss" module>
@import '@design';

.container {
  padding: 0 0;
  margin: 0 0 0 0;

  > li {
    display: inline-block;
    margin-right: $size-grid-padding;
  }

  text-align: center;
  list-style-type: none;
}
</style>
