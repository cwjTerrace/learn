简单明了区分escape、encodeURI和encodeURIComponent

1、如果只是编码字符串，不和URL有半毛钱关系，那么用escape。
2、如果你需要编码整个URL，然后需要使用这个URL，那么用encodeURI。
比如
encodeURI("http://www.cnblogs.com/season-huang/some other thing");
编码后会变为
"http://www.cnblogs.com/season-huang/some%20other%20thing";
其中，空格被编码成了%20。但是如果你用了encodeURIComponent，那么结果变为
"http%3A%2F%2Fwww.cnblogs.com%2Fseason-huang%2Fsome%20other%20thing"
看到了区别吗，连 "/" 都被编码了，整个URL已经没法用了。

3、当你需要编码URL中的参数的时候，那么encodeURIComponent是最好方法。
var param = "http://www.cnblogs.com/season-huang/"; //param为参数
param = encodeURIComponent(param);
var url = "http://www.cnblogs.com?next=" + param;
console.log(url) //"http://www.cnblogs.com?next=http%3A%2F%2Fwww.cnblogs.com%2Fseason-huang%2F"
看到了把，参数中的 "/" 可以编码，如果用encodeURI肯定要出问题，因为后面的/是需要编码的。
