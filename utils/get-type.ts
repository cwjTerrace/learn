export default function getType(obj: any): string {
  const types = Object.prototype.toString.call(obj).match(/\[object (\S*)\]/);
  return types![1];
}
