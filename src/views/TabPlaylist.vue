<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab Playlist</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Playlist</ion-title>
        </ion-toolbar>
      </ion-header>

      <Explore name="Playlist page" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import Explore from "@/components/Explore.vue";

export default defineComponent({
  name: "TabPlaylist",
  components: {
    Explore,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
  },
});
</script>
