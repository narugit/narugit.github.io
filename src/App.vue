<template lang="pug">
    v-app
      // ツールバー
      v-toolbar(app="")
        v-toolbar-title.headline.text-uppercase
          span NARKEY
          span.font-weight-light のページ
        v-spacer
        v-btn(flat="" icon="" @click.stop="drawer = !drawer")
          font-awesome-icon.fa-2x(icon="bars")
      // ナビゲーションバー
      v-navigation-drawer(v-model="drawer" absolute="" temporary="" right="")
        v-list.pt-0(dense="")
          v-divider
          v-list-tile(v-for="item in items" :key="item.title")
            v-list-tile-action
              font-awesome-icon.fa-lg(:icon="item.icon")
            v-list-tile-content
              v-list-tile-title
                router-link.router-txt(:to="'/' + item.title")
                  | {{ item.title }}
      v-content
        router-view
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
