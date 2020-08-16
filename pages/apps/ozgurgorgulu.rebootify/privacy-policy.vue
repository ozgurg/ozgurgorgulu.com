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
			privacyPolicy: await $content("ozgurgorgulu.rebootify/privacy-policy", params).fetch()
		};
	},
	data() {
		return {
			title: "Privacy Policy",
			appName: "Rebootify"
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
					content: "You can quickly reboot into 5 modes your device with root access. - Rebootify is free for Android!"
				}
			]
		};
	}
};
</script>