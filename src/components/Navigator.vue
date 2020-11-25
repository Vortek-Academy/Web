<template>
  <v-layout justify-center align-center>
    <v-app-bar dark flat color="transparent" max-width="75%" hide-on-scroll>
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
      <v-btn text depressed to="/shop">Shop</v-btn>
      <v-btn text depressed to="/contact">Contact</v-btn>
      <v-btn text depressed to="/legal">Legal</v-btn>
      <v-spacer />
      <v-btn depressed href="https://paypal.me/vortekacademy" class="special"
        >Donate</v-btn
      >
    </v-app-bar>
  </v-layout>
</template>

<script>
export default {
  name: 'Navigator',
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
