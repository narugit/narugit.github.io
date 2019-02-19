<template>
  <v-container>
	  <v-layout text-xs-center wrap>
      <v-flex mb-4>
        <h1>グルメ</h1>
      </v-flex>
    </v-layout>

    <!-- ダイアログ -->    
    <v-flex v-for="item in items.info" :key="item.name">
      <v-dialog
        v-model="item.dialog"
        fullscreen
        transition="dialog-bottom-transition"
        scrollable
      >
        <v-card tile>
          <!-- ツールバー部分 -->
          <v-toolbar app>
            <v-btn icon @click="item.dialog = false">
              <v-icon>close</v-icon>
            </v-btn>
          </v-toolbar>  
          <v-container
            fluid
            grid-list-md
          >
      
            <v-layout column wrap class="mt-5">
              <v-flex class="dialog-txt">
                {{item.name}}
                <v-card>
                  <v-img 
                    :src="require('@/static/images/'+item.src)"
                    height="600px"
                  >
                  </v-img>
                </v-card>
                <v-flex class="detail-txt">
                  場所: {{item.place}}
                </v-flex>
                <v-flex class="detail-txt">
                  ジャンル: {{item.genre}}
                </v-flex>
              </v-flex>
            </v-layout>
          </v-container>
          
        </v-card>
      </v-dialog>
    </v-flex>
    
    <v-container
      fluid
      grid-list-md
    >
      <v-layout column wrap>
        <v-flex
          v-for="item in items.info"
            :key="item.name"
        >
          <v-card>
            <v-img 
              :src="require('@/static/images/'+item.src)"
              height="400px"
            >
              <v-container
                fill-height
                fluid
                pa-2
              >
                <v-layout fill-height>
                  <v-flex align-end flexbox>
                    <span class="headline-txt" v-text="item.name"></span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>

            <v-card-actions>
              <v-flex
                class="headline"
              >
                {{item.place}}
              </v-flex>
              <v-spacer></v-spacer>
              <v-btn icon @click="item.dialog = true">
                <font-awesome-icon icon="arrow-right" class="fa-2x"/>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
	</v-container>
</template>

<style lang="scss">
.headline-txt{
  font-size: 30px;
  color: #fff;
  font-weight: bold;
}

.dialog-txt{
  font-size: 30px;
  font-weight: bold;
}

.detail-txt{
  font-size: 20px;
}
</style>

<script lang="ts">
import gourmetData from '@/static/data/gourmet.json';

export default {
  name: 'Gourmet',
  data() {
    return {
			items: gourmetData,
    };
  },
};
</script>
