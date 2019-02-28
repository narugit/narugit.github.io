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
        hide-overlay
        transition="dialog-bottom-transition"
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
                <v-card
                  width="80vw">
                  <v-img 
                    :src="require('@/static/images/'+item.src)"
                    width="80vw" height="auto"
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
            <div class="headline-txt ml-2">{{item.name}}</div>
            <v-chip class="genre">
              {{item.genre}}
            </v-chip>
            <v-chip class="place">
              {{item.place}}
            </v-chip>

            <v-img 
              :src="require('@/static/images/'+item.src)"
              class="ml-2"
              width="83vw"
              height="auto"
            >
              
            </v-img>

            <v-card-actions>
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
  font-weight: bold;
}

.dialog-txt{
  font-size: 30px;
  font-weight: bold;
}

.detail-txt{
  font-size: 20px;
}

.v-chip.genre{
  background: rgba(168, 125, 46, 0.527);
  font-weight: bold;
}

.v-chip.place{
  background: rgba(212, 61, 35, 0.527);
  font-weight: bold;
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
