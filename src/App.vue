<template>
  <v-app style="top: 0; left: 0">
    <div id="backdrop"></div>
    <div id="main">
      <Navigator
        style="z-index: 500; position: fixed; width: 100%; margin-top: 1rem"
      />
      <router-view />
      <v-divider style="background: #e67e22; margin-top: 7rem" />
      <Footer style="z-index: 500; width: 100%; bottom: 0; left: 0" />
    </div>
  </v-app>
</template>

<script>
import Navigator from '@/components/Navigator';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: { Navigator, Footer },
  data: () => ({
    //
  }),
};
</script>

<style>
#backdrop {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: url(https://i.imgur.com/SJ3DaWC.jpg);
  background-size: cover;
  position: fixed;
  overflow: hidden;
}
#main {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
}
</style>
