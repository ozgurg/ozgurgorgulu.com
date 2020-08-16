<template>
	<div>
		<Hero :title="title"
			  :description="appName" />

		<div class="box">
			<div class="content">
				<nuxt-content :document="termsAndConditions" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	layout: "apps",
	async asyncData({ $content, params }) {
		return {
			termsAndConditions: await $content("instadownloader/terms-and-conditions", params).fetch()
		};
	},
	data() {
		return {
			title: "Terms & Conditions",
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