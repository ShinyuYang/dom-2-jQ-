window.jQuery=function(selectorOrArray){
    let elements
    if (typeof selectorOrArray==='string') {
        elements=document.querySelectorAll(selectorOrArray)    //给一个选择器返回api
    }else if(selectorOrArray instanceof Array){
        elements=selectorOrArray              //给一个数组返回api
    }
    
    //这里声明的api可以操作elements
    return{
        
        find(selector){
            let array=[]
            for(let i=0;i<elements.length;i++){
                const elements2 = Array.from(elements[i].querySelectorAll(selector))
                array = array.concat(elements2)
            }
            array.oldApi=this//this是api
            const newApi=jQuery(array)
            return newApi //这两句可以简化为return jQuery(array)
        },
        each(fn){
            for(let i=0;i<elements.length;i++){
                fn.call(null,elements[i],i)
            }
            return this
        },
        parent(){
            const array=[]
            this.each((node)=>{
                if(array.indexOf(node.parentNode)===-1){
                    array.push(node.parentNode)                    
                }
                
            })
            return jQuery(array)
        },
        children(){
            const array=[]
            this.each((node)=>{
                array.push(...node.children)
            })
            return jQuery(array)
        },
        print(){
            console.log(elements)
        },
        oldApi:selectorOrArray.oldApi,
        end(){
            return this.oldApi//this是新的api
        },
        addClass(className){//声明了一个api对象,有个addClass的key,value是一个Function
            for(let i=0;i<elements.length;i++){
                elements[i].classList.add(className)
            }//闭包,函数访问外部变量
            return this//this就是api
        }
        
    }
    
}