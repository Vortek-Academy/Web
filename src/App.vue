<template>
  <v-app style="background: #141414; top: 0; left: 0">
    <div>
      <Navigator style="z-index: 500; position: fixed; width: 100%" />
      <router-view />
    </div>
  </v-app>
</template>

<script>
import Navigator from "@/components/Navigator";

export default {
  name: "App",
  components: { Navigator },
  data: () => ({
    //
  }),
};
</script>
