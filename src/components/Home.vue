<template lang="pug">
    v-container
      v-layout(text-xs-center="" wrap="")
        v-flex(xs12="")
          v-img.my-3(:src="require('../assets/logo.png')" contain="" height="200")
        v-flex(mb-4="")
          h1.display-2.font-weight-bold.mb-3 ホーム
          p.subheading.font-weight-regular
            | グルメが好きです
        v-flex(xs12="" mb-5="")
          h2.headline.font-weight-bold.mb-3 Link
          v-layout(justify-center="")
            a.subheading.mx-3(v-for="(eco, i) in link" :key="i" :href="eco.href" target="_blank") {{ eco.text }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class Home extends Vue {
	private link = [
		{
			text: 'github',
			href: 'https://github.com/narugit',
		},
		{
			text: '研究室',
			href: 'https://www.sens.sys.es.osaka-u.ac.jp/',
		},
	];
}
</script>

<style>

</style>