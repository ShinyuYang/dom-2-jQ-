const api1=jQuery('.test')//不返回元素,返回api这个对象
api1.addClass('blue')
const api2=api1.find('.child').addClass('red')

api1.addClass('green')//遍历所有刚才获取的元素,添加.red;
//链式操作原理:调用完了red之后返回api,是个对象所以可以继续调用addClass
//obj.fn(p1)等价于obj.fn(this.p1) this就是api