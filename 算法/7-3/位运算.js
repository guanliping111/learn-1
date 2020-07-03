// 十进制转二进制

//左移
//将二进制全部左移,然后补全右边空出来的一项
// 各二进位全部左移若干位，高位丢弃，低位补0
10 << 1 ===> 20
1010 << 10100

10100 20

//右移
//将二进制全部右移,然后移除后右边多出来的一项
//各二进位全部右移若干位，对无符号数，高位补0，
//有符号数，各编译器处理方法不一样，有的补符号位（算术右移），有的补0（逻辑右移）
1010 << 101

// 按位与 &
 8 & 7  ===> 0
 1000 & 0111 ===> 0000
//两位同时为1，结果才为1，否则结果为0。

//按位或 |
8 | 7  ===> 15
//有一个为1，其值为1

//按位异或 ^
8 ^ 7 ===> 15

// 相同为0，相异为1

//两数不使用四则运算得出 和
//  a + b = a ^ b + ((a & b) << 1)
function sum(a, b) {
    if(a === 0) return b;
    if(b === 0) return a;
    let newA = a ^ b;  //10
    let newB = (a & b) << 1;
    return sum(newA,newB);
}
console.log(sum(9, 3));
// 1001 0011 => 00010