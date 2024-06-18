import { getLength } from 'array-utils'

const arr = [1,2,3];
const length = getLength(arr);
console.log(`Length is: ${length}`);

// Although we are using a legitimate function, getLength(), just importing
// something from array-utils already triggers the trojan code in the background...