<template>
  <v-container fluid style="top: 0; height: 100vh">
    <v-container
      fluid
      class="text-center"
      style="color: whitesmoke; margin-top: 11rem"
    >
      <h1
        style="
          font-weight: 300;
          font-size: 3rem;
          letter-spacing: 2px;
          font-family: Bebas Neue, sans-serif;
        "
      >
        Donate VA
      </h1>
    </v-container>
    <v-layout
      justify-center
      align-center
      class="text-center"
      style="margin-top: 3rem"
    >
      <v-card
        color="#000000"
        width="4in"
        style="margin: 5px"
        v-for="tier in tiers"
        :key="tier.price"
      >
        <h2
          style="
            font-weight: 200;
            font-size: 1.8rem;
            letter-spacing: 2px;
            font-family: Bebas Neue, sans-serif;
            color: #e67e22;
            margin: 10px;
          "
        >
          USD {{ tier.price }}+
        </h2>
        <v-divider dark></v-divider>
        <v-card-text
          v-for="perk in tier.perks"
          :key="perk"
          style="color: whitesmoke; font-family: Josefin, sans-serif"
          >{{ perk.toUpperCase() }}</v-card-text
        >
      </v-card>
    </v-layout>
    <v-container class="text-center" style="margin-top: 4rem">
      <form id="form"></form>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "Shop",
  data: () => ({
    tiers: [
      {
        price: 0,
        perks: ["Exclusive Donators role in our official Discord"],
      },
      {
        price: 15,
        perks: [
          "Premium Donators role",
          "Access to Premium Donators voice channel",
          "Plus all the $0+ perks",
        ],
      },
      {
        price: 30,
        perks: [
          "A custom role that you can share with 2 other members",
          "Plus all the $0+ and $15+ perks",
        ],
      },
    ],
  }),
  mounted() {
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://checkout.razorpay.com/v1/payment-button.js"
    );
    script.setAttribute("data-payment_button_id", "pl_Fuzlsxrq2rmDwt");
    script.setAttribute("data-button_text", "Donate VA");

    document.getElementById("form").appendChild(script);
  },
};
</script>

<style scoped></style>
