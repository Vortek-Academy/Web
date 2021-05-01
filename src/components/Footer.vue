<template>
	<v-layout
		align-center
		style="background: #000; height: 30vh; width: 100%; color: white"
	>
		<v-layout justify-center align-center style="height: 80%">
			<v-avatar size="60">
				<img
					src="https://imgur.com/tNvpxYp.png"
					alt=""
					style="width: 100px; height: 100px"
				/>
			</v-avatar>
			<v-divider vertical style="background: white; margin: 0 30px" />
			<div>
				<div>
					<span
						style="
							font-size: 1.6rem;
							font-family: 'Bebas Neue', sans-serif;
							letter-spacing: 2px;
						"
					>
						<span style="color: #e67e22; font-size: 2.6rem">V</span>orteK
						<span style="color: #e67e22; font-size: 2.6rem">A</span>cademy
					</span>
				</div>
				<div style="font-weight: 500">
					Copyright © 2020-2021
					<span style="color: #e67e22">Vortek Academy</span>
				</div>
				<div style="margin-top: 1rem">
					<a
						class="footer-link"
						href="https://twitter.com/VortekAcademy"
						target="_blank"
					>
						<v-icon>mdi-twitter</v-icon>
					</a>
					<a
						class="footer-link"
						href="https://instagram.com/vortek.academy"
						target="_blank"
					>
						<v-icon>mdi-instagram</v-icon>
					</a>
					<a
						class="footer-link"
						href="https://steamcommunity.com/id/vortekacademy"
						target="_blank"
					>
						<v-icon>mdi-steam</v-icon>
					</a>
					<a
						class="footer-link"
						href="https://twitch.tv/vortekacademy"
						target="_blank"
					>
						<v-icon>mdi-twitch</v-icon>
					</a>
				</div>
			</div>
		</v-layout>
		<v-spacer />
		<v-layout align-center justify-center>
			<div style="margin: 0.8rem 0; font-weight: 500">
				<a href="/contact" style="color: #e67e22">Contact Us</a>
				<br />
				<a href="/legal" style="color: #e67e22">Legal Policies</a>
				<br />
				<a href="mailto:vortekacademy@gmail.com" style="color: #e67e22">
					Email Us
				</a>
			</div>
		</v-layout>
	</v-layout>
</template>

<script>
export default {
	name: "Footer",
};
</script>

<style scoped>
a {
	text-decoration: none;
	margin-right: 0.8rem;
}

.footer-link > .v-icon {
	color: #e67e22;
	transition: color 0.3s ease;
}

.footer-link > .v-icon:hover {
	color: white;
}
</style>
