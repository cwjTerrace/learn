## createClass

创建一个 className，自动添加前缀

## 用法

```javascript
import cls from 'createClass';

 const prefixCls = 'a';

 const createClass = cls(`${prefixCls}-`, '-');

const [prefix, genClass, classNames] = createClass('text');
// prefix => a-text
genClass('foo', 'bar'); // => 'a-text-foo a-text-bar'
genClass('foo', { bar: true }); // => 'a-text-foo a-text-bar'
genClass({ 'foo-bar': true }); // => 'a-text-foo-bar'
genClass({ 'foo-bar': false }); // => ''
genClass({ foo: true }, { bar: true }); // => 'a-text-foo a-text-bar'
genClass({ foo: true, bar: true }); // => 'a-text-foo a-text-bar'
// lots of arguments of various types
genClass('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'a-text-foo a-text-bar a-text-baz a-text-quux'
// other falsy values are just ignored
genClass(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'a-text-bar a-text-1'
// Arrays
genClass('a', ['b', { c: true, d: false }]); // => 'a-text-a a-text-b a-text-c'
// 合并传入的class
classNames('foo', genClass({ bar: true }) // =>  'foo a-text-bar'
```
