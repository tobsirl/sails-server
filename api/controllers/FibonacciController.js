/**
 * FibonacciController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  fibonacci: function(req, res) {
    let fibnum = 20;
    let resFibNum;

    resFibNum = fibonacci(fibnum);
    console.log(`${fibnum}th Fibonacci number is: ${resFibNum}`);
    res.json({ msg: `${fibnum}th Fibonacci number is: ${resFibNum}` });

    // function for calculating fibonacci number recursively
    function fibonacci(n) {
      if (n < 2) {return 1;}
      else {return fibonacci(n - 2) + fibonacci(n - 1);}
    }
  }
};
