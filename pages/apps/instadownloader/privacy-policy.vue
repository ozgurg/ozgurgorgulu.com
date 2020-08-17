<template>
	<div>
		<Hero :title="title"
			  :description="appName" />

		<div class="box">
			<div class="content">
				<nuxt-content :document="content" />

				<hr />

				<GooglePlayBadge app-name="instadownloader" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	layout: "apps",
	async asyncData({ $content, params }) {
		return {
			content: await $content("instadownloader/privacy-policy", params).fetch()
		};
	},
	data() {
		return {
			title: "Privacy Policy",
			appName: "InstaDownloader"
		};
	},
	head() {
		const vm = this;

		return {
			title: `${vm.title} - ${vm.appName}`,
			meta: [
				{
					hid: "description",
					name: "description",
					content: "Download Instagram photos and videos with just one tap! - InstaDownloader is free for Android!"
				}
			]
		};
	}
};
</script>