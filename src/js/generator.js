/* function* helloworldGenerator(){
    var time = 1;
    console.log('first itme');
    yield function(){ var a = 4; return a};
    console.log('second itme',++time);
    yield 123+456;
    console.log('third itme',++time);
    return 'ending';
    console.log('end time',++time);
}
var hw = helloworldGenerator();
console.log(hw.next().value())
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())
console.log(hw.next()) */


/* var arr = [1,[[2,3],4],[5,6]];
var flat = function* (a){
    var length = a.length;
    for(var i=0; i<length ; i++ ){
        var item = a[i];
        if(typeof item !== 'number'){
            yield* flat(item)
        }else{
            yield item;
        }
    }
}
for(var f of flat(arr)){
    console.log(f);
} */


/* function* foo() {
    for (var i = 0; true; i++) {
        var reset = yield i;
        console.log("reset", reset);
        if (reset) { i = -1; }
    }
}

var g = foo();
console.log(0, g.next());
console.log(1, g.next());
console.log(2, g.next(true));
console.log(3, g.next());
 */


/* 
 function* foo(x){
     var y = 2 * (yield (x+1));
     var z = yield(y/3);
     console.log(x,y,z)
     return (x+y+z);
 }

 var a = foo(5);
console.log(a.next()); //x=5 ; out:6
console.log(a.next(12)); //y=24 ; out:8
console.log(a.next(13)); //z=13 ; out:42
 */

//利用generator函数和for...of循环实现斐波那契数列
/* 
function *fibonacci(){
    let [ prev , curr] = [ 0 ,1 ] ; 
    for(;;){
        [ prev , curr ] = [ curr , prev + curr ] ; 
        yield curr;
    }
}

for(let n of fibonacci()){
    if( n > 1000 ) break ; 
    console.log(n)
}
 */


//for...of循环、扩展运算符(...)、解构赋值和array.from方法内部调用的都是遍历器接口。这意味着，他们可以将Generator函数返回的Iterator对象作为参数。
/* 
function* numbers(){
    yield 1;
    yield 2;
    return 3;
    yield 4;
}
var n = numbers();
console.log(n)
console.log(n.next());
console.log(n.next());
console.log(n.next());
console.log(n.next());
console.log(n.next());

console.log([...numbers()]);

console.log(Array.from(numbers()));

let [ x , y ] = numbers();
console.log(x,y)

for( let n of numbers() ) {
    console.log(n)
}
 */


 //利用for...of循环可以写出遍历任意对象的方法。原生js对象没有遍历接口，无法使用 for...of循环，通过Generator函数为它加上这个接口就可以使用了

 function* objectEntries( obj ){
     let propKeys = Reflect.ownKeys( obj );
     for( let propkey of propKeys){
         yield [ propkey , obj[ propkey ] ];
     }
 }

 let jane = { first : ' Jane ' , last : ' Doe' };
 for(let [ key , value ] of objectEntries(jane) ){
     console.log( `${key} : ${value} ` );
 }