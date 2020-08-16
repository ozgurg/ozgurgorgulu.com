<template>
	<div>
		<Hero :title="title"
			  :description="description" />

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
			termsAndConditions: await $content("ozgurgorgulu.rebootify/terms-and-conditions", params).fetch()
		};
	},
	data() {
		return {
			title: "Terms & Conditions",
			description: "Rebootify"
		};
	},
	head() {
		const vm = this;

		return {
			title: `${vm.title} - ${vm.description}`,
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