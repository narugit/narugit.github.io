<template>
  <v-container>
	  <v-layout text-xs-center wrap>
      <v-flex mb-4>
        <h1>グルメ</h1>
      </v-flex>
    </v-layout>
    <v-card>
    <v-container
      fluid
      grid-list-md
    >
      <v-layout row wrap>
        <v-flex
          v-for="item in items.info"
            v-bind="{ [`xs6`]: true }"
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
                  <v-flex xs12 align-end flexbox>
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
              <v-btn icon>
                <font-awesome-icon icon="arrow-right" class="fa-2x"/>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    </v-card>
	</v-container>
</template>

<style lang="scss">
.headline-txt{
  font-size: 30px;
  color: #fff;
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
