<template>
	<v-layout justify-center align-center>
		<v-app-bar dark flat color="transparent" max-width="75%">
			<router-link to="/" class="text-decoration-none white--text">
				<v-toolbar-title
					style="
						font-size: 1.6rem;
						font-family: 'Bebas Neue', sans-serif;
						letter-spacing: 2px;
					"
					><span style="color: #e67e22; font-size: 2.6rem">V</span>orteK
					<span style="color: #e67e22; font-size: 2.6rem">A</span
					>cademy</v-toolbar-title
				>
			</router-link>
			<v-spacer />
			<v-btn text depressed to="/about">About</v-btn>
			<v-btn text depressed to="/blog">Blog</v-btn>
			<v-btn
				text
				depressed
				href="https://discord.vortekacademy.com"
				target="_blank"
				>Discord</v-btn
			>
			<v-spacer />
			<v-btn depressed href="" class="special">Login</v-btn>
		</v-app-bar>
	</v-layout>
</template>

<script>
export default {
	name: "Navigator",
};
</script>

<style scoped>
.v-btn {
	color: #e67e22 !important;
	margin: 0 10px;
}
.special {
	background: #e67e22 !important;
	color: #141414 !important;
}
</style>
