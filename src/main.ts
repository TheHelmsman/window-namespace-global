import { createApp } from "vue";
import App from "./App.vue";

declare global {
  interface Window {
    nameSpacename: any;
  }
}

window.nameSpacename = window.nameSpacename || {};

createApp(App).mount("#app");

//  usage:
window.nameSpacename = {
  numericData: 123,
  stringData: "Hello world",
  arrayData: [],
  objData: {},
};
