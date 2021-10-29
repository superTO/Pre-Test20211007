/** leetcode 509 */
/** Time complexity O(n), Space complexity O(n) */
// function fib(n: number): number {
//     const dp: number[] = [0,1];
//     for(let i = 2; i <= n; ++i){
//         dp[i] = dp[i-1] + dp[i-2];
//     }
//     return dp[n];
// };
/** Time complexity O(n), Space complexity O(1) */
// function fib(n: number): number {
//     if(n === 0) return 0;
//     let a = 0, b = 1;
//     for(let i = 2; i <= n; ++i){
//         let sum = a + b;
//         [a, b] = [b, sum];
//     }
//     return b;
// };
/** Recursive */
/** Time complexity O(2^n), Space complexity O(n) -> (https://syedtousifahmed.medium.com/fibonacci-iterative-vs-recursive-5182d7783055)*/
function fib(n) {
    if (n < 2)
        return n;
    return fib(n - 1) + fib(n - 2);
}
;
/** test case */
console.log(fib(0)); //0
console.log(fib(1)); //1
console.log(fib(2)); //1
console.log(fib(3)); //2
console.log(fib(4)); //3
