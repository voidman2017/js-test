import _ from 'underscore';

/*              each 
_.each(list, iteratee, [context]) Alias: forEach 
遍历list中的所有元素，按顺序用每个元素当做参数调用 iteratee 函数。如果传递了context参数，则把iteratee绑定到context对象上。每次调用iteratee都会传递三个参数：(element, index, list)。
如果list是个JavaScript对象，iteratee的参数是 (value, key, list))。返回list以方便链式调用。 */

/* _.each({one: 7, three: 1 , two: 4, }, function(ele,index,list){
    console.log('ele:',ele)
    console.log('index:',index)
    console.log('list:',list)
}); */



/*             map 
_.map(list, iteratee, [context]) Alias: collect 
通过对list里的每个元素调用转换函数(iteratee迭代器)生成一个与之相对应的数组。
iteratee传递三个参数：value，然后是迭代 index(或 key 愚人码头注：如果list是个JavaScript对象是，这个参数就是key)，最后一个是引用指向整个list。 */

/* var r1 = _.map([1, 2, 3], function(num){ return num * 3; });
console.log(r1)
// => [3, 6, 9]
var r2 = _.map({one: 1, two: 2, three: 3}, function(num, key){console.log(key); return num * 3; });
console.log(r2)
// => [3, 6, 9]
var r3 = _.map([[1, 2], [3, 4]], _.first);
console.log(r3)
// => [1, 3]*/

/*             reduce
_.reduce(list, iteratee, [memo], [context]) Aliases: inject, foldl 
别名为 inject 和 foldl, reduce方法把list中元素归结为一个单独的数值。Memo是reduce函数的初始值，会被每一次成功调用iteratee函数的返回值所取代 。
这个迭代传递4个参数：memo,value 和 迭代的index（或者 key）和最后一个引用的整个 list。 */

/* var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num }, 0);
console.log(sum)

var list = [[0, 1], [2, 3], [4, 5]];
var flat = _.reduceRight(list, function(a, b) { return a.concat(b); }, []);
console.log(flat)
// => [4, 5, 2, 3, 0, 1] */



/*             find 
_.find(list, predicate, [context]) Alias: detect 
在list中逐项查找，返回第一个通过predicate迭代函数真值检测的元素值，如果没有元素通过检测则返回 undefined。 如果找到匹配的元素，函数将立即返回，不会遍历整个list。 */

/* var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(even)  // => 2 */


/*                 filter
_.filter(list, predicate, [context]) Alias: select 
遍历list中的每个值，返回所有通过predicate真值检测的元素所组成的数组。（愚人码头注：如果存在原生filter方法，则用原生的filter方法。） */

/* var even = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(even) //=> [2, 4, 6] */



 /*            where 
    _.where(list, properties) 
遍历list中的每一个值，返回一个数组，这个数组里的元素包含 properties 所列出的键 - 值对。 */

/* var listOfPlays = [
    {title: "Cymbeline", author: "Shakespeare", year: 1611},
    {title: "The Tempest", author: "Shakespeare", year: 1611},
    {title: "hehehehe", author: "Shakespearexxx", year: 1611},
    {title: "hahaha", author: "Shakespeare", year: 1612}
]
var rs = _.where(listOfPlays, {author: "Shakespeare", year: 1611});
console.log(rs) //=> [{title: "Cymbeline", author: "Shakespeare", year: 1611},{title: "The Tempest", author: "Shakespeare", year: 1611}] */



/*             findWhere
_.findWhere(list, properties) 
遍历整个list，返回匹配 properties参数所列出的所有 键 - 值 对的第一个值。
如果没有找到匹配的属性，或者list是空的，那么将返回undefined。  */   
   
/* var publicList = [  { name : 'css' , id : 999 , type : 'web' } ,  { name : 'js' , id : 999 , type : 'web' } , 
    { name : 'js' , id : 666 , type : 'web' } ,  { name : 'js' , id : 999 , type : 'webb' } ]
var rs = _.findWhere(publicList, { name : 'js' , id : 999 });
console.log(rs)  //=> { name : 'js' , id : 999 , type : 'web' } */



/*             reject
_.reject(list, predicate, [context]) 
返回list中没有通过predicate真值检测的元素集合，与filter相反。 */

/* var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(odds) //=> [1, 3, 5] */




/*             every
_.every(list, [predicate], [context]) Alias: all 
如果list中的所有元素都通过predicate的真值检测就返回true。（愚人码头注：如果存在原生的every方法，就使用原生的every。） */

/* var rs = _.every([1, 2, 3, 4, 5, 6], function(num){ return num > 2; });
console.log(rs) //=>false */




/*                 some
_.some(list, [predicate], [context]) Alias: any 
如果list中有任何一个元素通过 predicate 的真值检测就返回true。一旦找到了符合条件的元素, 就直接中断对list的遍历. （愚人码头注：如果存在原生的some方法，就使用原生的some。） */

/* var rs = _.some([1, 2, 3, 4, 5, 6], function(num){ return num > 5; });
console.log(rs) //=>false */



/*                 contains
_.contains(list, value, [fromIndex]) Alias: includes 
如果list包含指定的value则返回true（愚人码头注：使用===检测）。如果list 是数组，内部使用indexOf判断。使用fromIndex来给定开始检索的索引位置。 */

/* var rs = _.contains([1, 2, 3], 3);
console.log(rs) //=> true */




/*                 invoke
_.invoke(list, methodName, *arguments) 
在list的每个元素上执行methodName方法。 任何传递给invoke的额外参数，invoke都会在调用methodName方法的时候传递给它。 */

/* var rs = _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
console.log(rs) //=> [[1, 5, 7], [1, 2, 3]]
 */




 console.log(_)