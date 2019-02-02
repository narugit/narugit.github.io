<template>
    <v-container>
	    <v-layout text-xs-center wrap>
            <v-flex mb-4>
                <h1>グルメ</h1>
                <div class="itemContainer">
			            <div v-for="item in items.info">
                    店名: {{item.name}}
                    場所: {{item.place}}
                  </div>
            </div>
            </v-flex>
        </v-layout>
	</v-container>
</template>

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
