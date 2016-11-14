# Easter_clock
this is a clock that is builded by canvas of html and javascript

# 目前是一个能够根据给定的直径自适应的时钟，时针长160（160/250），分针长210（210/250），秒针长250（250/250）
指针粗细，长短，刻度粗细，都相对半径变化。

----------

##封装的时钟组件
clock（）函数传入的参数是整个canvas画布的边长，默认是正方形不可改变
大概如此：
clock(500）
此外，只需要在html中插入canvas标签调用函数传入参数就可以