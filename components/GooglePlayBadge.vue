<template>
	<a :href="url"
	   target="_blank"
	   rel="nofollow noopener noreferrer">
		<img width="192" height="57" draggable="false" src="~assets/img/google-play-badge.png" alt="Get it on Google Play" />
	</a>
</template>

<script>
export default {
	name: "GooglePlayBadge",
	props: {
		url: {
			type: String,
			required: true
		}
	}
};
</script>