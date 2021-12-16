export default function getType(obj: any) {
  const types = Object.prototype.toString.call(obj).match(/\[object (\S*)\]/);
  return types ? types[1] : null;
}
