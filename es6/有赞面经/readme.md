# 有赞面经
## es6新特性
- css选择器

- 选择器的优先级
    1,0,0,0   style=""
    0,1,0,0   id
    0,0,1,0   class
    0,0,0,1   元素 div h2
    0,0,0,0   * > + ~ 

- flex布局

- position 有哪些属性

- absolute, relative, flxed 定位的区别
  相对于包含块

- es6新特性

- es5和es6写法上有什么不同

- let,const,var的区别
  块级： let/const  var没用
  var：变量提升
  暂时性死区

- 箭头函数和普通函数的区别
  1. this

- js异步处理方式有哪些
  回调函数 promise async+await 

- Promise有哪些静态属性
   http://www.mamicode.com/info-detail-1875112.html
  1. Promise.all
    接收一个 promise对象的数组作为参数
    有一个失败 则失败
  2. Promise.race
  3. Promise.allSettled 宽松  不管成功或失败 只管异步任务结束

- js的数据类型


- 什么是闭包，闭包可以用来做什么
  闭包：闭包可以让你从内部函数访问外部函数作用域
  作用：模仿块级作用域 储存变量 封装私有变量
  (作用域) 词法环境

- js有哪些类型检查的方法

- instance of在原型链上的查找方式，是递归还是...？
  语法：object instanceof constructor
  instanceof 运算符用于检测构造函数的 prototype(constructor.prototype) 属性
  是否出现在某个实例对象(object )的原型链上。

  1. 判断构造函数上面存不存在 symbol.hasInstance 的方法
  如果有这个方法，则取这个方法的返回值
  2. 否则判断 左边这个对象的原型链上面  存不存在 右边这个构造函数的prototype
 

- call,bind,apply的区别

- 浏览器事件模型，一个点击按钮点完发生了什么？
  事件流

- 如何对多个事件进行处理？
  1. 有一万个 li 节点 给这些节点绑上事件？ 事件代理
  2. 全局事件（定时器） 一定要清理

- 跨域，同源策略

- jsonp的原理

- cors跨域有哪些头部

- cookie,seesion,localstorage的区别