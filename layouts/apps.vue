<template>
	<main>
		<b-navbar
			fixed-top=""
			shadow=""
			wrapper-class="container">
			<template slot="brand">
				<b-navbar-item>
					<b>Özgür Görgülü</b>
				</b-navbar-item>
			</template>

			<template slot="end">
				<b-navbar-dropdown :key="key" v-for="(app, key) in apps"
								   :label="app.title"
								   right=""
								   hoverable="">
					<b-navbar-item tag="nuxt-link"
								   :to="`/apps/${app.packageName}/privacy-policy`">
						Privacy Policy
					</b-navbar-item>

					<b-navbar-item tag="nuxt-link"
								   :to="`/apps/${app.packageName}/terms-and-conditions`">
						Terms & Conditions
					</b-navbar-item>

					<b-navbar-item :href="`https://play.google.com/store/apps/details?id=${app.packageName}`"
								   rel="nofollow noopener noreferrer"
								   target="_blank">
						Get it on Google Play
					</b-navbar-item>
				</b-navbar-dropdown>
			</template>
		</b-navbar>

		<div class="section">
			<div class="container">
				<Nuxt />
			</div>
		</div>

		<hr style="border-color:#fff" />

		<footer class="content has-text-centered">
			<p>This site is open source developed by
				<a href="https://github.com/ozgurg" rel="nofollow noopener noreferrer" target="_blank">@ozgurg</a>.
			</p>

			<iframe src="https://ghbtns.com/github-btn.html?user=ozgurg&repo=ozgurgorgulu.com&type=star&count=true&size=large"
					width="170"
					height="30"></iframe>
		</footer>
	</main>
</template>

<script>
export default {
	data() {
		return {
			apps: [
				{
					title: "Double Tap To Lock",
					packageName: "ozgurgorgulu.doubletaptolock"
				},
				{
					title: "InstaDownloader",
					packageName: "ozgurgorgulu.instdownloader"
				},
				{
					title: "Rebootify",
					packageName: "ozgurgorgulu.rebootify"
				}
			]
		};
	}
};
</script>