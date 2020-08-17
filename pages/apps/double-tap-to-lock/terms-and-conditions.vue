<template>
	<div>
		<Hero :title="title"
			  :description="appName" />

		<div class="box">
			<div class="content">
				<nuxt-content :document="termsAndConditions" />

				<hr />

				<GooglePlayBadge app-name="double-tap-to-lock" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	layout: "apps",
	async asyncData({ $content, params }) {
		return {
			termsAndConditions: await $content("double-tap-to-lock/terms-and-conditions", params).fetch()
		};
	},
	data() {
		return {
			title: "Terms & Conditions",
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