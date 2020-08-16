<template>
	<div>
		<Hero :title="title"
			  :description="appName" />

		<div class="box">
			<div class="content">
				<nuxt-content :document="privacyPolicy" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	layout: "apps",
	async asyncData({ $content, params }) {
		return {
			privacyPolicy: await $content("double-tap-to-lock/privacy-policy", params).fetch()
		};
	},
	data() {
		return {
			title: "Privacy Policy",
			appName: "Double Tap To Lock"
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
					content: "You can use double tap to lock feature on your phone easily. ✌ - Double Tap To Lock is free for Android!"
				}
			]
		};
	}
};
</script>