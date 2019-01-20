<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>NARKEY</span>
        <span class="font-weight-light">のページ</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat icon>
        <font-awesome-icon icon="bars" class="fa-2x"/>
      </v-btn>
    </v-toolbar>

    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Home from './components/Home.vue';

@Component({
  components: {
    Home,
  },
})
export default class App extends Vue {}
</script>
