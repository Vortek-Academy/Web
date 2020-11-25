<template>
  <v-app style="top: 0; left: 0">
    <div id="backdrop"></div>
    <div id="main">
      <Navigator style="z-index: 1000; position: fixed; width: 100%" />
      <router-view />
    </div>
  </v-app>
</template>

<script>
import Navigator from '@/components/Navigator';

export default {
  name: 'App',
  components: { Navigator },
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
