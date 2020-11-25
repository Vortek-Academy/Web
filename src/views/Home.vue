<template>
  <v-container fluid style="top: 0">
    <v-container
      fluid
      class="text-center"
      style="color: whitesmoke; margin-top: 10rem"
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
    <v-container fluid class="text-center" style="margin-top: 2.4rem">
      <h1
        style="
          font-weight: 300;
          font-size: 2.1rem;
          letter-spacing: 2px;
          font-family: Bebas Neue, sans-serif;
          color: whitesmoke;
          margin-bottom: 2rem;
        "
      >
        <u>Find Us On</u>
      </h1>
      <v-btn
        fab
        small
        text
        href="https://twitter.com/VortekAcademy"
        target="_blank"
        ><v-icon>mdi-twitter</v-icon></v-btn
      >
      <v-btn
        fab
        small
        text
        href="https://instagram.com/vortek.academy"
        target="_blank"
        ><v-icon>mdi-instagram</v-icon></v-btn
      >
      <v-btn
        height="2.9rem"
        depressed
        href="https://discord.vortekacademy.com"
        target="_blank"
        style="border-radius: 10px"
        ><v-icon style="margin-right: 4px">mdi-discord</v-icon>Discord</v-btn
      >
      <v-btn
        fab
        small
        text
        href="https://steamcommunity.com/id/vortekacademy"
        target="_blank"
        ><v-icon>mdi-steam</v-icon></v-btn
      >
      <v-btn
        fab
        small
        text
        href="https://twitch.tv/vortekacademy"
        target="_blank"
        ><v-icon>mdi-twitch</v-icon></v-btn
      >
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.v-btn {
  background: #383a3c !important;
  margin: 0 1.1rem;
  color: #e67e22 !important;
}
</style>
