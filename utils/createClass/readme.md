## createClass

创建一个 className，自动添加前缀

## 用法

```javascript
import cls from 'createClass';

 const prefixCls = 't';

 const createClass = cls(`${prefixCls}-`, '-');

const [prefix, genClass, classNames] = createClass('text');
// prefix => t-text
genClass('foo', 'bar'); // => 't-text-foo t-text-bar'
genClass('foo', { bar: true }); // => 't-text-foo t-text-bar'
genClass({ 'foo-bar': true }); // => 't-text-foo-bar'
genClass({ 'foo-bar': false }); // => ''
genClass({ foo: true }, { bar: true }); // => 't-text-foo t-text-bar'
genClass({ foo: true, bar: true }); // => 't-text-foo t-text-bar'
// lots of arguments of various types
genClass('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 't-text-foo t-text-bar t-text-baz t-text-quux'
// other falsy values are just ignored
genClass(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 't-text-bar t-text-1'
// Arrays
genClass('a', ['b', { c: true, d: false }]); // => 't-text-a t-text-b t-text-c'
// 合并传入的class
classNames('foo', genClass({ bar: true }) // =>  'foo t-text-bar'
```
