export function getLength(arr: Array<any>): number {  return arr.length || 0;}

export function reverse(arr: Array<any>): Array<any> {
  const copy = arr.slice();
  return copy.reverse();
}