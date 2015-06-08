
[预览改版前demo](http://aralic.github.io/ToDo)

-------------------------
这个todo有一个多月了。五月中旬做完task3，接触到了mvc模式，本来想使用mvc改写task3的，
但是好困难，后来又去学了backbone，这次算是理解了mvc模式，但是只是停留在表面能看懂api，
还是没办法运用到实际开发中，开发了一小半，进行不下去了，没办法抽象出模型集合，视图等等。

-------------------------

task4，学了一些其他知识，特别是了解到web安全那块，一种好牛掰的感觉。考虑到考试周快要到了，简单完成一下移动端todo（表示不能比我这个更简单了），然后使用require重新改写task3的todo，把能抽出来的模块尽量抽出来了，好像js文件蛮多的。现在还没写完，完成后使用构建工具压缩合并一些。

--------------------------

感谢百度efe的各位大大！


### task3总结

周一提交完task3代码，编码过程中出现了不少状况。
例如：代码组织规范，包括一些命名，缩进等等问题。性能优化。
自己的知识深度和广度都有待提升。

然后这一周每天花几个小时静下心来去阅读思考。<br>

**书单:**


- 《精通css 高级web标准解决方案第二版》


- 《编写可维护的javascript》


- 《基于mvc的javascript Web复应用开发》（只能了前面几章，唉，自己知识水平不够，有些东西还是显得比较抽象。）


- 《javascript高级程序设计》 最近大部分时间都在读这本书了。
 
**笔记**

 - [JavaScript作用域学习笔记][1]
 - [JavaScript原型学习笔记][2]
 - [JavaScript闭包学习笔记][3]
 - [浅析js中的this][4]
 - [浅析js中的继承][5]
 - [CSS预处理之Less][6]

**任务总结**

**布局**

整个页面分为四块，
头部，左栏，中间栏，右栏。
使用绝对定位absolute，通过设置top，right，bottom，left四个值达到继承定位父级高度和宽度。

**js方法**

 - 验证用户输入时间是否为合法时间
<pre>
<code>
function validatorDate(value) {
    var str = trim(value);
    var arr = str.split('-');
    if (arr.length == 3) {
        var date = new Date(arr[0], arr[1],arr[2]);
        var Y = date.getFullYear();
        var M = date.getMonth();
        var D = date.getDate()
        if(D==arr[2] && Y==arr[0] && M==(arr[1])) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
</code>
</pre>

未来待续！

  [1]: http://www.cnblogs.com/Aralic/p/4463269.html
  [2]: http://www.cnblogs.com/Aralic/p/4466343.html
  [3]: http://www.cnblogs.com/Aralic/p/4498333.html
  [4]: http://www.cnblogs.com/Aralic/p/4496982.html
  [5]: http://www.cnblogs.com/Aralic/p/4508905.html
  [6]: http://www.cnblogs.com/Aralic/p/4508383.html