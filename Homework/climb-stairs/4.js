// var m = new map();
// m.set(1,'black');
// 最优化 算法
function f(n) {
    if (n == 1) return 1;
    if (n == 2) return 2;
    let ret = 0,
        pre = 2,//前一个是2 重复使用这个空间
        prepre = 1;
        //递归可以优化成循环
        for(let i = 3; i <=n; i++) {
            ret = pre + prepre ;
            prepre = pre;
            pre = ret;
        }
        return ret;
    }
    console.log(f(120));