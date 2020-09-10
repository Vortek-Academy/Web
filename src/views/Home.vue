<template>
  <v-container fluid style="top: 0; height: 100vh">
    <div id="backdrop"></div>
    <div id="landing">
      <v-container
        fluid
        class="text-center"
        style="color: whitesmoke; margin-top: 11rem"
      >
        <img
          src="https://imgur.com/tNvpxYp.png"
          alt=""
          style="width: 150px; height: 150px"
        />
        <h1
          style="
            font-weight: 300;
            font-size: 3rem;
            letter-spacing: 2px;
            font-family: Bebas Neue, sans-serif;
          "
        >
          Welcome to <span style="color: #e67e22">Vortek Academy</span>
        </h1>
        <br />
        <h1
          style="
            font-weight: 200;
            font-size: 2.5rem;
            letter-spacing: 2px;
            font-family: Bebas Neue, sans-serif;
          "
        >
          <span style="color: #e67e22">The second</span> home of gamers!
        </h1>
      </v-container>
      <v-container fluid class="text-center" style="margin-top: 2.8rem">
        <h1
          style="
            font-weight: 300;
            font-size: 2.3rem;
            letter-spacing: 2px;
            font-family: Bebas Neue, sans-serif;
            color: whitesmoke;
            margin-bottom: 2rem;
          "
        >
          <u>Find Us On</u>
        </h1>
        <v-btn fab text href="https://twitter.com/VortekAcademy" target="_blank"
          ><v-icon>mdi-twitter</v-icon></v-btn
        >
        <v-btn
          fab
          text
          href="https://instagram.com/vortek.academy"
          target="_blank"
          ><v-icon>mdi-instagram</v-icon></v-btn
        >
        <v-btn
          height="4rem"
          depressed
          href="https://discord.vortekacademy.com"
          target="_blank"
          style="border-radius: 12px"
          ><v-icon style="margin-right: 4px">mdi-discord</v-icon>Discord</v-btn
        >
        <v-btn
          fab
          text
          href="https://steamcommunity.com/id/vortekacademy"
          target="_blank"
          ><v-icon>mdi-steam</v-icon></v-btn
        >
        <v-btn fab text href="https://twitch.tv/vortekacademy" target="_blank"
          ><v-icon>mdi-twitch</v-icon></v-btn
        >
      </v-container>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
#backdrop {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(https://imgur.com/dsRurek.png);
  filter: blur(5px);
  background-size: cover;
  position: relative;
  overflow: hidden;
}
#landing {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
}
.v-btn {
  background: #383a3c !important;
  margin: 0 1.1rem;
  color: #e67e22 !important;
}
</style>
