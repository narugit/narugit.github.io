<template>
	<v-container>
		<v-layout text-xs-center wrap>
			<v-flex xs12>
				<v-img :src="require('../assets/logo.png')" class="my-3" contain height="200"></v-img>
			</v-flex>

			<v-flex mb-4>
				<h1 class="display-2 font-weight-bold mb-3">ホーム</h1>
				<p class="subheading font-weight-regular">
					グルメが好きです
				</p>
			</v-flex>	

			<v-flex xs12 mb-5>
				<h2 class="headline font-weight-bold mb-3">Link</h2>

				<v-layout justify-center>
					<a
						v-for="(eco, i) in link"
						:key="i"
						:href="eco.href"
						class="subheading mx-3"
						target="_blank"
					>{{ eco.text }}</a>
				</v-layout>
			</v-flex>
		</v-layout>
	</v-container>
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