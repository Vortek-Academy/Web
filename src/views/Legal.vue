<template>
	<v-container fluid style="margin-top: 8rem">
		<v-layout justify-center align-center>
			<v-app-bar dark flat color="transparent" max-width="40%">
				<v-toolbar-title
					style="
						font-size: 1.8rem;
						font-family: 'Bebas Neue', sans-serif;
						letter-spacing: 2px;
						color: #e67e22;
					"
					>Our Legal Policies</v-toolbar-title
				>
				<v-spacer></v-spacer>
				<v-btn text depressed @click="active = `terms`">Terms</v-btn>
				<v-btn text depressed @click="active = `privacy`">Privacy</v-btn>
				<v-btn text depressed @click="active = `refund`">Refund</v-btn>
			</v-app-bar>
		</v-layout>

		<div v-if="active === `terms`" style="margin-top: 3rem">
			<Terms />
		</div>
		<div v-else-if="active === `privacy`" style="margin-top: 3rem">
			<Privacy />
		</div>
		<div v-else-if="active === `refund`" style="margin-top: 3rem">
			<Refund />
		</div>
	</v-container>
</template>

<script>
import Refund from "@/components/Refund";
import Privacy from "@/components/Privacy";
import Terms from "@/components/Terms";
export default {
	name: "Legal",
	components: { Terms, Privacy, Refund },
	data: () => ({
		active: "terms",
	}),
};
</script>
