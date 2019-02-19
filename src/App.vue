<template>
<v-app>
    <!-- ツールバー -->
    <v-toolbar app>
      <v-btn flat icon @click.stop="drawer = !drawer">
        <font-awesome-icon icon="bars" class="fa-2x"/>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat v-for="item in items" :key="item.title">
          <router-link class='router-txt' :to="'/' + item.title">
            {{ item.title }}
          </router-link>      
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>  
    
    <!-- ナビゲーションバー -->
    <v-navigation-drawer 
      v-model="drawer" 
      app
    >

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
        >
          <v-list-tile-action>
            <font-awesome-icon class="fa-lg" :icon="item.icon"/>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>
              <router-link class='router-txt'
                :to="'/' + item.title">
                {{ item.title }}
              </router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<style lang="scss">
.router-txt{
  font-size: 20px;
  color: #000;
  text-decoration: none;
}
</style>

<script type="ts">
export default {
    data() {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'home' },
          { title: 'Gourmet', icon: 'utensils' },
        ],
      };
    },
  };
</script>
