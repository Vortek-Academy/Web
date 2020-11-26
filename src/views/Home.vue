<template>
  <v-container
    fluid
    class="text-center"
    style="margin-top: 9rem; color: whitesmoke; height: 100vh"
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
    <br />
    <div style="height: 3rem">
      <v-divider vertical style="background: #e67e22" />
    </div>
    <br />
    <v-btn
      class="main--btn"
      outlined
      color="#e67e22"
      href="https://discord.vortekacademy.com"
      target="_blank"
      style="background: transparent"
      >Join Our Discord</v-btn
    >
    <br />
    <v-btn text depressed @click="scroll()" style="margin: 3rem 0">
      <v-icon color="white">mdi-arrow-down-circle-outline</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    scroll() {
      window.scrollTo(0, document.body.scrollHeight);
    },
  },
};
</script>

<style scoped>
.main--btn {
  background: linear-gradient(to right, white 50%, transparent 50%) !important;
  transition: all 0.5s ease-out !important;
  background-size: 200% 100% !important;
  background-position: right bottom !important;
}

.main--btn:hover {
  border: 0px;
  color: black !important;
  background-position: left bottom !important;
}
</style>
