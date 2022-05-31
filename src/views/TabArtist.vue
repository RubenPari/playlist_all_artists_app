<template>
  <ion-page>
    <ion-header class="mainHeader">
      <ion-title class="mainTitle">Tab Artist</ion-title>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-card>
        <ion-card-header>
          <ion-card-title class="cardTitle">Card Title</ion-card-title>
          <ion-img src=""></ion-img>
        </ion-card-header>
      </ion-card>
      <ion-fab slot="fixed" class="floatButton">
        <ion-fab-button style="font-size: 50px;"> + </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonPage, IonHeader, IonTitle, IonContent } from "@ionic/vue";

export default defineComponent({
  name: "TabArtist",
  components: {
    IonHeader,
    IonTitle,
    IonContent,
    IonPage,
  },
});
</script>

<style>
ion-page {
  --background: #f4f5f8;
}
.mainHeader {
  margin-top: 50px;
  text-align: center;
}
.mainTitle {
  font-size: 40px;
  font-weight: bold;
  font-style: italic;
}
.cardTitle {
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
  text-align: center;
}

.floatButton {
  position: fixed;
  bottom: 30px;
  right: 30px;
}
</style>
