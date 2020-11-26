<template>
  <v-container fluid style="background: #000; height: 30vh">
    <v-container fluid style="height: 94%; width: 80%">
      <v-row class="white--text" style="height: 100%">
        <v-layout align-center>
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
              <a href="https://twitter.com/VortekAcademy" target="_blank">
                <v-icon color="#e67e22">mdi-twitter</v-icon>
              </a>
              <a href="https://instagram.com/vortek.academy" target="_blank">
                <v-icon color="#e67e22">mdi-instagram</v-icon>
              </a>
              <a
                href="https://steamcommunity.com/id/vortekacademy"
                target="_blank"
              >
                <v-icon color="#e67e22">mdi-steam</v-icon>
              </a>
              <a href="https://twitch.tv/vortekacademy" target="_blank">
                <v-icon color="#e67e22">mdi-twitch</v-icon>
              </a>
            </div>
          </div>
        </v-layout>
        <v-spacer />
        <v-layout align-center>
          <div>
            <div>
              <span
                style="
                  font-size: 1.6rem;
                  font-family: 'Bebas Neue', sans-serif;
                  letter-spacing: 2px;
                "
              >
                <u>Resources</u>
              </span>
            </div>
            <div style="margin: 0.8rem 0; font-weight: 500">
              <a href="/contact" style="color: #e67e22">Contact Us</a>
              <br />
              <a href="/legal" style="color: #e67e22">Legal Policies</a>
              <br />
              <div style="margin-top: 1.5rem; color: white">
                Email at
                <a href="mailto:vortekacademy@gmail.com"
                  ><span style="color: #e67e22"
                    >vortekacademy@gmail.com</span
                  ></a
                >
              </div>
            </div>
          </div>
        </v-layout>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
a {
  text-decoration: none;
  margin-right: 0.8rem;
}
</style>
