## date 2020-4-27  -- 4-28
## DOM document 文档就是网页
- js -> html 转化
- appendChild
- 如何添加文本
ul>li>Textnode
document.createElement('tag') 标签节点 => nodeType值=1 可以添加属性值 
document.createTextNode(tag) 文本节点  => nodeType值=3

tag: 为对象 object 为标签 为文本
- nodeType

- 插入html标签 步骤
1. document.createElement('tag') 
2. document.createTextNode(student.name) 
3. oLi.appendChild(oA);

- insertBefore
 
## 面向业务编程
- this.state.liked  true/false html更新
- 分步
1. 动态的讲like botton 添加到页面上
2. likeButton  创建class 类 方便复用
3. 既要用 Html 快速完成DOM ，又要能添加事件
  - 要dom 节点对象
  - innerHTML
## this 指向  你不知道的javascript
- 作为对象方法的调用,this 指向对象本身
- 作为事件对象， this 指向事件发生的元素
  bind 可以强行去绑定函数内部的this指定
   

## 封装 class 复用
- constructor 声明属性 this.state
- render() 渲染到页面上
- changeLikeText()

  class LikeBotton {
      constructor () {

      }
      render() {

      }
      changeLikeText() {

      }
  }

