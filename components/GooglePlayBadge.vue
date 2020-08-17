<template>
	<nuxt-link :to="getAppUrl"
	   target="_blank"
	   rel="nofollow noopener noreferrer">
		<img width="192" height="57" draggable="false" src="~assets/img/google-play-badge.png" alt="Get it on Google Play" />
	</nuxt-link>
</template>

<script>
export default {
	name: "GooglePlayBadge",
	props: {
		appName: {
			type: String,
			required: true
		}
	},
	computed: {
		getAppUrl() {
			const vm = this;

			return `/apps/${vm.appName}/store`;
		}
	}
};
</script>