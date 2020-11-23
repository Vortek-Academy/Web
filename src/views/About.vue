<template>
  <v-container fluid style="margin-top: 8rem">
    <v-layout align-center justify-center>
      <v-card class="text-center white--text" dark max-width="60%">
        <v-img src="https://imgur.com/dsRurek.png"></v-img>
        <h1
          style="
            margin-top: 15px;
            font-weight: 300;
            letter-spacing: 2px;
            font-family: Bebas Neue, sans-serif;
          "
        >
          About <span style="color: #e67e22">VA</span>
        </h1>
        <v-card-text style="font-size: 14px">
          VorteK Academy is an independent tournament organizer and gaming
          community working in partnership with other figureheads of the Asian
          Rocket League scene, aiming to spotlight the many talented players
          across the Asian subcontinent. Our aim and primary goal are to
          showcase the best of Rocket League.
        </v-card-text>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "About",
  data: () => ({
    users: [],
  }),
  mounted: () => {
    fetch("https://discord.com/api/v8/guilds/492182284812812304", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bot NTc3MzUxNDg0OTg4MTk0ODE2.XNjyeA.Ay2MOt9LGRedCXLSA4QHn_JE0HM",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  },
};
</script>

<style scoped></style>
