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
								   :to="`/apps/${app.url}/privacy-policy`">
						Privacy Policy
					</b-navbar-item>

					<b-navbar-item tag="nuxt-link"
								   :to="`/apps/${app.url}/terms-and-conditions`">
						Terms & Conditions
					</b-navbar-item>

					<b-navbar-item :href="app.storeUrl">
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
			<p><small>Google Play and the Google Play logo are trademarks of Google LLC.</small></p>

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
			// TODO: Apps will be added to the Vuex
			apps: [
				{
					title: "Double Tap To Lock",
					url: "double-tap-to-lock",
					packageName: "ozgurgorgulu.doubletaptolock",
					storeUrl: "https://dttl.page.link/store"
				},
				{
					title: "InstaDownloader",
					url: "instadownloader",
					packageName: "ozgurgorgulu.instdownloader",
					storeUrl: "https://instadownloader.page.link/store"
				},
				{
					title: "Rebootify",
					url: "rebootify",
					packageName: "ozgurgorgulu.rebootify",
					storeUrl: "https://rebootify.page.link/store"
				},
				{
					title: "Currency Logger",
					url: "currency-logger",
					packageName: "og.app.currencylogger",
					storeUrl: "https://currencylogger.page.link/store"
				}
			]
		};
	}
};
</script>