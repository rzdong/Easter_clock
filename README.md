# Easter_clock
this is a clock that is builded by canvas of html and javascript

# 目前是一个硬编码的固定500*500的时钟，时针长160（160/250），分针长210（210/250），秒针长250（250/250）

----------

##封装的时钟组件
clock（）函数传入的参数分别有canvas长宽，按要求长宽要一致，三个指针颜色，依次是秒，时，分，
大概如此：
clock(500,500,"#ff0000","#000000","#00ff00")
此外，只需要在html中插入canvas标签调用函数传入参数就可以