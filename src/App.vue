<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Spice Money</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn>
        <router-link to="/">Home</router-link>
      </v-btn>
      <b-btn>
        <router-link to="/about">About</router-link>
      </b-btn>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      //
    };
  }
};
</script>
