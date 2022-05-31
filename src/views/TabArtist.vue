<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab Artist</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Artist</ion-title>
        </ion-toolbar>
      </ion-header>

      <Explore name="Artist page" />
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
  name: "TabArtist",
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
