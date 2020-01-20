const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        name: "《算法导论》",
        beginDate: "2006-9",
        price: 85.00,
        count: 1
      },
      {
        name: "《UNIX编程艺术》",
        beginDate: "2006-2",
        price: 59.00,
        count: 1
      },
      {
        name: "《编程大全》",
        beginDate: "2008-10",
        price: 39.00,
        count: 1
      },
      {
        name: "《代码大全》",
        beginDate: "2006-3",
        price: 128.00,
        count: 1
      },
    ]
  },
  methods: {
    decrement(index) {
      return this.books[index].count--;
    },
    increment(index) {
      return this.books[index].count++;
    },
    removeBtn(index) {
      return this.books.splice(index, 1);
    },
  },
  computed: {
    totalPrice() {
      let resultSum = 0;
      for (let i = 0; i < this.books.length; i++) {
        resultSum += this.books[i].price * this.books[i].count;
      }
      return resultSum;
    }
  },
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2);
    }
  }
})

//使用filter的回调函数有一个要求，必须返回boolean值，
//若为true，则加入到新的数组里面
//若为false，则过滤掉这次的数字

//1、过滤小于100的值
//filter的使用
const nums = ['23', '123', '35', '123', '32', '213', '876', '43'];

let newNum = nums.filter(function (n) {
  return n < 100;
})
console.log(newNum);

//2、把原来过滤掉的数字乘以2返回
//map的使用
let new2Num = newNum.map(function (n) {
  return n * 2;
})
console.log(new2Num);

//3、把new2Num里面的数据都相加
//reduce的使用
let total = new2Num.reduce(function (preValue, n) {
  return preValue + n;
}, 0)
console.log(total);

let finalNum = nums.filter(function (n) {
  return n<100
}).map(function (n) {
  return n*2;
}).reduce(function (preValue,n) {
  return preValue + n;
},0)

console.log(finalNum);

/*filter/map/reduce*/
/*1、编程范式： 命令式编程，声明式编程，面向对象编程，函数式编程*/
let result = nums.filter(n => n<100).map(n => n*2).reduce((preValue,n) =>preValue+n)
console.log(result);

