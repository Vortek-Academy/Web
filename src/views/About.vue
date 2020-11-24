<template>
  <v-container fluid style="margin-top: 8rem">
    <v-layout align-center justify-center>
      <v-card class="text-center white--text" dark max-width="60%">
        <v-img src="https://imgur.com/dsRurek.png"></v-img>
        <h1
          style="
            margin-top: 17px;
            font-weight: 300;
            letter-spacing: 2px;
            font-family: Bebas Neue, sans-serif;
          "
        >
          About <span style="color: #e67e22">VA</span>
        </h1>
        <v-card-text style="font-size: 16px">
          VorteK Academy is an independent tournament organizer and gaming
          community working in partnership with other figureheads of the Asian
          Rocket League scene, aiming to spotlight the many talented players
          across the Asian subcontinent. Our aim and primary goal are to
          showcase the best of Rocket League.
        </v-card-text>
      </v-card>
    </v-layout>
    <h1
      class="text-center white--text"
      style="
        margin-top: 5rem;
        font-weight: 300;
        letter-spacing: 2px;
        font-family: Bebas Neue, sans-serif;
      "
    >
      Our <span style="color: #e67e22">Staff</span>
    </h1>
    <v-sheet
      class="mx-auto"
      max-width="70%"
      style="margin: 3.5rem; background: transparent"
    >
      <v-slide-group dark show-arrows style="color: whitesmoke">
        <v-slide-item v-for="user in users" :key="user.username">
          <div style="margin: 8px" class="text-center">
            <v-avatar size="95">
              <v-img :src="user.avatar"></v-img>
            </v-avatar>
            <br />
            {{ user.username }}
            <br />
            <span style="color: #e67e22; font-size: 14px">#{{ user.tag }}</span>
          </div>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  name: 'About',
  data: () => ({
    users: [],
  }),
  beforeMount() {
    fetch('http://localhost:3002/api/member/492182284812812304')
      .then((res) => res.json())
      .then((res) => {
        this.users = res;
      });
  },
};
</script>

<style scoped></style>
